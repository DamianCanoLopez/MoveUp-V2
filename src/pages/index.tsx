// import Searcher from "@/components/searcher";
import { useState, useEffect } from "react";
import prisma from "../../lib/prisma";
import Searcher from "@/components/searcher";
import { City } from "../apiCalls/city";

export const getServerSideProps = async () => {
  let response;

  try {
    response = await prisma.Ciudades.findMany();
  } catch (e) {
    console.error(e);
  }

  return { props: { response } };
};

interface Props {
  response: City[] | undefined;
}

export default function Main(props: Props) {
  console.log(props.response);

  return (
    <div className="min-vh-100">
      {/* <Searcher
        onSearch={(city, date) => {
          const formatDate = "yyyy-MM-dd";

          const start = isValid(date.start)
            ? format(date.start, formatDate)
            : "";

          const end = isValid(date.end) ? format(date.end, formatDate) : "";

          getFilteredClasses(city, { start, end }).then((data) => {
            setData(data);
          });

          setTitle("Resultado de la búsqueda:");
        }}
      /> */}
    </div>
  );
}
