"use client";
import { useState } from "react";
import { AlignJustify, StickyNote, List, Trash, Archive } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(true);
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
    <div>
      <div className={`h-screen relative duration-300`}>
        <div className="flex items-center shadow py-4">
          <div className="flex items-center gap-x-8 pl-6">
            <div
              onClick={() => setOpen(!open)}
              className="flex justify-center items-center w-12 h-12 cursor-pointer hover:bg-accent hover:rounded-full"
            >
              <AlignJustify size={24} />
            </div>

            <Image src="/notebook.png" alt="notebook" width={32} height={24} />
          </div>

          <div className="ml-2">
            <h1 className="text-2xl">NOTES</h1>
          </div>
        </div>

        <ul className={` ${open ? " w-72" : "w-20"} mt-3`}>
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
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
