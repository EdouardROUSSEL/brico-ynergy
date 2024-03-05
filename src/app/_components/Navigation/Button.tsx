import React from "react";

type ContentType = string;

const Button: React.FC<{
  content: ContentType;
  className?: string;
  href?: string;
}> = ({ content, className, href }) => {
  const buttonClassName = `active:opacity-90 shadow-lg hover:bg-[#DF371E] bg-black text-white rounded-full md:px-5 md:py-2 md:py-3 px-4 py-2 text-base flex justify-center items-center w-fit ${className}`;
  return <button className={buttonClassName}>{content}</button>;
};

export default Button;
