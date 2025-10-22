import type { Metadata } from "next";
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "CineVerso - home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
