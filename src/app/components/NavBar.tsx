"use client";
import { useState } from "react";
import { AlignJustify, StickyNote, List, Trash, Archive } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Notes", icon: <StickyNote />, path: "/notes", gap: true },
    { title: "Lists", icon: <List />, path: "/notes", gap: true },
    { title: "Archive", icon: <Archive />, path: "/notes", gap: true },
    { title: "Trash", icon: <Trash />, path: "/notes", gap: true },
  ];

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
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:bg-opacity-25 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-6" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
