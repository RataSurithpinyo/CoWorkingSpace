export default async function getHospital(id: string) {
  const response = await fetch(`http://localhost:8080/api/v1/coworkingspaces/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }
  return await response.json();
}
