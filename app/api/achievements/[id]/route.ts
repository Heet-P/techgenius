import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { supabase } from '@/lib/db'
import { achievementUpdateSchema } from '@/lib/validations/achievement'

// GET /api/achievements/[id] - Get single achievement
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { data, error } = await supabase
            .from('achievements')
            .select('*')
            .eq('id', params.id)
            .single()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Achievement not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ achievement: data })
    } catch (error) {
        console.error('Error fetching achievement:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// PUT /api/achievements/[id] - Update achievement (admin only)
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
        const validationResult = achievementUpdateSchema.safeParse(body)
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validationResult.error.errors },
                { status: 400 }
            )
        }

        const achievementData = validationResult.data

        // Update in database
        const { data, error } = await supabase
            .from('achievements')
            .update(achievementData)
            .eq('id', params.id)
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to update achievement' },
                { status: 500 }
            )
        }

        return NextResponse.json({ achievement: data })
    } catch (error) {
        console.error('Error updating achievement:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// DELETE /api/achievements/[id] - Delete achievement (admin only)
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
            .from('achievements')
            .delete()
            .eq('id', params.id)

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to delete achievement' },
                { status: 500 }
            )
        }

        return NextResponse.json({ message: 'Achievement deleted successfully' })
    } catch (error) {
        console.error('Error deleting achievement:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
