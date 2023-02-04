import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Main() {
  const router = useRouter();
  return (
    <>
      <div className="huh">
        <Navbar />
        <div className="all-parent">
          <div className="main-intro-container">
            <div className="main-heading-container">
              <h1>
                An investment in <br /> knowledge pays the best interest.
              </h1>
            </div>
            <div className="hr-container">
              <hr />
            </div>
            <div className="description-container">
              <p>
                Different than a college or university, the British Columbia
                Institute of Technology offers practical, flexible, applied
                education with instructors who have direct, hands-on experience
                in their field.
              </p>
            </div>
            <div className="btn-parent">
              <div className="btn-child">
                <Link href="/about">
                  <button>More About Us</button>
                </Link>
              </div>
              <div className="btn-child">
                <Link href="/contact">
                  <button>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link href="/about">
              <span>
                <Image
                  src={"/icons/downwardArrow.png"}
                  width={50}
                  height={50}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
