import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
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
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="flex min-h-dvh justify-center bg-slate-100 font-sans text-slate-900">
        <div className="flex min-h-dvh w-full max-w-[430px] flex-col bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
