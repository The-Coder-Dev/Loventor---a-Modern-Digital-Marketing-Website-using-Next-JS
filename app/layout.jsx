import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import { ViewTransitions } from "next-view-transitions";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Loventor",
  description: "Created with Love",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={` ${dmSans.className} antialiased`}>
          <SmoothScroller />
          <Navbar />
          {children}
          <Analytics />
          <FaqSection />
          <CtaSection />
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
