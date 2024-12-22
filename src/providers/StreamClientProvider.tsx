"use client";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

interface IStreamVideoPoviderProps {
  children?: ReactNode;
}

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export default function StreamVideoProvider({
  children,
}: Readonly<IStreamVideoPoviderProps>) {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) throw new Error("Stream API key is not provided!");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username ?? user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loader width={100} height={100} />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
}
