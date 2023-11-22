export default async function getCoworkingspace(id: string) {
  const response = await fetch(
    `http://localhost:8080/api/v1/coworkingspaces/655b0d27b7f4f39d035685d9`,//${id}`,
    // { cache: 'no-store' }
  );
  console.log("response", response.json()); // await response.json()
  if (!response.ok) {
    throw new Error("Failed to fetch coworkingspaces");
  }
  return await response.json();
}
