import type { Metadata } from "next";
import {NextAuthProvider} from "./Providers"
import "./globals.css";
import {Footer, Navbar} from "@/components"
export const metadata: Metadata = {
  title: "cars",
  description: 'best cars!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
       <NextAuthProvider>
        <Navbar />
        {children}
        <Footer/>
        </NextAuthProvider> 
      </body>
    </html>
  );
}
