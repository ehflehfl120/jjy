import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { AttributionTracker } from "@/components/layout/AttributionTracker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/landing";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} min-h-full antialiased`}>
      <body className="flex min-h-screen justify-center bg-[#F2F4F6] font-sans text-[#191F28]">
        <div className="flex min-h-dvh w-full max-w-[430px] flex-col bg-white">
          <AttributionTracker />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
