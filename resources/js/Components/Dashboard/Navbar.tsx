import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/shadcn/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/Components/shadcn/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import SidebarDashboard from "./SidebarDashboard";

function Navbar() {
    const [position, setPosition] = React.useState("bottom");
    return (
        <div className="w-full flex justify-end bg-white p-2 shadow-md">
            <div className="w-full p-2 md:p-3 flex items-center justify-between">
                {/* LOGO  */}
                <Link
                    href="/"
                    className="flex items-center rtl:space-x-reverse"
                >
                    <img
                        src="/img/favicon.png"
                        className="h-10 w-12 md:h-12 md:w-[50px]"
                        alt="Flowbite Logo"
                    />
                    <span className="text-xs font-semibold whitespace-nowrap text-wrap text-dark leading-4 w-10 md:text-x md:leading-2">
                        Ruang Edit
                    </span>
                </Link>
                {/* END LOGO  */}
                <div className="hidden md:flex w-[100px] flex-item justify-between">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="p-3 hover:cursor-pointer"
                            asChild
                        >
                            <p>Ilham</p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuRadioGroup
                                value={position}
                                onValueChange={setPosition}
                            >
                                <DropdownMenuRadioItem value="top">
                                    Home
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">
                                    Logout
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right"></DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                </div>
                {/* Humberger menu */}
            </div>

            {/* notification */}
            <div className="static md:flex">
                <SidebarDashboard />
            </div>
        </div>
    );
}

export default Navbar;
