"use client";
import { useState } from "react";
import { AlignJustify, StickyNote, List, Trash, Archive } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Notes", icon: <StickyNote />, path: "/notes", gap: true },
    { title: "Lists", icon: <List />, path: "/lists", gap: true },
    { title: "Archive", icon: <Archive />, path: "/archive", gap: true },
    { title: "Trash", icon: <Trash />, path: "/trash", gap: true },
  ];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <div
        className={`bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex items-center gap-x-4">
          <AlignJustify
            onClick={() => setOpen(!open)}
            className="cursor-pointer hover:bg-slate-600 hover:rounded-full p-2.5"
            size={48}
          />

          <Image src="/notebook.png" alt="notebook" width={32} height={24} />

          <h1 className=" text-3xl">NOTES</h1>
        </div>

        <ul className={` ${open ? "w-72" : "w-20 "}  pt-6`}>
          {Menus.map((menu) => (
            <Link key={menu.title} href={menu.path}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:bg-opacity-25 text-sm items-center gap-x-4 mt-6 ${
                  pathname === menu.path && " bg-accent"
                } `}
              >
                {menu.icon}
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
