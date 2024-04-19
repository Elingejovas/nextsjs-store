import Link from "next/link";
import styles from "./Header.module.sass";
import { useEffect, useState } from "react";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import dynamic from "next/dynamic";

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), { ssr: false });

export default function Header() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const customerData = await validateAccessToken();
        setCustomer(customerData);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    }
    fetchCustomer();
  }, []);

  return (
    <header>
      <nav className={styles.Header}>
        <Link href="/" className={styles.NavLink}>Inicio</Link>
        <Link href="/store" className={styles.NavLink}>Tienda</Link>
        {customer?.firstName ? (
          <p className={styles.CustomerGreeting}>Hola: {customer.firstName}</p>
        ) : (
          <Link href="/login" className={styles.NavLink}>Login</Link>
        )}
        <NoSSRShoppingCart />
      </nav>
    </header>
  );
}
