import Image from "next/image";
import { useState } from "react";

export default function Navbar({
  onMenuClick = () => {},
  onScholarshipClick = () => {},
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="nav-img-container">
        <Image
          src={"/icons/menu-icon.png"}
          width={50}
          height={50}
          onClick={handleMenu}
        />
        <Image src={"/icons/graduation-hat.png"} width={50} height={50} />
      </div>
      {isMenuOpen && (
        <div className="menu-bg-container">
          <div className="list-container">
            <div className="btn-container">
              <button className="close-btn" onClick={handleMenu}>
                X
              </button>
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <Image
            src={"/background-images/menuBackground.png"}
            width={240}
            height={240}
          />
        </div>
      )}
    </>
  );
}
