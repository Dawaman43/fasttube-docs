import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/10">
            <Header />
            <div className="container flex-1 px-4 md:px-8">
                <div className="flex-1 items-start md:grid md:grid-cols-[280px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
                    <DocsSidebar />
                    <main className="relative py-6 lg:gap-10 lg:py-8 xl:py-10">
                        <div className="mx-auto w-full max-w-4xl">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}
