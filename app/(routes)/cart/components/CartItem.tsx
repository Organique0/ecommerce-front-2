"use client";

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/icon-button";
import UseCart from "@/hooks/useCart";
import { Product } from "@/types";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = UseCart();
    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.images[0].url} alt="cart-image" className="object-cover object-center" />
            </div>
            <div className="relative m-4 flex flex-1 flex-col justify-between ms:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={() => cart.removeItem(data.id)} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                        <p className="text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>
                    <div className="mt-1">
                        <Currency value={data.price} />
                        <div className="pt-2">
                            <div className="flex gap-4 items-center">Quantity:
                                <span className="font-semibold flex gap-2 pt-1 items-center">
                                    <IconButton className="bg-gray-300" onClick={() => cart.reduceItem(data)} icon={<Minus size={12} />} />
                                    {data.quantity}
                                    <IconButton className="bg-gray-300" onClick={() => cart.addItem(data)} icon={<Plus size={12} />} />
                                </span>
                            </div>
                            <div className="flex pt-2">
                                <span className="pr-1">Total:</span>
                                <Currency value={data.quantity * parseFloat(data.price)} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </li >
    )
}

export default CartItem;