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
    default: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'],
    primary: ['#0894FF', '#3B82F6', '#60A5FA', '#DBEAFE'],
    secondary: ['#10B981', '#059669', '#34D399', '#A7F3D0'],
    accent: ['#C959DD', '#8B5CF6', '#A78BFA', '#DDD6FE']
  }

  return (
    <div className={cn('relative group', className)}>
      <GlowEffect
        colors={variants[variant]}
        mode='static'
        blur='medium'
        scale={1.1}
        className={hover ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-500' : ''}
      />
      <Card className={cn(
        'relative bg-gray-950/80 backdrop-blur-xl border-white/20',
        'shadow-xl hover:shadow-2xl transition-all duration-300',
        hover && 'hover:scale-105 hover:border-white/30',
        'hover:bg-gray-950/90'
      )}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
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
    <GlowCard variant="default" className={className} {...props}>
      {children}
    </GlowCard>
  )
}