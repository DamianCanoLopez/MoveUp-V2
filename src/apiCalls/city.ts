export interface Cities {
  id: number;
  nombreCiudad: string;
  url: string;
}

export async function getCities() {
  try {
    const url: string = `/api/ciudad`;
    const response = await fetch(url);
    const data: Cities = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    console.error();
    error;
  }
}
