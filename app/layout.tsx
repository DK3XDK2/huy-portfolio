import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vũ Quang Huy | Portfolio",
  description: "Portfolio cá nhân  Vũ Quang Huy - Fullstack Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-black text-slate-100`}>
        {}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative min-h-screen flex flex-col">
          <Navbar />

          <main
            className="
    flex-1 
    px-4 sm:px-8 md:px-16 lg:px-32 
    py-10
    bg-gradient-to-br from-slate-900 via-slate-950 to-black
  "
          >
            {children}
          </main>

          <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500 bg-slate-950/20 backdrop-blur">
            © {new Date().getFullYear()} Vũ Quang Huy. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
