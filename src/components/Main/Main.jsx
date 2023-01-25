import Image from "next/image";
import Navbar from "../Navbar/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="all-parent">
        <div className="main-intro-container">
          <div className="main-heading-container">
            <h2>
              An investment in <br /> knowledge pays the best interest.
            </h2>
          </div>
          <div className="hr-container">
            <hr />
          </div>
          <div className="description-container">
            <p>
              Different than a college or university, the British Columbia
              institure of Technology offers practical, flexible, applied
              education with instructors who have direct, hands-on experience in
              their field.
            </p>
          </div>
          <div className="btn-parent">
            <div className="btn-child">
              <button>More About Us</button>
            </div>
            <div className="btn-child">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Image src={"/icons/downwardArrow.png"} width={50} height={50} />
        </div>
      </div>
    </>
  );
}
