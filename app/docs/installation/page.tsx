"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2, Terminal } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InstallationPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Installation
                </h1>
                <p className="text-lg text-muted-foreground">
                    Complete guide to installing FastTube Downloader on your Linux system.
                </p>
            </div>

            <Card className="border-blue-500/50 bg-blue-500/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-blue-500" />
                        Before You Begin
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <p>
                        Make sure you have all prerequisites installed before proceeding with the installation.
                        This will ensure a smooth setup process.
                    </p>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Prerequisites
                </h2>

                <p className="leading-7">
                    FastTube Downloader requires the following dependencies to be installed on your system:
                </p>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div className="flex-1">
                            <p className="font-medium">Python 3.8+</p>
                            <p className="text-sm text-muted-foreground">Programming language runtime</p>
                        </div>
                        <Badge variant="outline">Required</Badge>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div className="flex-1">
                            <p className="font-medium">yt-dlp</p>
                            <p className="text-sm text-muted-foreground">Video extraction tool</p>
                        </div>
                        <Badge variant="outline">Required</Badge>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div className="flex-1">
                            <p className="font-medium">aria2</p>
                            <p className="text-sm text-muted-foreground">Multi-connection download utility</p>
                        </div>
                        <Badge variant="outline">Required</Badge>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div className="flex-1">
                            <p className="font-medium">GTK3 & Python GObject</p>
                            <p className="text-sm text-muted-foreground">GUI toolkit and Python bindings</p>
                        </div>
                        <Badge variant="outline">Required</Badge>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Terminal className="h-4 w-4" />
                            Install Prerequisites
                        </CardTitle>
                        <CardDescription>
                            Run these commands to install all required dependencies
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="text-sm font-medium mb-2">Ubuntu/Debian:</p>
                            <CodeBlock
                                code={`sudo apt update
sudo apt install python3 python3-pip yt-dlp aria2 python3-gi python3-gi-cairo gir1.2-gtk-3.0`}
                            />
                        </div>

                        <div>
                            <p className="text-sm font-medium mb-2">Fedora:</p>
                            <CodeBlock
                                code={`sudo dnf install python3 python3-pip yt-dlp aria2 python3-gobject gtk3`}
                            />
                        </div>

                        <div>
                            <p className="text-sm font-medium mb-2">Arch Linux:</p>
                            <CodeBlock
                                code={`sudo pacman -S python python-pip yt-dlp aria2 python-gobject gtk3`}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Quick Install
                </h2>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                1
                            </span>
                            Clone the Repository
                        </h3>
                        <p className="text-muted-foreground">
                            First, clone the FastTube Downloader repository from GitHub:
                        </p>
                        <CodeBlock
                            code={`git clone https://github.com/Dawaman43/FastTubeDownloader.git
cd FastTubeDownloader`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                2
                            </span>
                            Run the Setup Script
                        </h3>
                        <p className="text-muted-foreground">
                            Execute the setup script to install the application:
                        </p>
                        <CodeBlock
                            code="sudo ./setup.sh"
                        />
                        <Card className="bg-muted/50">
                            <CardContent className="pt-4">
                                <p className="text-sm text-muted-foreground">
                                    This script will:
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-muted-foreground ml-4">
                                    <li>• Install the app to <code className="rounded bg-background px-1 py-0.5">/opt/FastTubeDownloader</code></li>
                                    <li>• Create a desktop entry for easy access</li>
                                    <li>• Set up native messaging host for browser integration</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                3
                            </span>
                            Install Browser Extension
                        </h3>
                        <p className="text-muted-foreground">
                            Install the Chrome/Chromium extension for browser integration:
                        </p>
                        <ol className="space-y-2 list-decimal list-inside text-sm">
                            <li>Open Chrome/Chromium and navigate to <code className="rounded bg-muted px-1 py-0.5">chrome://extensions</code></li>
                            <li>Enable <strong>Developer mode</strong> (toggle in the top right)</li>
                            <li>Click <strong>Load unpacked</strong></li>
                            <li>Select the <code className="rounded bg-muted px-1 py-0.5">FastTubeDownloader</code> folder (containing manifest.json)</li>
                            <li>Note the Extension ID displayed</li>
                        </ol>

                        <Card className="border-yellow-500/50 bg-yellow-500/5 mt-4">
                            <CardHeader>
                                <CardTitle className="text-base flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                                    Important: Extension ID
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    If the Extension ID differs from the one in <code className="rounded bg-background px-1 py-0.5">EXTENSION_ID_GUIDE.md</code>,
                                    you need to update <code className="rounded bg-background px-1 py-0.5">native_host/com.fasttube.downloader.json</code> with
                                    the new ID and re-run <code className="rounded bg-background px-1 py-0.5">sudo ./setup.sh</code>.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                4
                            </span>
                            Launch the Application
                        </h3>
                        <p className="text-muted-foreground">
                            Open FastTube Downloader from your applications menu or run:
                        </p>
                        <CodeBlock
                            code="/opt/FastTubeDownloader/main.py"
                        />
                    </div>
                </div>
            </div>

            <Card className="border-green-500/50 bg-green-500/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        Installation Complete!
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <p>
                        You&apos;re all set! FastTube Downloader is now installed and ready to use.
                        Check out the <strong>Usage Guide</strong> to learn how to get the most out of it.
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
