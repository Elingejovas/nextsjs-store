"use client";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import styles from "./ShoppingCart.module.sass";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { handleCreateCart } from "app/actions";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen);
    }
  };

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if (!checkoutUrl) throw new Error("Error creating checkout");
      window.localStorage.removeItem("cart");
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      <span className={styles.ShoppingCart_counter}>{cart.length}</span>
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {cart.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <button
            onClick={handleBuy}
            className={styles.ShoppingCart__buyButton}
            disabled={isBuying}
          >
            Buy
          </button>
        </div>
      )}
    </button>
  );
}
