"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { achievementSchema, type AchievementFormData } from "@/lib/validations/achievement"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Loader2 } from "lucide-react"
import type { Achievement } from "@/lib/db"

interface AchievementFormProps {
    achievement?: Achievement
    mode: "create" | "edit"
}

export function AchievementForm({ achievement, mode }: AchievementFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [imageUrl, setImageUrl] = useState(achievement?.image || "")

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<AchievementFormData>({
        resolver: zodResolver(achievementSchema),
        defaultValues: achievement ? {
            title: achievement.title,
            description: achievement.description,
            date: achievement.date,
            category: achievement.category,
            impact: achievement.impact || "",
            details: achievement.details || "",
            image: achievement.image || undefined,
        } : {
            title: "",
            description: "",
            date: "",
            category: "",
            impact: "",
            details: "",
        },
    })

    // Debug: Log errors whenever they change
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log("Form validation errors:", errors)
        }
    }, [errors])

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setUploadingImage(true)
        try {
            const formData = new FormData()
            formData.append("file", file)

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            if (!response.ok) throw new Error("Upload failed")

            const data = await response.json()
            setImageUrl(data.url)
            setValue("image", data.url)
        } catch (error) {
            console.error("Error uploading image:", error)
            alert("Failed to upload image")
        } finally {
            setUploadingImage(false)
        }
    }

    const onSubmit = async (data: AchievementFormData) => {
        console.log("Form data being submitted:", data)
        console.log("Image URL:", imageUrl)

        setLoading(true)
        try {
            const url = mode === "create" ? "/api/achievements" : `/api/achievements/${achievement?.id}`
            const method = mode === "create" ? "POST" : "PUT"

            const payload = { ...data, image: imageUrl }
            console.log("Payload being sent:", payload)

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const error = await response.json()
                console.error("Server error:", error)

                // Handle authentication errors
                if (response.status === 401 || response.status === 403) {
                    alert("Your session has expired. Please log in again.")
                    router.push("/login")
                    return
                }

                throw new Error(error.error || "Failed to save achievement")
            }

            alert("Achievement saved successfully!")
            router.push("/admin/achievements")
            router.refresh()
        } catch (error) {
            console.error("Error saving achievement:", error)
            alert(error instanceof Error ? error.message : "Failed to save achievement")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, (errors) => {
            console.log("Form submission failed with errors:", errors)
            alert("Please fill in all required fields. Check the console for details.")
        })} className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Title *</label>
                        <Input {...register("title")} placeholder="Achievement title" />
                        {errors.title && (
                            <p className="text-sm text-destructive mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium">Date/Year *</label>
                            <Input {...register("date")} placeholder="e.g., 2023 or March 2023" />
                            {errors.date && (
                                <p className="text-sm text-destructive mt-1">{errors.date.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium">Category *</label>
                            <Input {...register("category")} placeholder="e.g., Competition, Recognition" />
                            {errors.category && (
                                <p className="text-sm text-destructive mt-1">{errors.category.message}</p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Short Description *</label>
                        <textarea
                            {...register("description")}
                            rows={3}
                            className="w-full px-3 py-2 border border-border rounded-md bg-background"
                            placeholder="Brief description for achievement cards"
                        />
                        {errors.description && (
                            <p className="text-sm text-destructive mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Impact Statement (Optional)</label>
                        <Input {...register("impact")} placeholder="e.g., Represented university at international level" />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Detailed Description (Optional)</label>
                        <textarea
                            {...register("details")}
                            rows={6}
                            className="w-full px-3 py-2 border border-border rounded-md bg-background"
                            placeholder="Detailed description for expanded view"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Achievement Image</label>
                        <div className="mt-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="image-upload"
                                disabled={uploadingImage}
                            />
                            <label
                                htmlFor="image-upload"
                                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md cursor-pointer hover:bg-muted"
                            >
                                {uploadingImage ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="h-4 w-4" />
                                        Upload Image
                                    </>
                                )}
                            </label>
                        </div>
                        {imageUrl && (
                            <div className="mt-4">
                                <img
                                    src={imageUrl}
                                    alt="Achievement preview"
                                    className="max-w-md rounded-lg border border-border"
                                />
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-4">
                <Button type="submit" disabled={loading}>
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>{mode === "create" ? "Create Achievement" : "Update Achievement"}</>
                    )}
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/admin/achievements")}
                    disabled={loading}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}
