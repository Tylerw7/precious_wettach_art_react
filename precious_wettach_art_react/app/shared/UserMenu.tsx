import React from "react"
import { Button } from "../../src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../src/components/ui/dropdown-menu"
import type { User } from "../../Types/user"
import { useLogoutMutation } from "../features/account/accountApi";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";



type Props = {
    user: User
};




export function UserMenu({user}: Props) {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/");
    }





  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hover:cursor-pointer">{user.email}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="start"
        sideOffset={8}
        avoidCollisions={false}
        className="w-48"
      >
        
        <DropdownMenuItem className="hover:cursor-pointer"><BsPerson color="black"/>Profile</DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer"><FaMoneyCheck color="black"/>Billing</DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer"><IoIosSettings color="black"/>Settings</DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer"><MdOutlineContactSupport color="black"/>Support</DropdownMenuItem>
        <DropdownMenuItem 
            className="text-red-600 hover:cursor-pointer"
            onClick={(e) => {
                logout(e);
                redirect()
            }}
            >
            <MdLogout color="black" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
