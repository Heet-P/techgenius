import { EventForm } from "@/components/admin/event-form"
import { supabase } from "@/lib/db"
import { notFound } from "next/navigation"

export default async function EditEventPage({
    params,
}: {
    params: { id: string }
}) {
    const { data: event, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", params.id)
        .single()

    if (error || !event) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Edit Event</h1>
                <p className="text-muted-foreground">Update event information</p>
            </div>

            <EventForm mode="edit" event={event} />
        </div>
    )
}
