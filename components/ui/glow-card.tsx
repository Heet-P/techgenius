import { GlowEffect } from '@/components/ui/glow-effect'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  hover?: boolean
}

export function GlowCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}: GlowCardProps) {
  const variants = {
    default: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'], // Blue to purple to cyan
    primary: ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD'], // Blue gradient
    secondary: ['#059669', '#10B981', '#34D399', '#6EE7B7'], // Green gradient
    accent: ['#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD']  // Purple gradient
  }

  return (
    <div className={cn('relative group', className)}>
      <GlowEffect
        colors={variants[variant]}
        mode='static'
        blur='medium'
        scale={1.2}
        className="opacity-60 group-hover:opacity-90 transition-opacity duration-500"
      />
      <Card className={cn(
        'relative backdrop-blur-xl',
        'shadow-xl hover:shadow-2xl transition-all duration-300',
        hover && 'hover:scale-105',
        'border-border/50 hover:border-border'
      )}>
        {children}
      </Card>
    </div>
  )
}

// Specialized card components
export function ProfileGlowCard({ 
  children, 
  className,
  ...props 
}: Omit<GlowCardProps, 'variant'>) {
  return (
    <GlowCard variant="accent" className={className} {...props}>
      {children}
    </GlowCard>
  )
}

export function EventGlowCard({ 
  children, 
  className,
  ...props 
}: Omit<GlowCardProps, 'variant'>) {
  return (
    <GlowCard variant="primary" className={className} {...props}>
      {children}
    </GlowCard>
  )
}

export function PartnerGlowCard({ 
  children, 
  className,
  ...props 
}: Omit<GlowCardProps, 'variant'>) {
  return (
    <GlowCard variant="secondary" className={className} {...props}>
      {children}
    </GlowCard>
  )
}

export function StatsGlowCard({ 
  children, 
  className,
  ...props 
}: Omit<GlowCardProps, 'variant'>) {
  return (
    <GlowCard variant="default" className={className} hover={false} {...props}>
      {children}
    </GlowCard>
  )
}