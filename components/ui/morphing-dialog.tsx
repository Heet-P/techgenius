"use client"

import React, { createContext, useContext, useId } from 'react'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface MorphingDialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
  uniqueId: string
}

const MorphingDialogContext = createContext<MorphingDialogContextType | null>(null)

interface MorphingDialogProps {
  children: React.ReactNode
  transition?: MotionProps['transition']
}

export function MorphingDialog({ children, transition }: MorphingDialogProps) {
  const [open, setOpen] = React.useState(false)
  const uniqueId = useId()

  return (
    <MorphingDialogContext.Provider value={{ open, setOpen, uniqueId }}>
      <div className="relative">{children}</div>
    </MorphingDialogContext.Provider>
  )
}

export function MorphingDialogTrigger({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogTrigger must be used within MorphingDialog')

  const { setOpen } = context

  return (
    <motion.div
      layoutId={`dialog-${context.uniqueId}`}
      onClick={() => setOpen(true)}
      className={cn('cursor-pointer', className)}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogContainer({ children }: { children: React.ReactNode }) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogContainer must be used within MorphingDialog')

  const { open } = context

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function MorphingDialogContent({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogContent must be used within MorphingDialog')

  return (
    <motion.div
      layoutId={`dialog-${context.uniqueId}`}
      className={cn('relative max-h-[90vh] overflow-hidden', className)}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogImage({
  src,
  alt,
  className,
  style,
}: {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogImage must be used within MorphingDialog')

  return (
    <motion.img
      layoutId={`dialog-img-${context.uniqueId}`}
      src={src}
      alt={alt}
      className={className}
      style={style}
    />
  )
}

export function MorphingDialogTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogTitle must be used within MorphingDialog')

  return (
    <motion.h3
      layoutId={`dialog-title-${context.uniqueId}`}
      className={cn('text-lg font-semibold', className)}
    >
      {children}
    </motion.h3>
  )
}

export function MorphingDialogSubtitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogSubtitle must be used within MorphingDialog')

  return (
    <motion.p
      layoutId={`dialog-subtitle-${context.uniqueId}`}
      className={cn('text-sm text-muted-foreground', className)}
    >
      {children}
    </motion.p>
  )
}

export function MorphingDialogClose({ className }: { className?: string }) {
  const context = useContext(MorphingDialogContext)
  if (!context) throw new Error('MorphingDialogClose must be used within MorphingDialog')

  const { setOpen } = context

  return (
    <button
      onClick={() => setOpen(false)}
      className={cn(
        'absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors',
        className
      )}
    >
      <X className="h-4 w-4" />
    </button>
  )
}