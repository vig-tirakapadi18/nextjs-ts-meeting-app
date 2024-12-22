import Image from "next/image";
import React from "react";
import loader from "../assets/loader.svg";
import { cn } from "@/lib/utils";

interface ILoadingProps {
  width?: number;
  height?: number;
  className?: string;
}

const Loader = ({ width = 50, height = 50, className }: ILoadingProps) => {
  return (
    <div className={cn("flex-center h-screen w-full", className)}>
      <Image src={loader} alt="loading..." width={width} height={height} />
    </div>
  );
};

export default Loader;
