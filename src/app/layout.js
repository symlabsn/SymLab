import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SymLab - Plateforme STEM Interactive",
  description: "Explorez les mathématiques, physique, et programmation avec SymLab. Simulations interactives, Python Lab, QCM et ressources pédagogiques pour le Sénégal.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SymLab",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossOrigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${inter.className} antialiased bg-slate-950 text-white`}
        suppressHydrationWarning
      >
        <AnalyticsWrapper>
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
          <MobileBottomNav />
        </AnalyticsWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}


