import { useSideBarOpen } from "@/hooks/useSideBarOpen";
import { StickyNote, List, Trash, Archive } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = ({ open }: { open: boolean }) => {
  const Menus = [
    {
      title: "Notes",
      icon: <StickyNote />,
      path: "/notes",
      gap: true,
    },
    { title: "Lists", icon: <List />, path: "/lists" },
    { title: "Archive", icon: <Archive />, path: "/archive" },
    { title: "Trash", icon: <Trash />, path: "/trash" },
  ];

  const pathname = usePathname();
  return (
    <ul
      className={` ${open ? " w-72" : "w-20"} pt-3 h-screen overflow-y-auto ${
        !open && "border-r"
      }`}
    >
      {Menus.map((menu) => (
        <Link key={menu.title} href={menu.path}>
          <li
            className={`flex items-center gap-x-8 py-[0.15rem] pl-6 cursor-pointer
          ${open && pathname === menu.path && `bg-accent rounded-e-3xl`}
          ${open && `hover:bg-accent hover:rounded-e-3xl`}`}
          >
            <div
              className={`flex justify-center items-center w-12 h-12 
            ${!open && pathname === menu.path && "bg-accent rounded-full"}
            ${!open && `hover:bg-accent hover:rounded-full`}`}
            >
              {menu.icon}
            </div>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SideBar;
