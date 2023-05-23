// import { useEffect, useState } from "react";
import Card from "../components/common/card";
import P from "../components/common/p";
import H5 from "../components/common/h5";
// import { getClassByCategory } from "../api/products";
import type { Categorias } from "@prisma/client";

interface Props {
  onClickCategory?: () => void;
  categories: Categorias[] | null;
}

export default function Categories({ onClickCategory, categories }: Props) {
  const eachCategory = categories?.map((category) => {
    return (
      <Card
        key={category.id}
        role="button"
        className="d-flex flex-column"
        onClick={() => {
          // getClassByCategory(category.id).then((data) => {
          //   onClickCategory(data, category.nombreCategorias);
          // });
        }}
      >
        <div className="d-flex justify-content-center w-100 flex-grow-1">
          <img
            className="card-img-top object-fit-cover brightness-effect"
            src={category.url}
            alt={category.nombreCategoria}
          />
        </div>
        <div className="p-3">
          <H5 className="fw-bolder">{category.nombreCategoria}</H5>
          <P>{category.descripcionCategorias}</P>
        </div>
      </Card>
    );
  });

  return (
    <div className="container mt-4">
      <P className="fs-4 fw-bold">Buscar por tipo de clase</P>
      <div className="cards">{eachCategory}</div>
    </div>
  );
}
