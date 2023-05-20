// import Searcher from "@/components/searcher";
import { useState, useEffect } from "react";
// import { getCities } from "@/apiCalls/city";

export default function Main() {
  // useEffect(() => {
  //   getCities();
  // }, []);

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
