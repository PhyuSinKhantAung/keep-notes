"use client";
import Image from "next/image";
import { SearchInput } from "@/components/ui/SearchInput";
import { ModeToggle } from "@/components/ui/Dropdown";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = ({ openSideBar }: { openSideBar: any }) => {
  return (
    <div className={`relative duration-300 border-b flex`}>
      <div className="w-1/4  py-4">
        <div className="flex items-center gap-x-2 pl-6">
          <div onClick={openSideBar}>
            <Icons.hamburger_menu size={24} />
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
      <div className="w-1/2 py-4 md:px-24">
        <SearchInput placeholder="Search" />
      </div>
      <div className="w-1/4 py-4">
        <div className="flex justify-end gap-x-2 md:gap-x-6 items-center pr-2 md:pr-10 cursor-pointer ">
          <div className="hidden md:block">
            <Icons.refresh size={24} />
          </div>
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          {/* // TODO ~ will be fixed ui soon */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                {/* {user && (
                  <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                )} */}
                user
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-y-2 px-4">
              <DropdownMenuLabel>Your Account</DropdownMenuLabel>

              {/* <small> {user && user.name}</small>
              <small> {user && user.email}</small> */}

              <DropdownMenuSeparator />

              <Link href="/api/auth/signout?callbackUrl=/">
                <span className="mr-2">Logout</span>
                <LogOut size={16} />
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
