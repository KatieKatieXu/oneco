import type { Metadata } from "next";
import "./globals.css";
import LangProvider from "@/components/LangProvider";
import LangSwitcher from "@/components/LangSwitcher";

export const metadata: Metadata = {
  title: "OneCo — Are You Built to Go Solo?",
  description: "10 questions. Your talent profile. Two paths forward. Find out if you're startup material.",
  openGraph: {
    title: "OneCo — Are You Built to Go Solo?",
    description: "10 questions. Your talent profile. Two paths forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-50 antialiased">
        <LangProvider>
          {/* Fixed language switcher — top right on every page */}
          <div className="fixed top-4 right-4 z-50">
            <LangSwitcher />
          </div>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
