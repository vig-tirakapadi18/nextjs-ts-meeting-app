import React from "react";
import { ILayoutProps } from "../types";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voom",
  description: "Voom, The video conferencing app!",
};

const RootLayout = ({ children }: ILayoutProps) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
