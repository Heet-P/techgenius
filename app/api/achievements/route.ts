import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { supabase } from '@/lib/db'
import { achievementSchema } from '@/lib/validations/achievement'

// GET /api/achievements - Fetch all achievements
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const category = searchParams.get('category')

        let query = supabase
            .from('achievements')
            .select('*')
            .order('date', { ascending: false })

        // Filter by category if provided
        if (category) {
            query = query.eq('category', category)
        }

        const { data, error } = await query

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to fetch achievements' },
                { status: 500 }
            )
        }

        return NextResponse.json({ achievements: data || [] })
    } catch (error) {
        console.error('Error fetching achievements:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// POST /api/achievements - Create new achievement (admin only)
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
        const validationResult = achievementSchema.safeParse(body)
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validationResult.error.errors },
                { status: 400 }
            )
        }

        const achievementData = validationResult.data

        // Insert into database
        const { data, error } = await supabase
            .from('achievements')
            .insert([achievementData])
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to create achievement' },
                { status: 500 }
            )
        }

        return NextResponse.json({ achievement: data }, { status: 201 })
    } catch (error) {
        console.error('Error creating achievement:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
