"use clinet";
import Link from "next/link";

const ProductHeader = () => {
  return (
    <div>
      <Link style={{ padding: "10px" }} href={"/cart"}>
        cart
      </Link>
      <Link href={"/products"}>list</Link>
    </div>
  );
};
export default ProductHeader;
