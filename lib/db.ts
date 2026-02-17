import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface Event {
    id: string
    title: string
    date: string
    time: string
    location: string
    attendees: number
    max_attendees: number
    type: string
    description: string
    full_description: string
    image: string | null
    highlights: string[]
    status: 'upcoming' | 'past'
    created_at: string
    updated_at: string
}

export interface EventInsert {
    title: string
    date: string
    time: string
    location: string
    attendees?: number
    max_attendees: number
    type: string
    description: string
    full_description: string
    image?: string | null
    highlights: string[]
    status: 'upcoming' | 'past'
}

export interface EventUpdate {
    title?: string
    date?: string
    time?: string
    location?: string
    attendees?: number
    max_attendees?: number
    type?: string
    description?: string
    full_description?: string
    image?: string | null
    highlights?: string[]
    status?: 'upcoming' | 'past'
    updated_at?: string
}

// Achievement types
export interface Achievement {
    id: string
    title: string
    description: string
    date: string
    category: string
    impact: string | null
    details: string | null
    image: string | null
    created_at: string
    updated_at: string
}

export interface AchievementInsert {
    title: string
    description: string
    date: string
    category: string
    impact?: string | null
    details?: string | null
    image?: string | null
}

export interface AchievementUpdate {
    title?: string
    description?: string
    date?: string
    category?: string
    impact?: string | null
    details?: string | null
    image?: string | null
    updated_at?: string
}
