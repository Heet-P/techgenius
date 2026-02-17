"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react"
import type { Achievement } from "@/lib/db"

export default function AchievementsPage() {
    const router = useRouter()
    const [achievements, setAchievements] = useState<Achievement[]>([])
    const [loading, setLoading] = useState(true)
    const [deleting, setDeleting] = useState<string | null>(null)

    useEffect(() => {
        fetchAchievements()
    }, [])

    const fetchAchievements = async () => {
        try {
            const response = await fetch("/api/achievements")
            const data = await response.json()
            setAchievements(data.achievements || [])
        } catch (error) {
            console.error("Error fetching achievements:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this achievement?")) return

        setDeleting(id)
        try {
            const response = await fetch(`/api/achievements/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) throw new Error("Failed to delete")

            setAchievements(achievements.filter((a) => a.id !== id))
            alert("Achievement deleted successfully")
        } catch (error) {
            console.error("Error deleting achievement:", error)
            alert("Failed to delete achievement")
        } finally {
            setDeleting(null)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Achievements</h1>
                    <p className="text-muted-foreground">Manage major achievements and milestones</p>
                </div>
                <Button onClick={() => router.push("/admin/achievements/new")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Achievement
                </Button>
            </div>

            {achievements.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-16">
                        <p className="text-muted-foreground mb-4">No achievements yet</p>
                        <Button onClick={() => router.push("/admin/achievements/new")}>
                            <Plus className="mr-2 h-4 w-4" />
                            Create First Achievement
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement) => (
                        <Card key={achievement.id} className="group hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                {achievement.image && (
                                    <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline">{achievement.category}</Badge>
                                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                                    </div>

                                    <h3 className="font-bold text-lg line-clamp-2">{achievement.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {achievement.description}
                                    </p>

                                    {achievement.impact && (
                                        <p className="text-xs text-accent font-medium">
                                            Impact: {achievement.impact}
                                        </p>
                                    )}

                                    <div className="flex gap-2 pt-4 border-t">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1"
                                            onClick={() => router.push(`/admin/achievements/${achievement.id}/edit`)}
                                        >
                                            <Pencil className="mr-2 h-3 w-3" />
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                                            onClick={() => handleDelete(achievement.id)}
                                            disabled={deleting === achievement.id}
                                        >
                                            {deleting === achievement.id ? (
                                                <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                                            ) : (
                                                <Trash2 className="mr-2 h-3 w-3" />
                                            )}
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
