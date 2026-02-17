import { AchievementForm } from "@/components/admin/achievement-form"
import { notFound } from "next/navigation"

async function getAchievement(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/achievements/${id}`, {
        cache: "no-store",
    })

    if (!response.ok) return null

    const data = await response.json()
    return data.achievement
}

export default async function EditAchievementPage({ params }: { params: { id: string } }) {
    const achievement = await getAchievement(params.id)

    if (!achievement) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Edit Achievement</h1>
                <p className="text-muted-foreground">Update achievement information</p>
            </div>
            <AchievementForm achievement={achievement} mode="edit" />
        </div>
    )
}
