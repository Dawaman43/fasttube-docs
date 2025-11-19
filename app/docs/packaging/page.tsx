"use client"

import { motion } from "framer-motion"
import { Package, FileArchive, Boxes } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { Badge } from "@/components/ui/badge"

export default function PackagingPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Packaging
                </h1>
                <p className="text-lg text-muted-foreground">
                    Create distribution packages for various Linux distributions.
                </p>
            </div>

            <Card className="border-blue-500/50 bg-blue-500/5">
                <CardHeader>
                    <CardTitle>Automated Package Creation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        FastTube Downloader includes an automated build script that generates packages for multiple Linux distributions in one command.
                    </p>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Quick Start
                </h2>
                <p className="leading-7">
                    To create packages for all supported distributions, simply run:
                </p>
                <CodeBlock code="./release.sh" />
                <p className="text-sm text-muted-foreground mt-2">
                    This will generate packages in the <code className="rounded bg-muted px-1 py-0.5">dist/</code> directory.
                </p>
            </div>

            <div className="space-y-6">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Supported Formats
                </h2>

                <div className="grid gap-6">
                    <Card className="border-2">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                                        <Package className="h-6 w-6 text-red-500" />
                                    </div>
                                    <div>
                                        <CardTitle className="flex items-center gap-2">
                                            RPM Package
                                            <Badge variant="secondary">Fedora</Badge>
                                        </CardTitle>
                                        <CardDescription className="mt-2">
                                            For Fedora, RHEL, CentOS, and other RPM-based distributions
                                        </CardDescription>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm font-medium mb-2">Output Location:</p>
                                <code className="text-sm rounded bg-muted px-2 py-1">dist/rpm/</code>
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Requirements:</p>
                                <CodeBlock code="sudo dnf install rpm-build rpmdevtools" />
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Install Package:</p>
                                <CodeBlock code="sudo dnf install dist/rpm/fasttube-downloader-*.rpm" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                                        <FileArchive className="h-6 w-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <CardTitle className="flex items-center gap-2">
                                            DEB Package
                                            <Badge variant="secondary">Ubuntu/Debian</Badge>
                                        </CardTitle>
                                        <CardDescription className="mt-2">
                                            For Ubuntu, Debian, and other DEB-based distributions
                                        </CardDescription>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm font-medium mb-2">Output Location:</p>
                                <code className="text-sm rounded bg-muted px-2 py-1">dist/deb/</code>
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Requirements:</p>
                                <CodeBlock code="sudo apt install dpkg-dev" />
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Build Package:</p>
                                <CodeBlock code="dpkg-deb --build dist/deb" />
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Install Package:</p>
                                <CodeBlock code="sudo dpkg -i fasttube-downloader_*.deb" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                                        <Boxes className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <CardTitle className="flex items-center gap-2">
                                            Arch Package
                                            <Badge variant="secondary">Arch Linux</Badge>
                                        </CardTitle>
                                        <CardDescription className="mt-2">
                                            For Arch Linux and derivatives (Manjaro, EndeavourOS)
                                        </CardDescription>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm font-medium mb-2">Output Location:</p>
                                <code className="text-sm rounded bg-muted px-2 py-1">dist/arch/</code>
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Requirements:</p>
                                <CodeBlock code="sudo pacman -S base-devel" />
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Build Package:</p>
                                <CodeBlock code={`cd dist/arch
makepkg -si`} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle>Package Contents</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                        All packages include the following components:
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Application files in <code className="rounded bg-background px-1 py-0.5">/opt/FastTubeDownloader</code></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Desktop entry for application launcher</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Native messaging host configuration</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Browser extension files</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    )
}
