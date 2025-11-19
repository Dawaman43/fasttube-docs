"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GettingStartedPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Getting Started
                </h1>
                <p className="text-lg text-muted-foreground">
                    Welcome to FastTube Downloader! Get up and running in minutes.
                </p>
            </div>

            <div className="my-8 border-l-4 border-primary pl-4">
                <p className="text-sm font-medium mb-1">Quick Overview</p>
                <p className="text-sm text-muted-foreground">
                    FastTube Downloader is a powerful download manager for Linux that combines yt-dlp and aria2
                    with a beautiful GTK interface and browser integration.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    What is FastTube Downloader?
                </h2>
                <p className="leading-7">
                    FastTube Downloader is an IDM-style download manager specifically designed for Linux systems.
                    It seamlessly integrates with your browser to intercept downloads and provides a modern,
                    feature-rich interface for managing all your downloads.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 my-8">
                <Card className="group hover:border-primary/50 transition-all">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            Key Features
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>IDM-style modern dark interface</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Browser integration via extension</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Multi-connection downloads with aria2</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>YouTube & playlist support via yt-dlp</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Automatic folder organization</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all">
                    <CardHeader>
                        <CardTitle>Prerequisites</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Linux operating system</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Python 3.8 or higher</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>GTK3 and Python GObject bindings</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>yt-dlp installed</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>aria2 installed</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Next Steps
                </h2>
                <p className="leading-7">
                    Ready to install FastTube Downloader? Follow our comprehensive installation guide to get
                    everything set up properly.
                </p>

                <div className="flex gap-4 pt-4">
                    <Button className="group" asChild>
                        <Link href="/docs/installation">
                            Installation Guide
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/docs/features">
                            Explore Features
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
