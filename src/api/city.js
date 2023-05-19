export async function getCities() {
  try {
    const url = `/api/ciudad/getAllCiudad`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error();
    error;
  }
}
