import {create} from "zustand";
import { Product } from "@/types";
import {persist, createJSONStorage} from "zustand/middleware";
import toast from "react-hot-toast";

interface CartStore {
    items:Product[];
    addItem: (data:Product) => void;
    removeItem: (id:string) => void;
    reduceItem:(data:Product)=> void;
    getTotalPrice:()=>number;
    getTotalProducts:()=>number;
    removeAll: ()=>void;
}

const UseCart = create(
    persist<CartStore>((set,get)=>({
        items:[],
        addItem:(data:Product) => {
            const currentItems = get().items;
            const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity += 1;
                set({ items: updatedItems });
            } else {
                set({ items: [...currentItems, { ...data, quantity: 1 }] });
            }

            toast.success("Item added to cart");
        },
        reduceItem:(data:Product)=>{
            const currentItems = get().items;
            const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity -= 1;
                set({ items: updatedItems });

                if(updatedItems[existingItemIndex].quantity === 0) {
                    set({items:[...get().items.filter((item) => item.id !== updatedItems[existingItemIndex].id)]});
                    toast.success("Item removed from cart!")
                    return;
                }

            } else {
                set({ items: [...currentItems] });
            }

            toast.success("Item quantity changed!");
        },

        removeItem:(id:string) => {
            set({items:[...get().items.filter((item) => item.id !== id)]});
            toast.success("Item removed from cart");
        },

        removeAll: ()=>set({items:[]}),

        getTotalProducts: () => {
            const totalProducts = get().items.reduce((total, item) => total + item.quantity, 0);
            return totalProducts;
        },
        getTotalPrice: () => {
            const total = get().items.reduce((total,item) => {
                return total + Number(item.price);                
            },0);
            return total;
        }
    }), {
        name:"cartStorage",
        storage:createJSONStorage(()=>localStorage)
    })
    );

export default UseCart;