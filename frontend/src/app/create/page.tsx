"use client";
import { getServerSession } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Manage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");
  const token = localStorage.getItem("token");


  const handleCreate = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/coworkingspaces`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name,
            operatingHours: operatingHours,
            address:address,
            province:province,
            postalcode:postalcode,
            tel: tel,
            picture:picture
          }),
        }
      );
      if (response.ok) {
        alert("Created coworking space successfully!");
        router.push("/coworkingspace");
        router.refresh();
      } else {
        alert("An Error has occured. Please try again.");
        window.location.reload();
        // console.log("Error has occured.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg mt-6">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-black underline decoration-green-500 ">
            Create Coworking Space
          </h2>
          <h3 className="mt-2 text-center font-semibold leading-9 tracking-tight text-black">
            Please fill in the information
          </h3>
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
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Operating Hours
              </label>
              <div className="mt-2">
                <input
                  value={operatingHours}
                  onChange={(e) => setOperatingHours(e.target.value)}
                  id="operatingHours"
                  name="operatingHours"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Address
              </label>
              <div className="mt-2">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  name="address"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Province
              </label>
              <div className="mt-2">
                <input
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  id="province"
                  name="province"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Postal Code
              </label>
              <div className="mt-2">
                <input
                  value={postalcode}
                  onChange={(e) => setPostalcode(e.target.value)}
                  id="postalcode"
                  name="postalcode"
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
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-black">
                Picture
              </label>
              <div className="mt-2">
                <input
                  value={picture}
                  onChange={(e) => setPicture(e.target.value)}
                  id="picture"
                  name="picture"
                  placeholder="Please use Google Drive direct download link"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        
          </form>

          <div className="flex justify-center items-center mt-4 mb-10">
                
                <button
                  type="submit"
                  className="block rounded-md bg-green-600 text-white px-3 py-2
                  shadow-sm hover:bg-green-200 hover:text-black hover:border-2 hover:border-green-500"
                  onClick={() => {
                    handleCreate();
                  }}
                >
                  Create
                </button>

            </div>
        </div>
      </div>
    </>
  );
}

