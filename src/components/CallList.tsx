"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaPlayCircle,
  FaVideo,
} from "react-icons/fa";
import Loader from "./Loader";

type CallListType = "upcoming" | "recordings";

const CallList = ({ type }: CallListType) => {
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const router = useRouter();
  const {
    endedCalls,
    upcomingCalls,
    recordings: callRecordings,
    isLoading,
  } = useGetCalls();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls!";
      case "recordings":
        return "No Recordings!";
      case "upcoming":
        return "No Upcoming Calls!";
      default:
        return "";
    }
  };

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id}
            icon={
              type === "ended" ? (
                <FaCalendarCheck size={30} />
              ) : type === "upcoming" ? (
                <FaCalendarAlt size={30} />
              ) : (
                <FaVideo size={30} />
              )
            }
            title={
              (meeting as Call).state.custom.description.substring(0, 26) ||
              "No Description Given!"
            }
            // date={
            //   (meeting as Call).state.startedAt?.toLocaleString() ??
            //   (meeting as CallRecording).start_time.toLocaleString()
            // }
            date="22/12/2024, 12:00:00 AM"
            isPreviousMeeting={type === "ended"}
            buttonIcon1={type === "recordings" ? <FaPlayCircle /> : undefined}
            buttonText={type === "recordings" ? "Play" : "Start"}
            handleClick={
              type === "recordings"
                ? () => router.push(`${(meeting as CallRecording).url}`)
                : () => router.push(`/meeting/${(meeting as Call).id}`)
            }
            link={
              type === "recordings"
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                    (meeting as Call).id
                  }`
            }
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
