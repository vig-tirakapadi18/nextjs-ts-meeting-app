import Image from "next/image";
import React from "react";
import loader from "../assets/loader.svg";

interface ILoadingProps {
  width?: number;
  height?: number;
}

const Loader = ({ width = 50, height = 50 }: ILoadingProps) => {
  return (
    <div className="flex-center h-screen w-full">
      <Image src={loader} alt="loading..." width={width} height={height} />
    </div>
  );
};

export default Loader;
