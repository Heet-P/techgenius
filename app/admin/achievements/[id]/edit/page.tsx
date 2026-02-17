import { AchievementForm } from "@/components/admin/achievement-form"
import { supabase } from "@/lib/db"
import { notFound } from "next/navigation"

export default async function EditAchievementPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const { data: achievement, error } = await supabase
        .from("achievements")
        .select("*")
        .eq("id", id)
        .single()

    if (error || !achievement) {
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
