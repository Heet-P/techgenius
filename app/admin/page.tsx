import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome to the TechGenius admin panel</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">-</div>
                        <p className="text-xs text-muted-foreground">
                            Manage events from the Events page
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">-</div>
                        <p className="text-xs text-muted-foreground">
                            Events scheduled for the future
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">-</div>
                        <p className="text-xs text-muted-foreground">
                            Across all events
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <Link href="/admin/events/new">
                        <Button>Add New Event</Button>
                    </Link>
                    <Link href="/admin/events">
                        <Button variant="outline">Manage Events</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
