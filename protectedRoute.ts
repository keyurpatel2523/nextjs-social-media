"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import your Fireba
import { checkUserLoggedIn } from "./app/firebase/firebaseAuth";

const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkUserLoggedIn((loggedIn: boolean) => {
      console.log("loggedIn", loggedIn);
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        // User is logged in, you can access user data here
        // For example, accessing user data from state or context
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    });
  }, []);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;
