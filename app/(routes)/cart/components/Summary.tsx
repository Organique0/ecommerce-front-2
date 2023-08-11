"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/Currency";
import UseCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";



const Summary = () => {
    const searchParams = useSearchParams();
    const items = UseCart((state) => state.items);
    const removeAll = UseCart((state) => state.removeAll);
    const totalPrice = UseCart((state) => state.getTotalPrice());

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("payment completed!");
            removeAll();
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong")
        }
    }, [])

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
        });
        window.location = response.data.url;
    }
    return (
        <div className="mt-16 rounded-lg bg-gray-200 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2>Order summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex justify-between border-t border-gray-300 pt-4 items-center">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button className="w-full mt-6" onClick={onCheckout}>
                Chekout
            </Button>
        </div>
    );
}

export default Summary;