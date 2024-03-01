import React from "react";
import Image from "next/image";

type ContentType = string | { logoPath: string };

const Button: React.FC<{
  content: ContentType;
  className?: string;
  href?: string;
}> = ({ content, className, href }) => {
  const buttonClassName = `bg-black text-white rounded-full px-5 py-2 h-12 flex justify-center items-center ${className}`;
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
