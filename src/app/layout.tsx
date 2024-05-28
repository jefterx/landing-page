import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"],
  weight: ['500','600','700']
 });

export const metadata: Metadata = {
  title: "LandingPage",
  description: "Primeira LandinPage em next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
