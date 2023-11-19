"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const userResgister = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            password: password,
            tel: tel,
            email: email,
          }),
        }
      );
      if (response.ok) {
        alert("Create user successfully. Please sign out and log in to use our services.")
        console.log("Created user succesfully!");
        router.push('/api/auth/signout')
      } else {
        alert("Error has occured. Please make sure that you fill all the fields correctly.")
        console.log("Error has occured.");
        window.location.reload();
      }
      //const result = await response.json();
      //console.log(result)
      // enter you logic when the fetch is successful
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-black">
            Create a new account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Name
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  required
                  placeholder="Please enter your full name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-black"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  type="tel"
                  id="tel"
                  name="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="xxx-xxx-xxxx"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Email
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="xxxx@yourdomain.xxx"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password must be >= 6 digits"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="block rounded-md bg-sky-600 hover:bg-sky-400 px-3 py-2
                text-white shadow-sm mt-2"
                onClick={() => {
                  userResgister();
                }}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
