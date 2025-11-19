"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <motion.header
            className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container flex h-16 md:h-20 items-center">
                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-3 group">
                    <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-transparent shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
                        <Image
                            src="/icon.png"
                            alt="FastTube Logo"
                            width={48}
                            height={48}
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <span className="hidden font-bold text-lg md:text-xl sm:inline-block text-foreground">
                        FastTube
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 text-sm lg:gap-2 flex-1">
                    <Link
                        href="/docs/getting-started"
                        className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all font-medium"
                    >
                        Docs
                    </Link>
                    <Link
                        href="/docs/features"
                        className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all font-medium"
                    >
                        Features
                    </Link>
                    <Link
                        href="/docs/installation"
                        className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all font-medium"
                    >
                        Installation
                    </Link>
                    <Link
                        href="/docs/faq"
                        className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all font-medium"
                    >
                        FAQ
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="inline-flex md:hidden items-center justify-center rounded-lg p-2 hover:bg-accent transition-colors ml-auto mr-2"
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle Menu</span>
                </button>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg hover:bg-accent/50"
                        asChild
                    >
                        <Link
                            href="https://github.com/Dawaman43/FastTubeDownloader"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <ThemeToggle />
                    <Button
                        size="sm"
                        className="ml-2"
                        asChild
                    >
                        <Link href="/docs/installation">
                            Download
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="container md:hidden border-t"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="flex flex-col gap-1 py-4">
                            <Link
                                href="/docs/getting-started"
                                className="px-4 py-3 text-base hover:bg-accent/50 rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Docs
                            </Link>
                            <Link
                                href="/docs/features"
                                className="px-4 py-3 text-base hover:bg-accent/50 rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/docs/installation"
                                className="px-4 py-3 text-base hover:bg-accent/50 rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Installation
                            </Link>
                            <Link
                                href="/docs/faq"
                                className="px-4 py-3 text-base hover:bg-accent/50 rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <div className="flex items-center gap-2 px-4 py-2 mt-2 border-t">
                                <Button variant="ghost" size="icon" asChild className="rounded-lg">
                                    <Link
                                        href="https://github.com/Dawaman43/FastTubeDownloader"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Github className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <ThemeToggle />
                                <Button
                                    size="sm"
                                    className="ml-auto"
                                    asChild
                                >
                                    <Link href="/docs/installation">
                                        Download
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
