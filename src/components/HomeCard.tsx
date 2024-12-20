import { cn } from "@/lib/utils";
import React from "react";

interface IHomeCardProps {
  children?: React.ReactNode;
  heading?: string;
  subTitle?: string;
  className?: string;
  handleClick: () => void;
}

const HomeCard = ({
  children,
  heading,
  subTitle,
  className,
  handleClick,
}: IHomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer text-white",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        {children}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <p className="text-lg font-normal">{subTitle}</p>
      </div>
    </div>
  );
};

export default HomeCard;
