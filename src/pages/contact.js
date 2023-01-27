import Form from "@/components/Contact/Form";
import Heading from "@/components/Heading/Heading";
import Subhead from "@/components/Contact/Subhead";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";

export default function contact() {
  const router = useRouter();
  return (
    <>
      <div className="parent-cont-reverse">
        <Navbar />
        <div className="all-container-contact">
          <Heading title="Contact Us" />
          <Subhead />
          <Form />
          <div className="down-img-container">
            <Image
              src={"/icons/upwardArrow.png"}
              width={30}
              height={40}
              onClick={() => router.push("/about")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
