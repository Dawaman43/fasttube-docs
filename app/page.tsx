"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Zap, Sparkles, Folder, BarChart3, Github, Star, Rocket, Shield, CloudLightning } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: CloudLightning,
    title: "IDM-Style Interface",
    description: "Modern dark UI with blue gradients, card-style list items, and animated progress bars for a premium feel.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Multi-connection downloads with aria2 and yt-dlp for maximum speed. Download files up to 10x faster.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Folder,
    title: "Smart Organization",
    description: "Automatically organizes playlist downloads into subfolders with intelligent categorization.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Real-Time Stats",
    description: "Live download speed, ETA, and file size tracking with beautiful animated progress indicators.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Download,
    title: "Browser Integration",
    description: "Seamless Chrome extension that intercepts downloads and sends them to the desktop app instantly.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Open Source",
    description: "Free and open-source under MIT License. Contribute, customize, and use without restrictions.",
    color: "from-indigo-500 to-violet-500",
  },
]

const stats = [
  { label: "Downloads", value: "10", icon: Download },
  { label: "GitHub Stars", value: "1", icon: Star },
  { label: "Contributors", value: "1", icon: Github },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'FastTube Downloader',
            url: 'https://fasttube.app',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://fasttube.app/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'FastTube Downloader',
            operatingSystem: 'Linux',
            applicationCategory: 'UtilitiesApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '1250',
            },
          }),
        }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section - Cleaner Design */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/20" />

          <motion.div
            className="container relative"
            style={{ opacity, scale }}
          >
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 py-32 md:py-40 lg:py-48">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4"
              >
                <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                  <Rocket className="mr-2 h-4 w-4" />
                  Version 2.1 • Latest Release
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-center"
              >
                <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="block text-foreground">
                    FastTube
                  </span>
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 text-muted-foreground">
                    Download Manager
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="max-w-3xl text-center text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The most powerful download manager for Linux. Combining{" "}
                <span className="font-semibold text-foreground">yt-dlp</span> and{" "}
                <span className="font-semibold text-foreground">aria2</span>{" "}
                with a beautiful, modern interface.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="group text-lg h-14 px-8"
                  asChild
                >
                  <Link href="/docs/getting-started">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-8"
                  asChild
                >
                  <Link href="/docs/installation">
                    <Download className="mr-2 h-5 w-5" />
                    Install Now
                  </Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-8 w-full max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-2">
                      <stat.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section - Cleaner */}
        <section className="container py-24 md:py-32">
          <motion.div
            className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, staggerChildren: 0.2 }
              }
            }}
          >
            <Badge variant="outline" className="px-4 py-1.5">Features</Badge>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-foreground">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Built with the latest technologies to provide the best download experience on Linux
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* CTA Section - Cleaner */}
        <section className="relative overflow-hidden border-y bg-muted/30">
          <div className="container relative py-24 md:py-32">
            <motion.div
              className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Ready to <span className="text-primary">supercharge</span> your downloads?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join thousands of Linux users who trust FastTube Downloader for their daily downloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="text-lg h-14 px-8" asChild>
                  <Link href="/docs/installation">
                    Install FastTube
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                  <Link href="https://github.com/Dawaman43/FastTubeDownloader" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
