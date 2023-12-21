import {
  LucideProps,
  type IconNode as LucideIcon,
  RotateCwIcon,
  AlignJustify,
  SunIcon,
  MoonIcon,
  SearchIcon,
  XIcon,
  PenSquare,
  Copy,
  Pin,
  Archive,
  Trash2,
  ArchiveRestore,
  FolderSync,
  PinOff,
} from 'lucide-react';
import { Button } from './ui/button';

export type Icon = LucideIcon;

export const Icons = {
  sun: (props: LucideProps) => <SunIcon {...props} />,
  moon: (props: LucideProps) => <MoonIcon {...props} />,
  hamburger_menu: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className="rouned-full w-10 h-10 p-0 m-0"
    >
      <AlignJustify {...props} />
    </Button>
  ),
  refresh: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className="rouned-full w-10 h-10 p-0 m-0"
    >
      <RotateCwIcon {...props} />
    </Button>
  ),
  search: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className="rouned-full w-10 h-10 p-0 m-0"
    >
      <SearchIcon {...props} />
    </Button>
  ),
  clear: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className="rouned-full w-10 h-10 p-0 m-0"
    >
      <XIcon {...props} />
    </Button>
  ),
  pensquare: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      {' '}
      <PenSquare {...props} />
    </Button>
  ),

  copy: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <Copy {...props} />
    </Button>
  ),
  pin: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <Pin {...props} />
    </Button>
  ),
  unpin: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <PinOff {...props} />
    </Button>
  ),

  archive: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <Archive {...props} />
    </Button>
  ),
  archiveRestore: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <ArchiveRestore {...props} />
    </Button>
  ),
  trash: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <Trash2 {...props} />
    </Button>
  ),
  trashRestore: (props: LucideProps) => (
    <Button
      size="icon"
      variant="ghost"
      className=" rounded-full w-10 h-10 p-0 m-0"
    >
      <FolderSync {...props} />
    </Button>
  ),
};
