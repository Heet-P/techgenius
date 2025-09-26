"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface GlowEffectProps {
  colors: string[]
  mode?: 'static' | 'colorShift' | 'pulse'
  blur?: 'soft' | 'medium' | 'hard'
  duration?: number
  scale?: number
  className?: string
}

export function GlowEffect({
  colors,
  mode = 'static',
  blur = 'medium',
  duration = 3,
  scale = 1,
  className
}: GlowEffectProps) {
  const blurValues = {
    soft: '20px',
    medium: '40px',
    hard: '60px'
  }

  const getAnimationStyle = () => {
    if (mode === 'colorShift') {
      return {
        animation: `colorShift ${duration}s ease-in-out infinite`,
      }
    } else if (mode === 'pulse') {
      return {
        animation: `pulse ${duration}s ease-in-out infinite`,
      }
    }
    return {}
  }

  // Create a much more visible static background
  const staticBackground = mode === 'static' 
    ? `radial-gradient(circle, ${colors[0]}80 0%, ${colors[1] || colors[0]}60 20%, ${colors[2] || colors[0]}40 40%, transparent 80%)`
    : undefined

  return (
    <>
      {mode === 'colorShift' && (
        <style jsx>{`
          @keyframes colorShift {
            ${colors.map((color, index) => {
              const percentage = (index / (colors.length - 1)) * 100
              return `${percentage}% { background: radial-gradient(circle, ${color}80 0%, ${color}60 20%, transparent 60%); }`
            }).join(' ')}
          }
        `}</style>
      )}
      <div
        className={cn(
          'absolute inset-0 -z-10',
          className
        )}
        style={{
          background: staticBackground,
          filter: `blur(${blurValues[blur]})`,
          transform: `scale(${scale})`,
          ...getAnimationStyle()
        }}
      />
    </>
  )
}