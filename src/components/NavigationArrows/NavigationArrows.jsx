import Image from "next/image";

export default function NavigationArrows() {
  return (
    <div className="arrow-cont">
      <Image
        src={"/icons/upwardArrow.png"}
        width={30}
        height={40}
        alt="arrow-up"
      />
      <Image
        src={"/icons/downwardArrow.png"}
        width={30}
        height={40}
        alt="arrow-up"
      />
    </div>
  );
}
