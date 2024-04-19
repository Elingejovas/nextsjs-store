import { useEffect, useState } from "react";
import styles from './MainProducts.module.sass'
import Image from 'next/image';

const getProducts = async () => {
    try {
        const res = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
            headers: {
                'x-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            }
        });
        const { products } = await res.json();
        return products;
    } catch (error) {
        console.error(error);
        return []; // Devolver una matriz vacía en caso de error
    }
};

export default function MainProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        <section className={styles.MainProducts}>
            <h3>✨ New products released!</h3>
            <div className={styles.MainProducts__grid}>
                {products.map((product) => (
                    <article key={product.id}>
                        <p>{product.title}</p>
                        <Image src={product.images[0].src} alt={product.title} width={500} height={500} />
                    </article>
                ))}
            </div>
        </section>
    );
}
