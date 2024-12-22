import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
