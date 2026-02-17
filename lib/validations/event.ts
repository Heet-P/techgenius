import { z } from 'zod'

export const eventSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    date: z.string().min(1, 'Date is required'),
    time: z.string().min(1, 'Time is required'),
    location: z.string().min(1, 'Location is required'),
    attendees: z.number().int().min(0).default(0),
    max_attendees: z.number().int().min(1, 'Max attendees must be at least 1'),
    type: z.string().min(1, 'Event type is required'),
    description: z.string().min(1, 'Description is required'),
    full_description: z.string().optional(),
    image: z.string().url().nullable().optional(),
    highlights: z.array(z.string()).default([]),
    status: z.enum(['upcoming', 'past']).default('upcoming'),
})

export const eventUpdateSchema = eventSchema.partial()

export type EventFormData = z.infer<typeof eventSchema>
export type EventUpdateData = z.infer<typeof eventUpdateSchema>
