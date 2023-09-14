import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../features/cart/cartSlice";

function TotalPrice() {
  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const shipping = 50;
  const vat = Math.round(totalCartPrice * (20 / 100));

  const grandTotal = totalCartPrice + shipping + vat;

  return { cart, totalCartPrice, shipping, vat, grandTotal };
}

export default TotalPrice;
