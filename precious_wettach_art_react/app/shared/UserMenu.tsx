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
        
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem 
            className="text-red-600"
            onClick={(e) => {
                logout(e);
                redirect()
            }}
            >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
