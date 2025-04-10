import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@radix-ui/react-menubar";
import { MenubarShortcut } from "../ui/menubar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/utils/themeProvider";
import NewRepositoryInitializer from "@/views/dashboard-view/components/NewRepositoryInitializer";
import { useState } from "react";

const AppHeader = () => {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        {/* Name something here */}
        <div className="flex items-start gap-5">
          <h1 className="text-base font-medium">Application</h1>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Project</MenubarTrigger>
              <MenubarContent className="cursor-pointer bg-accent p-2 rounded-b-sm">
                {/* <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem> */}
                <MenubarItem>You have no project initialized</MenubarItem>
                {/* <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="hidden sm:flex"
          onClick={() => setOpen(true)}
        >
          Add project
        </Button>
        <div className="ml-auto flex items-center gap-5">
          <Avatar>
            <AvatarFallback>UK</AvatarFallback>
          </Avatar>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Uvindu Kavishka</MenubarTrigger>
              <MenubarContent className="cursor-pointer">
                <MenubarItem>User profile</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Settings</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="cursor-pointer bg-accent p-2 rounded-b-sm"
            >
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Sign out
          </Button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <NewRepositoryInitializer
            open={open}
            setOpen={() => setOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default AppHeader;
