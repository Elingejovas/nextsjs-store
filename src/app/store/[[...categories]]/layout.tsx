import { getCollections } from "app/services/shopify/collections";
import styles from "./StoreLayout.module.sass";
import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections();
    return (
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {collections?.map((collection: any) => (
                        <li key={collection.id} className={styles.StoreLayout__item}>
                            <Link href={'/store/' + collection.handle}>
                                <a className={styles.StoreLayout__chip}>{collection.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </main>
    );
}
