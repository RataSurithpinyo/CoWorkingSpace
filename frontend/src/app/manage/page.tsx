"use client";
import getCoworkingspace from "@/libs/getCoworkingspace";
import { getServerSession } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Manage() {
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const coworkingName = urlParams.get("coworking")
  const router = useRouter();
  const [name, setName] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");
  const token = localStorage.getItem("token");

  const handleUpdate = async () => {
    try {
      const updatedData = {
        name: name.trim() !== "" ? name : undefined,
        operatingHours: operatingHours.trim() !== "" ? operatingHours : undefined,
        address: address.trim() !== "" ? address : undefined,
        province: province.trim() !== "" ? province : undefined,
        postalcode: postalcode.trim() !== "" ? postalcode : undefined,
        tel: tel.trim() !== "" ? tel : undefined,
        picture: picture.trim() !== "" ? picture : undefined,
      };
  
      const filteredData = Object.fromEntries(
        Object.entries(updatedData).filter(([_, value]) => value !== undefined)
      );
      console.log('filter', filteredData)
      const response = await fetch(
        `http://localhost:8080/api/v1/coworkingspaces/${cid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(
            filteredData
          ),
        }
      );
      if (response.ok) {
        console.log(response)
        alert("Updated coworking space successfully");
        router.push("/coworkingspace");
        router.refresh()
        // console.log("Created user succesfully!");
      } else {
        alert("An Error has occured. Please try again.");
        window.location.reload();
        // console.log("Error has occured.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/coworkingspaces/${cid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        alert("Deleted coworking space successfully");
        router.push("/coworkingspace");
        // console.log("Created user succesfully!");
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
            Edit Coworking Space Information
          </h2>
          <h3 className="mt-2 text-center font-semibold leading-9 tracking-tight text-black">
            Selected coworking space: {coworkingName}
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
                  placeholder="Update coworking space's name"
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
                  placeholder="Update coworking space's operating hours"
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
                  placeholder="Update coworking space's adddress"
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
                  placeholder="Update coworking space's province"
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
                  placeholder="Update coworking space's postal code"
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
                  placeholder="Update coworking space's tel"
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
                  placeholder="Update coworking space's picture"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="flex flex-col items-center">
              <button
                type="submit"
                className="block rounded-md bg-sky-600 hover:bg-sky-400 px-3 py-2
                text-white shadow-sm mt-2"
                onClick={() => {
                  handleUpdate();
                }}
              >
                Save Changes
              </button>
              <button
                type="submit"
                className="block rounded-md bg-sky-600 hover:bg-sky-400 px-3 py-2
                text-white shadow-sm mt-2"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete Coworking Space
              </button>
            </div> */}
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
              <button
                type="submit"
                className="block rounded-md bg-sky-600 hover:bg-sky-400 px-3 py-2
                text-white shadow-sm mt-2"
                onClick={() => {
                  handleUpdate();
                }}
              >
                Save Changes
              </button>
               
              </div>

              <div className="sm:col-span-3">
              <button
                type="submit"
                className="block rounded-md bg-sky-600 hover:bg-sky-400 px-3 py-2
                text-white shadow-sm mt-2"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete Coworking Space
              </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
