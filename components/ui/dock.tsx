"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface DockProps {
  children: React.ReactNode
  className?: string
}

interface DockItemProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

interface DockIconProps {
  children: React.ReactNode
  className?: string
}

interface DockLabelProps {
  children: React.ReactNode
  className?: string
}

const DockContext = React.createContext<{
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}>({
  hoveredIndex: null,
  setHoveredIndex: () => {}
})

export function Dock({ children, className, ...props }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <DockContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      <motion.div
        className={cn(
          'flex gap-2 p-2 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20',
          'shadow-lg shadow-black/20',
          className
        )}
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, { index })
        )}
      </motion.div>
    </DockContext.Provider>
  )
}

export function DockItem({ children, className, index, onClick, ...props }: DockItemProps & { index?: number }) {
  const { hoveredIndex, setHoveredIndex } = React.useContext(DockContext)
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (index !== undefined) setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setHoveredIndex(null)
  }

  const isNeighbor = hoveredIndex !== null && index !== undefined && 
    Math.abs(hoveredIndex - index) === 1

  const scale = isHovered ? 1.3 : isNeighbor ? 1.1 : 1

  return (
    <motion.div
      className={cn(
        'relative flex items-center justify-center w-12 h-12 cursor-pointer',
        'transition-all duration-300 ease-out',
        className
      )}
      animate={{
        scale,
        y: isHovered ? -8 : isNeighbor ? -4 : 0
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function DockIcon({ children, className }: DockIconProps) {
  return (
    <div className={cn('w-8 h-8 flex items-center justify-center', className)}>
      {children}
    </div>
  )
}

export function DockLabel({ children, className }: DockLabelProps) {
  return (
    <div className={cn(
      'absolute -top-10 left-1/2 transform -translate-x-1/2',
      'px-2 py-1 bg-black/80 text-white text-xs rounded',
      'opacity-0 pointer-events-none transition-opacity duration-200',
      'group-hover:opacity-100',
      className
    )}>
      {children}
    </div>
  )
}