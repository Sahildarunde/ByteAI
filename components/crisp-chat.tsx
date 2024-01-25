"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("cce2bef5-2605-4dd9-9be8-b81ecf98f5d9");
  }, []);

  return null;
};