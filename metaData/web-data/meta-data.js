export const metadata = {
  metadataBase : 'https://tejasdhamale.netlify.app/',
  title: "Tejas Dhamale",
  description: "BUILD UNDER SANDBOX POWERED BY THUNDER",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/icon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/icon/favicon-16x16.png" },
    ],
    apple: "/icon/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/icon/site.webmanifest",
    },
  },
  // Optional: SEO and social metadata
  openGraph: {
    title: "Tejas Dhamale",
    description: "BUILD UNDER SANDBOX POWERED BY THUNDER",
    url: "https://tejasdhamale.netlify.app/",
    siteName: "Tejas Dhamale",
    images: [
      {
        url: "/icon/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Dhamale Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Dhamale",
    description: "BUILD UNDER SANDBOX POWERED BY THUNDER",
    images: ["/icon/og-image.png"],
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
