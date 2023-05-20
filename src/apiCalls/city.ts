export interface City {
  id: number;
  nombreCiudad: string;
  url: string;
}

export async function getCities() {
  try {
    const url: string = `/api/ciudad`;
    const response = await fetch(url);
    const data: City[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
