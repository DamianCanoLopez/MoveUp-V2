import prisma from "../../lib/prisma";
import { format, isValid } from "date-fns";
import Searcher from "@/components/searcher";
import type { Ciudades } from "@prisma/client";

export const getServerSideProps = async () => {
  let response = null;

  try {
    response = await prisma.ciudades.findMany();
  } catch (e) {
    console.error(e);
  }

  return { props: { response } };
};

interface Props {
  response: Ciudades[] | undefined;
}

export default function Main(props: Props) {
  return (
    <div className="min-vh-100">
      <Searcher
        cities={props.response}
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
    </div>
  );
}
