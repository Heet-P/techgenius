"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react"
import type { Event } from "@/lib/db"

export default function EventsPage() {
    const router = useRouter()
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)
    const [deleting, setDeleting] = useState<string | null>(null)

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const response = await fetch("/api/events")
            const data = await response.json()
            setEvents(data.events || [])
        } catch (error) {
            console.error("Error fetching events:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this event?")) return

        setDeleting(id)
        try {
            const response = await fetch(`/api/events/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) throw new Error("Failed to delete event")

            setEvents(events.filter((e) => e.id !== id))
        } catch (error) {
            console.error("Error deleting event:", error)
            alert("Failed to delete event")
        } finally {
            setDeleting(null)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Events</h1>
                    <p className="text-muted-foreground">Manage your events</p>
                </div>
                <Link href="/admin/events/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Event
                    </Button>
                </Link>
            </div>

            {events.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <p className="text-muted-foreground mb-4">No events yet</p>
                        <Link href="/admin/events/new">
                            <Button>Create your first event</Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {events.map((event) => (
                        <Card key={event.id}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="mb-2">{event.title}</CardTitle>
                                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                            <span>{event.date}</span>
                                            <span>•</span>
                                            <span>{event.time}</span>
                                            <span>•</span>
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>
                                                {event.status}
                                            </Badge>
                                            <Badge variant="outline">{event.type}</Badge>
                                            <Badge variant="outline">
                                                {event.attendees}/{event.max_attendees} attendees
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href={`/admin/events/${event.id}/edit`}>
                                            <Button variant="outline" size="icon">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => handleDelete(event.id)}
                                            disabled={deleting === event.id}
                                        >
                                            {deleting === event.id ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <Trash2 className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {event.description}
                                </p>
                                {event.image && (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="mt-4 w-full max-w-md rounded-lg border border-border"
                                    />
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
