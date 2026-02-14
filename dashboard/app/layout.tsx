import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrendPrintAI — Print on Demand Intelligence Dashboard",
  description: "Track trending niches, get AI design prompts, and discover the hottest t-shirt ideas for your print-on-demand business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
