"use client";
import { Product } from "../../types/product/index";
import ProductItem from "@components/product/item";

const ProductList = ({ list }: { list: Product[] }) => {
  // @ts-ignore
  return (
    <ul className="products">
      {list.map((page) => (
        <ProductItem {...page} key={page.id} />
      ))}
    </ul>
  );
};

export default ProductList;
