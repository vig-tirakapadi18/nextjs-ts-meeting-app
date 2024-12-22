import { avatarImages } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { IoCopy } from "react-icons/io5";

interface IMeetingCardProps {
  title: string;
  date?: string;
  icon: ReactNode;
  isPreviousMeeting?: boolean;
  buttonIcon1?: ReactNode;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  title,
  date,
  icon,
  isPreviousMeeting,
  buttonIcon1,
  buttonText,
  handleClick,
  link,
}: IMeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[16.125rem] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[35.5rem]">
      <article className="flex flex-col gap-5">
        {icon}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>

      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={crypto.randomUUID()}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full h-10 w-10", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}

          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-rose-1 px-6">
              {buttonIcon1}&nbsp;{buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({ title: "Link copied successfully!" });
              }}
              className="bg-dark-4 px-6"
            >
              <IoCopy /> &nbsp;Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
