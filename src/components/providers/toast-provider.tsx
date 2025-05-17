
import { Toaster } from "@/components/ui/toaster";
import React from "react";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
