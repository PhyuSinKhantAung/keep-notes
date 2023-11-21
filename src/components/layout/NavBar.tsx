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
        <div className="flex items-center gap-x-4 pl-6">
          <div onClick={openSideBar}>
            <IconBackground>
              <AlignJustify size={24} />
            </IconBackground>
          </div>

          <Image src="/notebook.png" alt="notebook" width={32} height={24} />

          <h1 className="text-2xl">NOTES</h1>
        </div>
      </div>
      <div className="w-1/2 py-4">
        <Input placeholder="Search" />
      </div>
      <div className="w-1/4 py-4">
        <div className="flex justify-end gap-x-6 items-center px-10 cursor-pointer">
          <IconBackground>
            <RotateCw />
          </IconBackground>
          <ModeToggle />
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
