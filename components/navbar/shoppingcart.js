import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Shoppingcart() {
  return (
    <Link href="/cart">
      <span>
        <ShoppingCartIcon className="h-12" />
        <span className=" badge badge-warning text-white mr-5">2</span>
      </span>
    </Link>
  );
}
