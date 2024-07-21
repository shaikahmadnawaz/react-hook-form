import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Hook Form with Next.js",
  description: "Example of using React Hook Form with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
