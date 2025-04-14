"use client";

import { useApp } from "@/contexts/app-provider";
import React from "react";
import { Image } from "../image";

type Props = {};

const LoadingScreen = ({}: Props) => {
  const { loading } = useApp();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div className="h-28 w-28 relative flex justify-center items-center">
        <Image
          src="https://www.mavi.com/medias/logoyeni120.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8MTM2NXxpbWFnZS9zdmcreG1sfGFEWXlMMmhrWVM4eE1USXhNakF3TmprME9EZzVOQzlzYjJkdmVXVnVhVEV5TUM1emRtY3wyYTA5OGI4ZDRhZGFiZDhkODQzZDg0ZDUxM2FhYjY4NGUwZDRhZThiZmRhYjZmN2VkYjg4Mzc1NGU0YmViNjUw"
          alt="logo"
          className="w-20 h-10"
        />
        <div className="absolute top-0 left-0 h-28 w-28 border-8 border-gray-100 border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export { LoadingScreen };
