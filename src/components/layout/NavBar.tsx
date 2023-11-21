"use client";
import { AlignJustify, RotateCw } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = ({ openSideBar }: { openSideBar: any }) => {
  return (
    <div className={`relative duration-300 border-b flex`}>
      <div className="w-1/4  py-4">
        <div className="flex items-center gap-x-4 pl-6">
          <div
            onClick={openSideBar}
            className="flex justify-center items-center w-12 h-12 cursor-pointer hover:bg-accent hover:rounded-full"
          >
            <AlignJustify size={24} />
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
          <RotateCw />
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
