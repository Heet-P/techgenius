import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { supabase } from '@/lib/db'
import { eventSchema } from '@/lib/validations/event'

// GET /api/events - Get all events
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status') // 'upcoming' or 'past'

        let query = supabase
            .from('events')
            .select('*')
            .order('created_at', { ascending: false })

        if (status && (status === 'upcoming' || status === 'past')) {
            query = query.eq('status', status)
        }

        const { data, error } = await query

        if (error) {
            console.error('Database error:', error)
            return NextResponse.json(
                { error: 'Failed to fetch events' },
                { status: 500 }
            )
        }

        return NextResponse.json({ events: data })
    } catch (error) {
        console.error('Error fetching events:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// POST /api/events - Create new event (admin only)
export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const session = await auth()
        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const body = await request.json()

        // Validate request body
        const validationResult = eventSchema.safeParse(body)
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validationResult.error.errors },
                { status: 400 }
            )
        }

        const eventData = validationResult.data

        // Insert into database
        const { data, error } = await supabase
            .from('events')
            .insert([eventData])
            .select()
            .single()

        if (error) {
            console.error('Database error:', error)
            return NextResponse.json(
                { error: 'Failed to create event' },
                { status: 500 }
            )
        }

        return NextResponse.json({ event: data }, { status: 201 })
    } catch (error) {
        console.error('Error creating event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
