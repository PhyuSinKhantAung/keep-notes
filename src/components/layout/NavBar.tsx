"use client";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

const NavBar = ({ openSideBar }: { openSideBar: any }) => {
  return (
    <div>
      <div className={` relative duration-300`}>
        <div className="flex items-center shadow py-4">
          <div className="flex items-center gap-x-8 pl-6">
            <div
              onClick={openSideBar}
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
      </div>
    </div>
  );
};
export default NavBar;
