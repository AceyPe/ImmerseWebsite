import products from "../../assets/json/products.json"
import { ProductsCard } from "../../components/products/productscard"

export const Products = () => {

    return (
        <section className='flex flex-col items-center my-10 gap-10'>
            <h1>Choose The Package that best suits your needs!</h1>
            <div className="flex flex-col lg:flex-row gap-20">
                {products.map((product) => (
                    <ProductsCard title={product.title} monthlyPrice={product.monthlyPrice} yearlyPrice={product.yearlyPrice} description={product.description} listItems={product.listItems} idealFor={product.idealFor} />  
                ))}
            </div>
        </section>
    )
}