import { useCartContext } from "../../../context/Cart/CartContext";

export const CartCount = () => {
   const { getTotalProduct } = useCartContext();
   
   return (
      <span className="count-cart">{ getTotalProduct() || '0' }</span>
   )

}
