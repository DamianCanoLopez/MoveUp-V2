import { useState, useEffect } from "react";
// import { CalendarWithInput } from "./calendar";
import SELECT from "./common/select";
import { getCities, Cities } from "../apiCalls/city";

// export const getServerSideProps = async () => {
//   const response = await getCities();
//   console.log(response);

//   return { props: { response } };
// };

interface Props {
  onSearch: (city: string, date: { start: string; end: string }) => void;
}

export default function Searcher(props: Props) {
  const [dataCities, setDataCities] = useState<Cities | undefined>();

  const [city, setCity] = useState("");

  const [dates, setDates] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    getCities().then((data) => {
      setDataCities(data);
      console.log(data);
    });
  }, []);

  const cities = dataCities?.map((city) => {
    return (
      <option key={city.id} value={city.id}>
        {city.nombreCiudad}
      </option>
    );
  });

  console.log({ cities });

  const clearInputs = () => {
    setDates({ start: "", end: "" });
    setCity("");
  };

  return (
    <>
      <div className="bg-search py-4">
        <div className="d-flex justify-content-center">
          <h1 className="fs-2 fw-bold text-light mb-3">Busca tu clase</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSearch(city, dates);
          }}
        >
          <div className="container d-flex justify-content-center">
            <div className="justify-content-center input-group gap-3">
              <div className="col d-flex">
                <SELECT
                  onChange={(e: any) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                >
                  <option value="">¿A dónde vamos a ir?</option>
                  {/* <p>{cities}</p> */}
                  {cities}
                </SELECT>
              </div>
              <div className="col-sm-12 col-md-4">
                {/* <CalendarWithInput dates={dates} setDates={setDates} /> */}
              </div>
              <div className="d-flex col-12 col-md-2">
                <button type="submit" className="btn btn-primary w-100">
                  Buscar
                </button>
              </div>
              <div className="col col-md-2 d-flex">
                <button
                  className="btn btn-secondary w-100"
                  onClick={clearInputs}
                  type="submit"
                >
                  Todo
                  <i className="ms-2 bi bi-globe-americas"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
