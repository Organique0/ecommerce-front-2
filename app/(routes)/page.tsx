import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/productList";
import Container from "@/components/ui/container";

export const revalidate = 60;

const HomePage = async () => {
    const billboard = await getBillboard("64e4bfc61b74ddceec9385aa");
    const products = await getProducts({ isFeatured: true });
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;