import Image from "next/image";
import Link from "next/link";

export default function NavigationArrows() {
  return (
    <div className="arrow-cont">
      <Link href="/">
        <span>
          <Image
            src={"/icons/upwardArrow.png"}
            width={30}
            height={40}
            alt="arrow-up"
            className="cursor-pointer"
          />
        </span>
      </Link>

      <Link href="/contact">
        <span>
          <Image
            src={"/icons/downwardArrow.png"}
            width={30}
            height={40}
            alt="arrow-up"
            className="cursor-pointer"
          />
        </span>
      </Link>
    </div>
  );
}
