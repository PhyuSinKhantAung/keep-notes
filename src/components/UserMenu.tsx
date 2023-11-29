import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";

const UserMenu = async () => {
  const session = await auth();
  console.log("user->", session);
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        Phyu Sin Khant Aung
        <br />
        pska@gmail.com
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserMenu;
