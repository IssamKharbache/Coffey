import type { Metadata } from "next";
import { Poppins, Amiko } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const sanchez = Amiko({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sanchez",
});
export const metadata: Metadata = {
  title: "Coffey",
  description: "Coffee with a twist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${sanchez.variable}  bg-primary/20 antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
