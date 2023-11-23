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
  const response = await fetch(`http://localhost:8080/api/v1/coworkingspaces/${item.coworkingspace}/bookings`, {
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
  })
  if (!response.ok) alert(await response.json().then(res => res?.message))
}

export const removeBooking = async (id: string) => {
  const response = await fetch(`http://localhost:8080/api/v1/bookings/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "DELETE",
  })
  if (!response.ok) alert(await response.json().then(res => res?.message))
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
  if (!response.ok) alert(await response.json().then(res => res?.message))
}