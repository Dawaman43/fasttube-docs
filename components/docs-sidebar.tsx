"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    BookOpen,
    Download,
    Sparkles,
    PlayCircle,
    Package,
    HelpCircle,
    Box,
    BoxIcon
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const docsNav = [
    {
        title: "Getting Started",
        href: "/docs/getting-started",
        icon: BookOpen,
        description: "Quick start guide",
    },
    {
        title: "Installation",
        href: "/docs/installation",
        icon: Download,
        description: "Setup instructions",
    },
    {
        title: "Features",
        href: "/docs/features",
        icon: BoxIcon,
        description: "What's included",
    },
    {
        title: "Usage Guide",
        href: "/docs/usage",
        icon: PlayCircle,
        description: "How to use",
    },
    {
        title: "Packaging",
        href: "/docs/packaging",
        icon: Package,
        description: "Build packages",
    },
    {
        title: "FAQ",
        href: "/docs/faq",
        icon: HelpCircle,
        description: "Common questions",
    },
]

export function DocsSidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed top-16 md:top-20 z-30 hidden h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block border-r bg-background/50 backdrop-blur-sm">
            <div className="h-full overflow-auto py-6 pr-6 lg:py-8">
                <div className="mb-4 px-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Documentation
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                        v2.1
                    </Badge>
                </div>
                <nav className="grid gap-1">
                    {docsNav.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group relative flex flex-col gap-1 rounded-xl px-3 py-3 text-sm font-medium transition-all hover:bg-accent",
                                    isActive
                                        ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-foreground border-l-2 border-blue-500"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "flex h-9 w-9 items-center justify-center rounded-lg transition-all",
                                        isActive
                                            ? "bg-gradient-to-br  shadow-lg shadow-blue-500/30"
                                            : "bg-muted group-hover:bg-muted/80 text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1">
                                        <div className={cn(
                                            "font-semibold",
                                            isActive && "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                                        )}>
                                            {item.title}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}
