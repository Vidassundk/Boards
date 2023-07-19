import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Boards",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cn(inter)} lang="en">
      <body>{children}</body>
    </html>
  );
}
