import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { menuList } from "./data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();

  return (
    <>
      <div className="nav-img-container">
        <Image
          src={"/icons/menu-icon.png"}
          width={50}
          height={50}
          onClick={handleMenu}
          alt="menu-icon"
        />
        <Image
          src={"/icons/graduation-hat.png"}
          width={50}
          height={50}
          alt="graduation-hat"
        />
      </div>
      {isMenuOpen && (
        <div className="menu-bg-container">
          <div className="list-container">
            <div className="btn-container">
              <h1 onClick={handleMenu}>X</h1>
            </div>
            <ul>
              {menuList.map((o, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      router.push(`/${o.link}`);
                    }}
                  >
                    {o.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src={"/background-images/menuBackground.png"}
            width={240}
            height={240}
            alt="menu-background"
          />
        </div>
      )}
    </>
  );
}
