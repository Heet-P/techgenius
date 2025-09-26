import { GlowEffect } from '@/components/ui/glow-effect'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export function GlowButton({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  onClick 
}: GlowButtonProps) {
  const variants = {
    primary: ['#f63b3bff', '#1D4ED8', '#60A5FA', '#ff0000ff'],
    secondary: ['#10B981', '#059669', '#34D399', '#A7F3D0'],
    accent: ['#8B5CF6', '#7C3AED', '#A78BFA', '#DDD6FE']
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <div className='relative group'>
      <GlowEffect
        colors={variants[variant]}
        mode='colorShift'
        blur='medium'
        duration={3}
        scale={0.9}
      />
      <button 
        className={cn(
          'relative inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-300',
          'bg-gray-950/90 text-white backdrop-blur-sm',
          'border border-white/20 hover:border-white/30',
          'shadow-lg hover:shadow-xl',
          'hover:scale-105 active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
          sizes[size],
          className
        )}
        onClick={onClick}
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {children}
      </button>
    </div>
  )
}

// Specific button variants
export function PrimaryGlowButton({ children, ...props }: Omit<GlowButtonProps, 'variant'>) {
  return (
    <GlowButton variant="primary" {...props}>
      {children}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </GlowButton>
  )
}

export function SecondaryGlowButton({ children, ...props }: Omit<GlowButtonProps, 'variant'>) {
  return (
    <GlowButton variant="secondary" {...props}>
      {children}
    </GlowButton>
  )
}

export function AccentGlowButton({ children, ...props }: Omit<GlowButtonProps, 'variant'>) {
  return (
    <GlowButton variant="accent" {...props}>
      {children}
    </GlowButton>
  )
}