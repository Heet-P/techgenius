import { z } from 'zod'

export const achievementSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required'),
    date: z.string().min(1, 'Date is required'),
    category: z.string().min(1, 'Category is required'),
    impact: z.string().optional(),
    details: z.string().optional(),
    image: z.string().url().nullable().optional(),
})

export const achievementUpdateSchema = achievementSchema.partial()

export type AchievementFormData = z.infer<typeof achievementSchema>
export type AchievementUpdateData = z.infer<typeof achievementUpdateSchema>
