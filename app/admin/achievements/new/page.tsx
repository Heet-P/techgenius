import { AchievementForm } from "@/components/admin/achievement-form"

export default function NewAchievementPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Create New Achievement</h1>
                <p className="text-muted-foreground">Add a new achievement to the achievements section</p>
            </div>
            <AchievementForm mode="create" />
        </div>
    )
}
