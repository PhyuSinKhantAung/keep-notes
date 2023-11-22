"use client";
import { AlignJustify, RotateCw } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import IconBackground from "../ui/IconBackground";

const NavBar = ({ openSideBar }: { openSideBar: any }) => {
  return (
    <div className={`relative duration-300 border-b flex`}>
      <div className="w-1/4  py-4">
        <div className="flex items-center gap-x-2 pl-6">
          <div onClick={openSideBar}>
            <IconBackground>
              <AlignJustify size={24} />
            </IconBackground>
          </div>

          <Image
            src="/notebook.png"
            alt="notebook"
            width={32}
            height={24}
            className="hidden sm:block"
          />

          <h1 className="text-2xl hidden md:block">NOTES</h1>
        </div>
      </div>
      <div className="w-1/2 py-4">
        <Input placeholder="Search" />
      </div>
      <div className="w-1/4 py-4">
        <div className="flex justify-end gap-x-2 md:gap-x-6 items-center pr-2 md:pr-10 cursor-pointer ">
          <div className="hidden md:block">
            <IconBackground>
              <RotateCw />
            </IconBackground>
          </div>

          <div className="hidden sm:block">
            <ModeToggle />
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
