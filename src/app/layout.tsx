import Navbar from "@/components/navbar";
import clsx from "clsx";
import type { Metadata } from "next";
import {
  Space_Mono as SpaceMono,
  Space_Grotesk as SpaceGrotesk,
} from "next/font/google";
import "./globals.css";

const spaceMono = SpaceMono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = SpaceGrotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Games Hub Next",
  description: "A game browsing application.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          spaceGrotesk.variable,
          spaceMono.variable,
          "max-h-screen"
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
