import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { supabase } from '@/lib/db'
import { eventUpdateSchema } from '@/lib/validations/event'

// GET /api/events/[id] - Get single event
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { data, error } = await supabase
            .from('events')
            .select('*')
            .eq('id', params.id)
            .single()

        if (error) {
            if (error.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Event not found' },
                    { status: 404 }
                )
            }
            console.error('Database error:', error)
            return NextResponse.json(
                { error: 'Failed to fetch event' },
                { status: 500 }
            )
        }

        return NextResponse.json({ event: data })
    } catch (error) {
        console.error('Error fetching event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// PUT /api/events/[id] - Update event (admin only)
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
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
        const validationResult = eventUpdateSchema.safeParse(body)
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validationResult.error.errors },
                { status: 400 }
            )
        }

        const eventData = {
            ...validationResult.data,
            updated_at: new Date().toISOString()
        }

        // Update in database
        const { data, error } = await supabase
            .from('events')
            .update(eventData)
            .eq('id', params.id)
            .select()
            .single()

        if (error) {
            if (error.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Event not found' },
                    { status: 404 }
                )
            }
            console.error('Database error:', error)
            return NextResponse.json(
                { error: 'Failed to update event' },
                { status: 500 }
            )
        }

        return NextResponse.json({ event: data })
    } catch (error) {
        console.error('Error updating event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// DELETE /api/events/[id] - Delete event (admin only)
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Check authentication
        const session = await auth()
        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        // Delete from database
        const { error } = await supabase
            .from('events')
            .delete()
            .eq('id', params.id)

        if (error) {
            console.error('Database error:', error)
            return NextResponse.json(
                { error: 'Failed to delete event' },
                { status: 500 }
            )
        }

        return NextResponse.json({ message: 'Event deleted successfully' })
    } catch (error) {
        console.error('Error deleting event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
