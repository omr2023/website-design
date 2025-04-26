    import React, { useContext } from "react";
    import { ProductContext } from "../context/Productcontext";
    import Produact from "./Produact";

    const Shop = () => {
    const { products } = useContext(ProductContext);

    // console.log(products);
    const fillterProduts = products.filter((item) => {
        return (
        item.category === "men's clothing" || item.category === "women's clothing"
        );
    });

    return (
        <section id="shop" className="max-padd-container py-20 bg-[#f8f7f4]">
        {/* <title></title> */}
        <h3 className="h3">Our Products</h3>
        <hr className="h-[2px] md:w-1/2 max-w-96 bg-gradient-to-l from-transparent via-black to-black mb-24 border-none rounded" />
        {/* shop container */}
        <div
            id=""
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
            {fillterProduts.map((product) => (
            <Produact product={product} key={product.id} />
            ))}
        </div>
        </section>
    );
    };

export default Shop;
