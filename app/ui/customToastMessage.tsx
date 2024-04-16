"use client";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export function CustomToastMessage() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    console.log("Cal this one");
    // Clear all toasts when the component unmounts
    return () => {
      toast.dismiss();
    };
  }, []);

  return (
    <ToastContainer
      autoClose={3000} // Close toast after 3000 milliseconds (3 seconds)
      closeOnClick={true} // Close toast when clicked
    />
  );
}
