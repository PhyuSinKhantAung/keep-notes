'use client';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { SearchInput } from '@/components/ui/SearchInput';
import { ModeToggle } from '@/components/ui/Dropdown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Archive,
  LogOut,
  Moon,
  RefreshCcw,
  Settings,
  Sun,
  Trash,
} from 'lucide-react';
import { Icons } from '../Icons';

const NavBar = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/ClientMember');
    },
  });

  const { setTheme, theme } = useTheme();

  return (
    <div className={`relative duration-300 border-b flex`}>
      <div className="w-1/4  py-4">
        <div className="flex items-center gap-x-2 pl-6">
          <Image src="/notebook.png" alt="notebook" width={32} height={24} />

          <h1 className="text-2xl hidden md:block">NOTES</h1>
        </div>
      </div>
      <div className="w-1/2 py-4 md:px-24">
        <SearchInput placeholder="Search" />
      </div>
      <div className="w-1/4 py-4">
        <div className="flex justify-end gap-x-2 md:gap-x-6 items-center pr-2 md:pr-10 cursor-pointer ">
          <div className="hidden md:block">
            <Icons.refresh size={24} onClick={() => window.location.reload()} />
          </div>
          <div className="hidden md:block">
            <ModeToggle />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="pr-5">
              {status === 'authenticated' && (
                <Avatar>
                  <AvatarImage src={session.user?.image || ''} />

                  <AvatarFallback>
                    {session.user?.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuItem
                className="md:hidden"
                onClick={() => window.location.reload()}
              >
                <RefreshCcw size={14} className="mx-3" />
                Refresh
              </DropdownMenuItem>

              <Link href="/">
                <DropdownMenuItem className="md:hidden">
                  <Settings size={14} className="mx-3" />
                  Setting
                </DropdownMenuItem>
              </Link>

              <Link href="/archive">
                <DropdownMenuItem>
                  <Archive size={14} className="mx-3" />
                  Archive
                </DropdownMenuItem>
              </Link>

              <Link href="/trash">
                <DropdownMenuItem>
                  <Trash size={14} className="mx-3" />
                  Trash
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                onClick={() => {
                  if (theme === 'light') {
                    return setTheme('dark');
                  } else return setTheme('light');
                }}
              >
                {theme === 'light' ? (
                  <Sun size={14} className="mx-3" />
                ) : (
                  <Moon size={14} className="mx-3" />
                )}
                Mode
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              {session ? (
                <Link href="/api/auth/signout?callbackUrl=/">
                  <DropdownMenuItem>
                    <LogOut size={14} className="mx-3" />
                    Log out
                  </DropdownMenuItem>
                </Link>
              ) : (
                <Link href="/api/auth/signin">
                  <DropdownMenuItem>
                    <LogOut size={14} className="mx-3" />
                    Log in
                  </DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
