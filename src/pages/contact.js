import Form from "@/components/Contact/Form";
import Heading from "@/components/Heading/Heading";
import Subhead from "@/components/Contact/Subhead";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="parent-cont-reverse">
        <Navbar />
        <div className="all-container-contact">
          <Heading title="Contact Us" padding="heading-cont" />
          <Subhead />
          <Form />
          <div className="home-down-arrow-container">
            <Link href="/about">
              <span>
                <Image
                  src={"/icons/upwardArrow.png"}
                  width={30}
                  height={40}
                  alt="arrow-up"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
