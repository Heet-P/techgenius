"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Home, Calendar, Trophy, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

export function AdminSidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: "/admin", label: "Dashboard", icon: Home },
        { href: "/admin/events", label: "Events", icon: Calendar },
        { href: "/admin/achievements", label: "Achievements", icon: Trophy },
    ]

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/login" })
    }

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-card rounded-lg border border-border"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-border">
                        <h2 className="text-2xl font-bold text-primary">TechGenius</h2>
                        <p className="text-sm text-muted-foreground">Admin Panel</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted text-foreground"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-border">
                        <Button
                            onClick={handleSignOut}
                            variant="outline"
                            className="w-full justify-start gap-3"
                        >
                            <LogOut className="h-5 w-5" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
