"use client"

import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer className="relative mt-auto border-t bg-background/30 backdrop-blur-xl">
            <div className="container py-10">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-transparent">
                                <Image
                                    src="/icon.png"
                                    alt="FastTube Logo"
                                    width={32}
                                    height={32}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <span className="font-bold">FastTube</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Modern download manager for Linux
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Documentation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/docs/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">Getting Started</Link></li>
                            <li><Link href="/docs/installation" className="text-muted-foreground hover:text-foreground transition-colors">Installation</Link></li>
                            <li><Link href="/docs/usage" className="text-muted-foreground hover:text-foreground transition-colors">Usage Guide</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/docs/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="/docs/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
                            <li><Link href="/docs/packaging" className="text-muted-foreground hover:text-foreground transition-colors">Packaging</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <motion.a
                                    href="https://github.com/Dawaman43/FastTubeDownloader"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://github.com/Dawaman43/FastTubeDownloader/issues"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Issues
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://github.com/Dawaman43/FastTubeDownloader/discussions"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Discussions
                                </motion.a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground">
                        © 2025 FastTube Downloader. Released under the MIT License.
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                        <motion.a
                            href="https://github.com/Dawaman43/FastTubeDownloader"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="inline-block hover:text-foreground transition-colors"
                        >
                            View Source
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
