/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { SearchInput } from "@/components/ui/SearchInput";
import { ModeToggle } from "@/components/ui/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import { getUserCredentials, logout } from "@/lib/actions";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useEffect, useState } from "react";

const NavBar = ({ openSideBar }: { openSideBar: any }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   getUserCredentials().then((res) => {
  //     console.log(res);
  //     if (res) {
  //       setUser(res.user);
  //     }
  //   });
  // }, []);

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
      <div className="w-1/2 py-4">
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
          <form action={logout}>
            <Button>Logout</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
