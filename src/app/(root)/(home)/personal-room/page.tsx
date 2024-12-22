"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";

interface ITableProps {
  title: string;
  description: string;
}

const Table = ({ title, description }: ITableProps) => {
  return (
    <div className="flex flex-col items-center gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}
      </h1>
      <h2 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h2>
    </div>
  );
};

const PersonalRoom = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();

  const meetingId = user!.id;
  const meetingLink = `${process.env.MEXT_PUBLIC_BASE_URL}/meeting/${
    user!.id
  }?personal=true`;

  const { call } = useGetCallById(meetingId);
  const client = useStreamVideoClient();

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId);

    if (!call) {
      await newCall.getOrCreate({
        data: { starts_at: new Date().toISOString() },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold ">Personal Room</h1>

      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s meeting room`} />
        <Table title="Meeting ID" description={meetingId} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-rose-1" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-dark-1"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link copied successfully!" });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
