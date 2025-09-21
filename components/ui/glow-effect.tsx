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
    soft: '30px',
    medium: '50px',
    hard: '70px'
  }

  const getAnimationStyle = () => {
    if (mode === 'colorShift') {
      const keyframes = colors.map((color, index) => {
        const percentage = (index / (colors.length - 1)) * 100
        return `${percentage}% { background: radial-gradient(circle, ${color}40 0%, transparent 70%) }`
      }).join(' ')

      return {
        animation: `colorShift ${duration}s ease-in-out infinite`,
        ['--keyframes' as any]: `@keyframes colorShift { ${keyframes} }`
      }
    } else if (mode === 'pulse') {
      return {
        animation: `pulse ${duration}s ease-in-out infinite`,
      }
    }

    return {}
  }

  const staticBackground = mode === 'static' 
    ? `radial-gradient(circle, ${colors[0]}60 0%, ${colors[1] || colors[0]}40 30%, transparent 70%)`
    : undefined

  return (
    <>
      {mode === 'colorShift' && (
        <style jsx>{`
          @keyframes colorShift {
            ${colors.map((color, index) => {
              const percentage = (index / (colors.length - 1)) * 100
              return `${percentage}% { background: radial-gradient(circle, ${color}40 0%, transparent 70%); }`
            }).join(' ')}
          }
        `}</style>
      )}
      <div
        className={cn(
          'absolute inset-0 -z-10 opacity-75',
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