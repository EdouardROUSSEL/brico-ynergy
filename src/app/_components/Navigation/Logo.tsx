import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex md:gap-2 items-center">
      <Image
        src="/images/brico.webp"
        alt="logo-brico"
        width={100}
        height={100}
        className="md:w-20 w-16 md:pr-1"
      />
      <p className="text-xs md:text-sm md:px-0 px-1">avec</p>
      <Image
        src="/images/ynergie.webp"
        alt="logo-brico"
        width={150}
        height={100}
        className="md:w-24 w-20"
      />
    </div>
  );
}
