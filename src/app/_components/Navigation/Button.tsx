import React from "react";
import Image from "next/image";

type ContentType = string | { logoPath: string };

const Button: React.FC<{
  content: ContentType;
  className?: string;
  href?: string;
}> = ({ content, className, href }) => {
  const buttonClassName = `bg-black text-white rounded-full md:px-5 md:py-2 md:py-3 px-4 py-2 text-base flex justify-center items-center w-fit ${className}`;
  return (
    <button className={buttonClassName}>
      {typeof content === "string" ? (
        content
      ) : (
        <Image
          src={content.logoPath}
          width={25}
          height={25}
          alt="Logo-search"
        />
      )}
    </button>
  );
};
//    <Button content={{ logoPath: "/images/search.svg" }} />

export default Button;
