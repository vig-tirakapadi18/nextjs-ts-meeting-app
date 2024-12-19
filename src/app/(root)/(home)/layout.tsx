import { ILayoutProps } from "@/app/types";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const HomeLayout = ({ children }: ILayoutProps) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-col min-h-screen flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
