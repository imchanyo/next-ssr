"use client";
import { Product } from "../../types/product/index";
import Image from "next/image";
import Link from "next/link";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { atomWithStorage } from "jotai/utils";

// export const cartAtom = atom('')
export const cartAtom = atomWithStorage<Product[]>("cartAtom", []);

const ProductItem = ({ id, imageUrl, price, title }: Product) => {
  const setAtom = useSetAtom(cartAtom);
  const readAtom = useAtomValue(cartAtom);

  const checkValid = () => {
    const res = [
      ...readAtom,
      {
        id,
        imageUrl,
        price,
        title,
      },
    ];

    return res.reduce(function (acc: Product[], current: Product) {
      if (acc.findIndex(({ id }) => id === current.id) === -1) {
        acc.push(current);
      }
      return acc;
    }, []);
  };
  const addCart = useCallback(() => {
    setAtom(checkValid());
  }, [setAtom, readAtom]);

  return (
    <li className="product-item">
      <Link href={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <Image src={imageUrl} width={200} height={150} alt={title} />
        <span className="product-item__price">₩{price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={addCart}>
        담기
      </button>
    </li>
  );
};
export default ProductItem;
