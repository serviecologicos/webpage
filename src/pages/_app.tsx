import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from '@/components/ui/molecules/navbar/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {

  const navbarContent = pageProps?.navbarContent || { 
    code: '',
    linksCollection: { items: [] },
    logo: { 
      title: '', 
      media: {
        url: '', 
        alt: '',
      }
    }
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar navbarContent={navbarContent} />
      <Component {...pageProps} />
    </div>
  )
}