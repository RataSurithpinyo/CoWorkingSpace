import { POST } from "@/app/api/auth/[...nextauth]/route";

export default async function UserLogin(
  userEmail: string,
  userPassword: string
) {
  const response = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to log-in");
  }
  console.log("res:", response);
  // localStorage.setItem('username', response.formData.name)
  return await response.json();
}
