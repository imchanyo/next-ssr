"use client";
import ProductList from "@components/product/list";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetcher, QueryKeys } from "../queryClient";
import { Products } from "../../types/product/index";
import useIntersection from "@hooks/useIntersection";

const Producdts = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);
  // const { data, isLoading } = useQuery(

  //   "info",
  //   () => axios.get(`http://localhost:3000/products?_page=${1}&_limit=20`),
  //   {
  //     staleTime: Infinity,
  //     cacheTime: Infinity,
  //     keepPreviousData: true,
  //     onSuccess: (data) => {
  //       console.log(22, data);
  //     },
  //   }

  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Products>(
      [QueryKeys.PRODUCTS, "product"],
      ({ pageParam }) =>
        axios.get(
          `http://localhost:3000/products?_page=${pageParam}&_limit=20`
        ),
      {
        getNextPageParam: (lastPage) => {
          return lastPage.data.at(-1)?.id;
        },
      }
    );
  // useEffect(() => {
  //     if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage) return
  //     fetchNextPage()
  // }, [intersecting])

  return (
    <div>
      <div>
        <h2>상품목록</h2>
        <ProductList list={data?.pages[0].data || []} />
        <div ref={fetchMoreRef} />
      </div>
    </div>
  );
};

export default Producdts;
