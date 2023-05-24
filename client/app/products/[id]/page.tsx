"use client";
import axios from "axios";
import Image from "next/image";
import { QueryCache, useQuery, useQueryClient } from "react-query";
import { Product } from "../../../types/product";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery(
    "infoDetail",
    () => axios.get(`http://localhost:3000/products/${params.id}`),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      keepPreviousData: true,
    }
  );
  if (!data) return <div>Loaidng..</div>;
  const { title, imageUrl, description, price } = data?.data;

  return (
    <div className="product-detail">
      <p className="product-detail__title">{title}</p>
      <Image src={imageUrl} width={200} height={150} alt={title} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">${price}</span>
    </div>
  );
};

export default ProductDetail;
