"use client";
import ProductHeader from "@components/product/Header";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProductHeader />
      {children}
    </>
  );
}
//
