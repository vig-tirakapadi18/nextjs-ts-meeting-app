"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import HomeCard from "./HomeCard";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUserAdd, HiVideoCamera } from "react-icons/hi";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { IoCopy } from "react-icons/io5";
import { TiInputChecked } from "react-icons/ti";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  console.log(callDetails);

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({ title: "Please select a Date & Time!" });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create a Call!");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: { starts_at: startsAt, custom: { description } },
      });

      setCallDetails(call);

      if (!values.description) router.push(`/meeting/${call.id}`);

      toast({ title: "Meeting Created Successfully!" });
    } catch (error) {
      console.log(error);
      toast({ title: "Failed to create meeting, Please try again!" });
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        className="bg-orange-1"
        heading="New Meeting"
        subTitle="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
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

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor=""
              className="text-base text-normal leading-[22px] text-sky-50"
            >
              Add a Description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(event) =>
                setValues((prevValues) => ({
                  ...prevValues,
                  description: event.target.value,
                }))
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label
              htmlFor=""
              className="text-base text-normal leading-[22px] text-sky-50"
            >
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) =>
                setValues((prevValues) => ({ ...prevValues, dateTime: date! }))
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="mmmm d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          className="text-center"
          buttonText="Copy Meeting Link"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Meeting Link Copied",
              description: "You can share this link with attendees.",
            });
          }}
          buttonIcon={<IoCopy />}
          buttonImageIcon={<TiInputChecked />}
        />
      )}

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
