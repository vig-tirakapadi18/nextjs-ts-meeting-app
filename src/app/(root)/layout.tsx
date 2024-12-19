import React from "react";
import { ILayoutProps } from "../types";

const RootLayout = ({ children }: ILayoutProps) => {
  return <main>{children}</main>;
};

export default RootLayout;
