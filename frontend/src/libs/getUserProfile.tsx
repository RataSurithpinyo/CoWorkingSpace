export default async function getUserProfile(token: string) {
  const response = await fetch("http://localhost:8080/api/v1/auth/me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error("Failed to fetch user profile");
  return await response.json();
}
