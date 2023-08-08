"use client";

import { FiShoppingBag } from "react-icons/fi";
import Button from "./button";

const NavbarActions = () => {
    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center px-4 py-2 overflow-hidden">
                <FiShoppingBag size={20} color="white" />
            </Button>
        </div>
    );
}

export default NavbarActions;