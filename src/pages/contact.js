import Form from "@/components/Contact/Form";
import Heading from "@/components/Contact/Heading";
import Subhead from "@/components/Contact/Subhead";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function contact() {
  return (
    <>
      <div className="parent-cont-reverse">
        <Navbar />
        <div className="all-container-contact">
          <Heading />
          <Subhead />
          <Form />
          <div className="down-img-container">
            <Image src={"/icons/upwardArrow.png"} width={30} height={40} />
          </div>
        </div>
      </div>
    </>
  );
}
