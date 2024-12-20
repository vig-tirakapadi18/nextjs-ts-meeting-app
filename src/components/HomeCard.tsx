import React from "react";

interface IHomeCardProps {
  children?: React.ReactNode;
  heading?: string;
  subTitle?: string;
  bgColor?: string;
}

const HomeCard = ({
  children,
  heading,
  subTitle,
  bgColor = "bg-orange-1",
}: IHomeCardProps) => {
  return (
    <div
      className={`${bgColor} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer text-white`}
      onClick={() => {}}
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
