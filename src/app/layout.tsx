import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
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
  title: "Atmos — Weather Dashboard",
  description: "A clear, real-time weather forecast for your day.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSansKr.variable} min-h-full antialiased`}>
      <body className="min-h-screen bg-[#f3f6fb] font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
