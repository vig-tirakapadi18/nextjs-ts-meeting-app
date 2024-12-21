"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import HomeCard from "./HomeCard";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUserAdd, HiVideoCamera } from "react-icons/hi";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {
    
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        className="bg-orange-1"
        heading="New Meeting"
        subTitle="Start an instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      >
        <FaPlus size={40} />
      </HomeCard>

      <HomeCard
        className="bg-blue-1"
        heading="Schedule Meeting"
        subTitle="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      >
        <FaCalendarAlt size={38} />
      </HomeCard>

      <HomeCard
        className="bg-purple-1"
        heading="New Meeting"
        subTitle="Start an instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      >
        <HiVideoCamera size={40} />
      </HomeCard>

      <HomeCard
        className="bg-yellow-1"
        heading="View Recordings"
        subTitle="Check out your recordings"
        handleClick={() => router.push("/recordings")}
      >
        <HiUserAdd size={40} />
      </HomeCard>

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
