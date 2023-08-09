import { Product } from "@/types";
import Currency from "./ui/Currency";
import Button from "./ui/button";
import { FiShoppingCart } from "react-icons/fi";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="flex items-center mt-3 justify-between">
                <div className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-blact">Size:</h3>
                    <div>{data?.size?.name}</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-blact">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-500" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2" >
                    Add to cart
                    <FiShoppingCart />
                </Button>
            </div>
        </div>
    );
}

export default Info;