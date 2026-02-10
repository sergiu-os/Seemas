"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PlatformBackgroundProps {
  platformBackgroundClassName?: string;
}

const PlatformBackground = ({ platformBackgroundClassName }: PlatformBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-[1] will-change-transform">
      <div className={cn("absolute inset-0 bg-[linear-gradient(0deg,#FAFAFA_35%,rgba(250,250,250,0.85)_80.45%)] md:bg-[linear-gradient(0deg,#FAFAFA_0%,rgba(250,250,250,0.85)_80.45%)] z-[2]", platformBackgroundClassName)} />
      <video  autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-[0]">
        <source src="/assets/videos/liquid-gradient.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default PlatformBackground;