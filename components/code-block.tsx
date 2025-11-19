"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface CodeBlockProps {
    code: string
    language?: string
    filename?: string
}

export function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="group relative my-6 overflow-hidden rounded-xl border-2 border-border/50 bg-zinc-950 dark:bg-zinc-900/50 shadow-lg hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            {filename && (
                <div className="flex items-center gap-3 border-b border-zinc-800/80 bg-zinc-900/50 px-4 py-3">
                    <Terminal className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-300">{filename}</span>
                </div>
            )}
            <div className="relative">
                <div className="absolute right-3 top-3 z-10">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
                        onClick={copyToClipboard}
                    >
                        <AnimatePresence mode="wait">
                            {copied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 180 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Check className="h-4 w-4 text-green-400" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Copy className="h-4 w-4 text-zinc-400" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <span className="sr-only">Copy code</span>
                    </Button>
                </div>
                <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                    <code className={`language-${language} text-zinc-50 font-mono`}>
                        {code}
                    </code>
                </pre>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
    )
}
