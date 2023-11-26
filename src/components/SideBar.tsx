import Image from "next/image";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { navMenu } from "@/utils/Menu";
export default function SideBar() {
  return (
    <nav className="h-full shadow-md py-6 bg-card rounded-md border-2 border-border flex flex-col justify-between items-center border-zinc-300 w-[170px]">
      {/* profile  */}
      <div className="flex flex-col space-y-4">
        <Image src={""} alt="user image" />
        <p>user name</p>
      </div>
      {/* menu link  */}
      <div className="w-full">
        {navMenu.map((item) => (
          <Link
            className="flex gap-6 items-center  p-2 hover:bg-neutral-500/30 "
            key={item.id}
            href={item.path}
          >
            <span className="text-primary mr-4">{<item.icon />}</span>
            {item.title}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
