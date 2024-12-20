"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        bgColor="bg-orange-1"
        heading="New Meeting"
        subTitle="Start an instant meeting"
      >
        <FaPlus size={40} />
      </HomeCard>
    </section>
  );
};

export default MeetingTypeList;
