import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import Main from "@/components/Main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="parent-cont">
        <Main />
      </main>
    </>
  );
}
