"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Folder, BarChart3, Download, Sliders } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
    {
        icon: Sparkles,
        title: "IDM-Style Interface",
        description: "Modern dark UI with beautiful blue gradients and card-style list items",
        details: [
            "Sleek dark theme optimized for extended use",
            "Animated progress bars with smooth transitions",
            "Card-based download items with hover effects",
            "Beautiful gradient accents throughout the UI",
        ],
        badge: "UI/UX",
    },
    {
        icon: Download,
        title: "Browser Integration",
        description: "Seamless Chrome/Chromium extension for automatic download capture",
        details: [
            "Intercepts downloads from your browser automatically",
            "Native messaging for secure communication",
            "One-click integration setup",
            "Works with all downloadable content",
        ],
        badge: "Integration",
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Lightning-fast downloads powered by aria2 and yt-dlp",
        details: [
            "Multi-connection downloads for maximum speed",
            "aria2 engine with up to 16 connections per file",
            "Intelligent chunk-based downloading",
            "Resume capability for interrupted downloads",
        ],
        badge: "Performance",
    },
    {
        icon: Folder,
        title: "Playlist Support",
        description: "Automatic organization for YouTube playlists and batch downloads",
        details: [
            "Detects and downloads entire playlists",
            "Creates dedicated subfolders for each playlist",
            "Smart categorization into Music/Videos",
            "Preserves playlist order and metadata",
        ],
        badge: "Organization",
    },
    {
        icon: BarChart3,
        title: "Detailed Statistics",
        description: "Real-time monitoring with comprehensive download metrics",
        details: [
            "Live download speed display",
            "Accurate ETA calculations",
            "File size and progress tracking",
            "Beautiful animated progress indicators",
        ],
        badge: "Analytics",
    },
    {
        icon: Sliders,
        title: "Queue Management",
        description: "Complete control over your download queue",
        details: [
            "Pause and resume downloads at any time",
            "Prioritize important downloads",
            "Batch operations support",
            "Automatic retry on failure",
        ],
        badge: "Management",
    },
]

export default function FeaturesPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Features
                </h1>
                <p className="text-lg text-muted-foreground">
                    Discover what makes FastTube Downloader the best download manager for Linux.
                </p>
            </div>

            <div className="grid gap-6">
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group overflow-hidden border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                                                <CardDescription className="mt-2 text-base">
                                                    {feature.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <Badge variant="secondary">{feature.badge}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="grid gap-2 sm:grid-cols-2">
                                        {feature.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span className="text-muted-foreground">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}
