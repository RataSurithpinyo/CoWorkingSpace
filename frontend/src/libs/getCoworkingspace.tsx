export default async function getCoworkingspace(id: string) {
  const response = await fetch(`http://localhost:8080/api/v1/coworkingspaces/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch coworkingspaces");
  }
  return await response.json();
}
