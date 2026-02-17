"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { eventSchema, type EventFormData } from "@/lib/validations/event"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Upload, Loader2 } from "lucide-react"
import type { Event } from "@/lib/db"

interface EventFormProps {
    event?: Event
    mode: "create" | "edit"
}

export function EventForm({ event, mode }: EventFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [imageUrl, setImageUrl] = useState(event?.image || "")
    const [highlights, setHighlights] = useState<string[]>(event?.highlights || [])
    const [highlightInput, setHighlightInput] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<EventFormData>({
        resolver: zodResolver(eventSchema),
        defaultValues: event ? {
            ...event,
            highlights: event.highlights || [],
        } : {
            title: "",
            date: "",
            time: "",
            location: "",
            type: "",
            description: "",
            full_description: "",
            attendees: 0,
            max_attendees: 1,
            status: "upcoming",
            highlights: [],
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

    const addHighlight = () => {
        if (highlightInput.trim()) {
            const newHighlights = [...highlights, highlightInput.trim()]
            setHighlights(newHighlights)
            setValue("highlights", newHighlights)
            setHighlightInput("")
        }
    }

    const removeHighlight = (index: number) => {
        const newHighlights = highlights.filter((_, i) => i !== index)
        setHighlights(newHighlights)
        setValue("highlights", newHighlights)
    }

    const onSubmit = async (data: EventFormData) => {
        console.log("Form data being submitted:", data)
        console.log("Image URL:", imageUrl)
        console.log("Highlights:", highlights)

        setLoading(true)
        try {
            const url = mode === "create" ? "/api/events" : `/api/events/${event?.id}`
            const method = mode === "create" ? "POST" : "PUT"

            const payload = { ...data, image: imageUrl, highlights }
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

                throw new Error(error.error || "Failed to save event")
            }

            alert("Event saved successfully!")
            router.push("/admin/events")
            router.refresh()
        } catch (error) {
            console.error("Error saving event:", error)
            alert(error instanceof Error ? error.message : "Failed to save event")
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
                        <Input {...register("title")} placeholder="Event title" />
                        {errors.title && (
                            <p className="text-sm text-destructive mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium">Date *</label>
                            <Input {...register("date")} placeholder="e.g., March 15, 2024" />
                            {errors.date && (
                                <p className="text-sm text-destructive mt-1">{errors.date.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium">Time *</label>
                            <Input {...register("time")} placeholder="e.g., 10:00 AM - 12:00 PM" />
                            {errors.time && (
                                <p className="text-sm text-destructive mt-1">{errors.time.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Location *</label>
                        <Input {...register("location")} placeholder="Event location" />
                        {errors.location && (
                            <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium">Type *</label>
                            <Input {...register("type")} placeholder="e.g., Workshop, Hackathon" />
                            {errors.type && (
                                <p className="text-sm text-destructive mt-1">{errors.type.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium">Max Attendees *</label>
                            <Input
                                {...register("max_attendees", { valueAsNumber: true })}
                                type="number"
                                placeholder="100"
                            />
                            {errors.max_attendees && (
                                <p className="text-sm text-destructive mt-1">{errors.max_attendees.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium">Status *</label>
                            <select
                                {...register("status")}
                                className="w-full px-3 py-2 border border-border rounded-md bg-background"
                            >
                                <option value="upcoming">Upcoming</option>
                                <option value="past">Past</option>
                            </select>
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
                            placeholder="Brief description for event cards"
                        />
                        {errors.description && (
                            <p className="text-sm text-destructive mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Full Description (Optional)</label>
                        <textarea
                            {...register("full_description")}
                            rows={6}
                            className="w-full px-3 py-2 border border-border rounded-md bg-background"
                            placeholder="Detailed description for event details"
                        />
                        {errors.full_description && (
                            <p className="text-sm text-destructive mt-1">{errors.full_description.message}</p>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Event Image</label>
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
                                    alt="Event preview"
                                    className="max-w-md rounded-lg border border-border"
                                />
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            value={highlightInput}
                            onChange={(e) => setHighlightInput(e.target.value)}
                            placeholder="Add a highlight"
                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addHighlight())}
                        />
                        <Button type="button" onClick={addHighlight}>
                            Add
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {highlights.map((highlight, index) => (
                            <Badge key={index} variant="secondary" className="gap-1">
                                {highlight}
                                <button
                                    type="button"
                                    onClick={() => removeHighlight(index)}
                                    className="ml-1 hover:text-destructive"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </Badge>
                        ))}
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
                        <>{mode === "create" ? "Create Event" : "Update Event"}</>
                    )}
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/admin/events")}
                    disabled={loading}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}
