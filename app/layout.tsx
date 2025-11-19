import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fasttube.app"),
  title: {
    default: "FastTube Downloader - #1 Linux Download Manager",
    template: "%s | FastTube Downloader",
  },
  description:
    "The fastest and most advanced download manager for Linux. Features IDM-style interface, browser integration, playlist support, and up to 10x faster speeds.",
  keywords: [
    "download manager",
    "linux",
    "fast downloader",
    "youtube downloader",
    "idm for linux",
    "aria2",
    "yt-dlp",
    "playlist downloader",
    "video downloader",
  ],
  authors: [{ name: "FastTube Team" }],
  creator: "FastTube Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fasttube.app",
    title: "FastTube Downloader - #1 Linux Download Manager",
    description:
      "Supercharge your downloads on Linux with FastTube. The modern, fast, and feature-rich download manager you've been waiting for.",
    siteName: "FastTube Downloader",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "FastTube Downloader Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastTube Downloader - #1 Linux Download Manager",
    description:
      "The fastest and most advanced download manager for Linux. Features IDM-style interface, browser integration, and playlist support.",
    images: ["/icon.png"],
    creator: "@fasttube",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="EM761VQnrs_iGBy26CDjtgiasALcfN7yIviMuYMAeB4"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
