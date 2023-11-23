import { useReducer } from "react";
import { BookingItem } from "../../interfaces";

export const getBookings = async () => {
  const response = await fetch(`http://localhost:8080/api/v1/bookings`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error("Failed to fetch bookings")
  }
}

export const addBooking = async (item: BookingItem) => {
  if (item.numOfRooms > 3 || item.numOfRooms < 1) alert("Sorry, You can only book from 1 to 3 rooms.")
  const response = await fetch(`http://localhost:8080/api/v1/coworkingspaces/${item.coworkingspace}/bookings`, {
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
  })
  if (!response.ok) alert("Failed to add bookings")
  alert("Reservation successful")
}

export const removeBooking = async (id: string) => {
  const response = await fetch(`http://localhost:8080/api/v1/bookings/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "DELETE",
  })
  if (!response.ok) alert("Failed to remove bookings")
}

export const editBooking = async (item: any) => {
  console.log
  const response = await fetch(`http://localhost:8080/api/v1/bookings/${item._id}`, {
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "PUT",
  })
  console.log(await response.text())
  if (!response.ok) alert("Failed to edit bookings")
}