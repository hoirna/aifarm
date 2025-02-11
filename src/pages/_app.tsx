import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";  // ✅ Import Head for metadata

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      {/* ✅ Add Head component for favicon */}
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

