/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function EmptyCart({ onCloseModal }) {
  return (
    <div>
      <p className="">
        Your cart is still empty. Start adding some products :)
      </p>
      <Link to="/shop">
        <Button onClick={() => onCloseModal?.()} type="full">
          Back to Shop
        </Button>
      </Link>
    </div>
  );
}

export default EmptyCart;
