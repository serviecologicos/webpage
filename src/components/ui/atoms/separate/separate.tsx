import React from "react";
import Image from "next/image";
import { HomeSeparateProps } from "./separate.types";

interface SeparateComponentProps {
  separateContent: HomeSeparateProps
}

const Separate = ({ separateContent }: SeparateComponentProps) => {
  const { title, media } = separateContent;
  return (
    <figure className="absolute z-30 w-full -translate-y-[47%] pointer-events-none">
      <Image
        src={media.url}
        alt={title}
        className="w-full h-auto object-cover"
        width={4000}
        height={200}
      />
    </figure>
  );
};

export default Separate;
