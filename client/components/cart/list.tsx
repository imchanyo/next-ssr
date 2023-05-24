"use client";

import { cartAtom } from "@components/product/item";
import axios from "axios";
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const Wrap = styled.div`
  background-color: red;
`;

const buttonStyle = css`
  background-color: blue;
`;

const CartList = () => {
  const readAtom = useAtomValue(cartAtom);
  const updateAtom = useSetAtom(cartAtom);
  const deleteClick = async (id: string) => {
    const newData = readAtom.filter((el) => el.id !== id);
    updateAtom(newData);
    await axios.delete(`http://localhost:3000/products/${id}`);
  };
  const allDelete = () => updateAtom([]);
  return (
    <Wrap>
      <button css={buttonStyle} onClick={allDelete}>
        전체 삭제
      </button>
      {readAtom.map((page) => (
        <ul key={page.id}>
          <li>
            <Image
              src={page.imageUrl}
              alt={page.title}
              width={150}
              height={100}
            />
          </li>
          <li>{page.title}</li>
          <li>{page.price}</li>
          <li>
            <button onClick={() => deleteClick(page.id)}>삭제</button>
          </li>
        </ul>
      ))}
    </Wrap>
  );
};

export default CartList;
