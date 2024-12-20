import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn />
    </div>
  );
};

export default SignUpPage;
