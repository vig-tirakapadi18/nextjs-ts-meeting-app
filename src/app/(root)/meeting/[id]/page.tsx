import React from "react";

interface IMeetingParams {
  params: { id: string };
}

const Meeting = ({ params }: IMeetingParams) => {
  return <div>Meeting Room: {params.id}</div>;
};

export default Meeting;
