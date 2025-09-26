"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselContextType {
  currentIndex: number
  totalItems: number
  goToSlide: (index: number) => void
  nextSlide: () => void
  prevSlide: () => void
  canGoNext: boolean
  canGoPrev: boolean
}

const CarouselContext = createContext<CarouselContextType | null>(null)

const useCarousel = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel component')
  }
  return context
}

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  loop?: boolean
}

export function Carousel({ 
  children, 
  className, 
  autoPlay = false, 
  autoPlayInterval = 5000,
  loop = true 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (loop) {
      setCurrentIndex((index + totalItems) % totalItems)
    } else {
      setCurrentIndex(Math.max(0, Math.min(index, totalItems - 1)))
    }
  }, [totalItems, loop])

  const nextSlide = useCallback(() => {
    if (loop || currentIndex < totalItems - 1) {
      goToSlide(currentIndex + 1)
    }
  }, [currentIndex, totalItems, loop, goToSlide])

  const prevSlide = useCallback(() => {
    if (loop || currentIndex > 0) {
      goToSlide(currentIndex - 1)
    }
  }, [currentIndex, loop, goToSlide])

  const canGoNext = loop || currentIndex < totalItems - 1
  const canGoPrev = loop || currentIndex > 0

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalItems <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextSlide, totalItems])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  const contextValue: CarouselContextType = {
    currentIndex,
    totalItems,
    goToSlide,
    nextSlide,
    prevSlide,
    canGoNext,
    canGoPrev,
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className={cn('relative w-full', className)}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === CarouselContent) {
            return React.cloneElement(child, { setTotalItems } as any)
          }
          return child
        })}
      </div>
    </CarouselContext.Provider>
  )
}

interface CarouselContentProps {
  children: React.ReactNode
  className?: string
  setTotalItems?: (count: number) => void
}

export function CarouselContent({ children, className, setTotalItems }: CarouselContentProps) {
  const { currentIndex } = useCarousel()
  const itemCount = React.Children.count(children)

  useEffect(() => {
    if (setTotalItems) {
      setTotalItems(itemCount)
    }
  }, [itemCount, setTotalItems])

  return (
    <div className={cn('overflow-hidden rounded-lg', className)}>
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

interface CarouselItemProps {
  children: React.ReactNode
  className?: string
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}>
      {children}
    </div>
  )
}

interface CarouselNavigationProps {
  className?: string
  alwaysShow?: boolean
}

export function CarouselNavigation({ className, alwaysShow = false }: CarouselNavigationProps) {
  const { nextSlide, prevSlide, canGoNext, canGoPrev } = useCarousel()

  return (
    <>
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        disabled={!canGoPrev}
        className={cn(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10',
          'flex h-10 w-10 items-center justify-center rounded-full',
          'bg-background/80 backdrop-blur-sm border border-border',
          'text-foreground hover:bg-background transition-all duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'hover:scale-110 active:scale-95',
          'shadow-lg hover:shadow-xl',
          !alwaysShow && 'opacity-0 group-hover:opacity-100',
          className
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        disabled={!canGoNext}
        className={cn(
          'absolute right-4 top-1/2 -translate-y-1/2 z-10',
          'flex h-10 w-10 items-center justify-center rounded-full',
          'bg-background/80 backdrop-blur-sm border border-border',
          'text-foreground hover:bg-background transition-all duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'hover:scale-110 active:scale-95',
          'shadow-lg hover:shadow-xl',
          !alwaysShow && 'opacity-0 group-hover:opacity-100',
          className
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  )
}

interface CarouselIndicatorProps {
  className?: string
}

export function CarouselIndicator({ className }: CarouselIndicatorProps) {
  const { currentIndex, totalItems, goToSlide } = useCarousel()

  if (totalItems <= 1) return null

  return (
    <div className={cn(
      'flex justify-center space-x-2 mt-6',
      className
    )}>
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={cn(
            'h-2 rounded-full transition-all duration-200',
            'hover:scale-125',
            index === currentIndex 
              ? 'w-8 bg-primary' 
              : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

// Export hook for external use
export { useCarousel }