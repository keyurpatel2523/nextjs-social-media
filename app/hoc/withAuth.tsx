"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthListener } from "../firebase/firebaseAuth";

const withAuth = (WrappedComponent: any) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const authListener = useAuthListener((user: any) => {
      if (!user) {
        router.push("/login");
      }
    });

    useEffect(() => {
      return () => authListener();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
