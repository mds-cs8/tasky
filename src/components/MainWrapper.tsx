"use client";

interface prop {
  children: React.ReactNode;
}
export default function MainWrapper({ children }: prop) {
  return <div className="flex p-10 gap-10 h-full">{children}</div>;
}
