import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";


const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-ibm-plex'
 });

export const metadata: Metadata = {
  title: "RePicZone",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#5bd5ca'}
    }}>
      <html lang="en">
        <body>
          <header>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
