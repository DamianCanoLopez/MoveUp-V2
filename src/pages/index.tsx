import prisma from "../../lib/prisma";
import { format, isValid } from "date-fns";
import Searcher from "@/components/searcher";
import Categories from "@/components/categories";
import type { Ciudades, Categorias } from "@prisma/client";

export const getServerSideProps = async () => {
  let cities = null;
  let categories = null;
  try {
    cities = await prisma.ciudades.findMany();
    categories = await prisma.categorias.findMany();
  } catch (e) {
    console.error(e);
  }

  return { props: { cities, categories } };
};

interface Props {
  cities: Ciudades[] | null;
  categories: Categorias[] | null;
}

export default function Main(props: Props) {
  return (
    <div className="min-vh-100">
      <Searcher
        cities={props.cities}
        onSearch={(city, date) => {
          const formatDate = "yyyy-MM-dd";
          console.log(date);

          const start =
            date.start && isValid(date.start)
              ? format(date.start, formatDate)
              : "";

          const end =
            date.end && isValid(date.end) ? format(date.end, formatDate) : "";

          // getFilteredClasses(city, { start, end }).then((data) => {
          //   setData(data);
          // });

          // setTitle("Resultado de la búsqueda:");
        }}
      />
      <Categories
        categories={props.categories}
        // onClickCategory={(data, categoryName) => {
        //   setData(data);
        //   setTitle("Filtrado por categoría: " + categoryName);
        // }}
      />
    </div>
  );
}
