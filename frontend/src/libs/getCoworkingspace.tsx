export default async function getCoworkingspace(id: string) {
  const response = await fetch(
    `http://localhost:8080/api/v1/coworkingspaces/${id}?_=${new Date().getTime()}`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
    // console.log("response", response);
    if (!response.ok) {
      throw new Error("Failed to fetch coworkingspaces");
    }
    return await response.json();
}