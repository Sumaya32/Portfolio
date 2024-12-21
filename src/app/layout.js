"use client";

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata = {
  title: "Sumaya MA webdeveloper",
  description:
    "Are you interested in having a professional website to elevate your business to new heights? I have the expertise to make that happen for you.",
};

export default function RootLayout({ children }) {
  const patheName = usePathname();

    return (
      <html lang="en">
        <title>{metadata.title}</title>
        <meta content={metadata.description} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div>
          {patheName === "/" ? children 
          : 
          <>
            <Header /> 
            {children}
          </>
          }
        </div>
        </body>
      </html>
    );
}
