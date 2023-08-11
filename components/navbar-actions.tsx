"use client";

import { FiShoppingBag } from "react-icons/fi";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import UseCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const cart = UseCart();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex items-center px-4 py-2">
                <FiShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.getTotalProducts()}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;