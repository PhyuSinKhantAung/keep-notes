import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <form className="relative">
        <div className="absolute top-1 left-1 cursor-pointer">
          <div className="flex p-2 justify-center items-center cursor-pointer hover:bg-accent hover:rounded-full">
            <SearchIcon size={18} />
          </div>
        </div>

        <input
          type={type}
          className={cn(
            "flex h-10 w-[80%] rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        <div className="absolute top-1 left-[75%] cursor-pointer">
          <div className="flex p-2 justify-center items-center cursor-pointer hover:bg-accent hover:rounded-full">
            <XIcon size={18} />
          </div>
        </div>
      </form>
    );
  }
);
Input.displayName = "Input";

export { Input };
