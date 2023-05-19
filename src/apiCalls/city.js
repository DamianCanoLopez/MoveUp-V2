export async function getCities() {
  try {
    const url = `/api/ciudad`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error();
    error;
  }
}
