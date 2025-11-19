"use client"

import { motion } from "framer-motion"
import { Globe, Link as LinkIcon, MousePointerClick, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

export default function UsagePage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Usage Guide
                </h1>
                <p className="text-lg text-muted-foreground">
                    Learn how to use FastTube Downloader effectively.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Launching the App
                </h2>
                <p className="leading-7">
                    After installation, you can launch FastTube Downloader in two ways:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <MousePointerClick className="h-4 w-4" />
                                From Applications Menu
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Look for &quot;FastTube Downloader&quot; in your applications menu and click to launch.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Settings className="h-4 w-4" />
                                From Terminal
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock code="/opt/FastTubeDownloader/main.py" />
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Downloading Files
                </h2>
                <p className="leading-7">
                    FastTube Downloader offers two convenient methods for adding downloads:
                </p>

                <div className="space-y-6">
                    <Card className="border-primary/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-primary" />
                                Method 1: Browser Integration (Recommended)
                            </CardTitle>
                            <CardDescription>
                                The easiest way to download - fully automatic
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ol className="space-y-3 list-decimal list-inside">
                                <li className="text-sm">
                                    <strong>Navigate</strong> to any YouTube video, playlist, or downloadable file in your browser
                                </li>
                                <li className="text-sm">
                                    <strong>The extension will detect</strong> the download automatically
                                </li>
                                <li className="text-sm">
                                    <strong>The download is sent</strong> to FastTube Downloader instantly
                                </li>
                                <li className="text-sm">
                                    <strong>Monitor progress</strong> in the app window
                                </li>
                            </ol>
                            <div className="mt-4 rounded-lg bg-muted p-4">
                                <p className="text-xs text-muted-foreground">
                                    💡 <strong>Tip:</strong> Make sure the app is running before triggering downloads from your browser.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LinkIcon className="h-5 w-5" />
                                Method 2: Manual URL Addition
                            </CardTitle>
                            <CardDescription>
                                For direct URL downloads
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ol className="space-y-3 list-decimal list-inside">
                                <li className="text-sm">
                                    <strong>Copy the URL</strong> of the file or video you want to download
                                </li>
                                <li className="text-sm">
                                    <strong>Paste it</strong> into the &quot;Add URL&quot; text box in the app
                                </li>
                                <li className="text-sm">
                                    <strong>Click the &quot;+&quot; button</strong> or press Enter
                                </li>
                                <li className="text-sm">
                                    <strong>The download starts</strong> immediately
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Managing Downloads
                </h2>
                <p className="leading-7">
                    FastTube Downloader provides comprehensive download management features:
                </p>

                <div className="grid gap-4">
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold mb-2">Pause/Resume</h3>
                        <p className="text-sm text-muted-foreground">
                            Click the pause button to temporarily stop a download. Click resume to continue from where it left off.
                        </p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold mb-2">Remove Downloads</h3>
                        <p className="text-sm text-muted-foreground">
                            Select a download and click the remove button to clear it from the queue.
                        </p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold mb-2">Automatic Organization</h3>
                        <p className="text-sm text-muted-foreground">
                            Files are automatically sorted into Music/Videos folders. Playlists get their own subfolders.
                        </p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold mb-2">Monitor Progress</h3>
                        <p className="text-sm text-muted-foreground">
                            Watch real-time statistics including download speed, ETA, and file size for each active download.
                        </p>
                    </div>
                </div>
            </div>

            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle>Download Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                        <span className="font-medium min-w-[100px]">Videos:</span>
                        <code className="rounded bg-background px-2 py-1">~/Videos/</code>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                        <span className="font-medium min-w-[100px]">Music:</span>
                        <code className="rounded bg-background px-2 py-1">~/Music/</code>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                        <span className="font-medium min-w-[100px]">Playlists:</span>
                        <code className="rounded bg-background px-2 py-1">~/Videos/[PlaylistName]/</code>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
