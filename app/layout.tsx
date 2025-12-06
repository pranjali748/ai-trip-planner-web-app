"use client"; // layout is client-only

import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexProvider } from "convex/react";
import { convex } from "../convex/client";
import Provider from "./provider";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexProvider client={convex}>
        <html lang="en">
          <body className={outfit.className}>
            <Provider>{children}</Provider>
          </body>
        </html>
      </ConvexProvider>
    </ClerkProvider>
  );
}
