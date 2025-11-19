"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
    {
        question: "What Linux distributions are supported?",
        answer: "FastTube Downloader works on any Linux distribution with Python 3.8+, GTK3, yt-dlp, and aria2. We provide packages for Fedora (RPM), Ubuntu/Debian (DEB), and Arch Linux.",
    },
    {
        question: "Does it work with browsers other than Chrome?",
        answer: "Currently, FastTube Downloader's browser extension is designed for Chrome and Chromium-based browsers (Brave, Edge, Opera, etc.). Firefox support is planned for future releases.",
    },
    {
        question: "Can I download from sites other than YouTube?",
        answer: "Yes! While YouTube is fully supported, yt-dlp supports hundreds of websites. Any site compatible with yt-dlp will work with FastTube Downloader.",
    },
    {
        question: "How do I update FastTube Downloader?",
        answer: "Pull the latest changes from the GitHub repository and re-run the setup script: git pull && sudo ./setup.sh. If you installed via a package manager, use your distribution's update command.",
    },
    {
        question: "Where are my downloads saved?",
        answer: "Videos are saved to ~/Videos/, music to ~/Music/, and playlists create their own subfolders within ~/Videos/. You can configure these locations in the app settings.",
    },
    {
        question: "The browser extension isn't working. What should I do?",
        answer: "First, ensure the Extension ID in your browser matches the one in native_host/com.fasttube.downloader.json. If they differ, update the JSON file and re-run setup.sh. Also verify that the app is running before triggering downloads.",
    },
    {
        question: "Can I pause and resume downloads?",
        answer: "Yes! FastTube Downloader supports pausing and resuming downloads. Click the pause button on any active download, and it will save its progress. Click resume to continue from where it left off.",
    },
    {
        question: "How many simultaneous downloads are supported?",
        answer: "You can have multiple downloads running simultaneously. Each download uses aria2 with up to 16 connections for maximum speed.",
    },
    {
        question: "Is there a way to download entire playlists?",
        answer: "Absolutely! Just paste a playlist URL or trigger it from your browser. FastTube Downloader will automatically detect it's a playlist, download all videos, and organize them in a dedicated subfolder.",
    },
    {
        question: "What's the difference between aria2 and yt-dlp downloads?",
        answer: "yt-dlp is used for extracting video URLs from platforms like YouTube and handles the initial connection. aria2 then takes over for the actual download, using multiple connections for faster speeds.",
    },
    {
        question: "Can I contribute to the project?",
        answer: "Yes! FastTube Downloader is open-source under the MIT License. Visit the GitHub repository to report issues, suggest features, or submit pull requests. Contributions are always welcome!",
    },
    {
        question: "Does it support subtitle downloads?",
        answer: "Subtitle support depends on yt-dlp's capabilities for the specific website. For YouTube, subtitles can be downloaded if available. Check yt-dlp documentation for configuration options.",
    },
]

export default function FAQPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg text-muted-foreground">
                    Find answers to common questions about FastTube Downloader.
                </p>
            </div>

            <div className="grid gap-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <Card className="group hover:border-primary/50 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-start gap-3 text-lg">
                                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                    <span>{faq.question}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base pl-8">
                                    {faq.answer}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                    <CardTitle>Still have questions?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        If you couldn&apos;t find the answer you&apos;re looking for, please visit our{" "}
                        <a
                            href="https://github.com/Dawaman43/FastTubeDownloader/discussions"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-primary hover:underline"
                        >
                            GitHub Discussions
                        </a>{" "}
                        or{" "}
                        <a
                            href="https://github.com/Dawaman43/FastTubeDownloader/issues"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-primary hover:underline"
                        >
                            open an issue
                        </a>.
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
