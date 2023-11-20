export default async function getCoworkingspaces() {
  await new Promise((resolve) => setTimeout(resolve, 8000));
  const response = await fetch("http://localhost:8080/api/v1/coworkingspaces", {
    next: { tags: ["coworkingspaces"] },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch coworkingspaces");
  }

  return await response.json();
}
