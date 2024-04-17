"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useFormStatus } from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import MessageHelper from "@/app/utils/messageHelper";
import { addUserWithFirebase } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const handleSignUp = async (values: any) => {
    try {
      const checkUser = await addUserWithFirebase(values);
      if (checkUser) {
        sessionStorage.setItem("userEmail", values.get("email"));
        router.push("/dashboard");
      }
    } catch (errorMessage: any) {
      MessageHelper.firebaseErrorMessageHandling(errorMessage);
    }
  };
  return (
    <form action={handleSignUp} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} text-center mb-5 text-2xl`}>
          Please enter your details to continue
        </h1>
        <div className="w-full">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div className="relative flex-1">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-3">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-3">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <SignupButton />
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`${lusitana.className} font-semibold mt-5 w-full text-2xl`}
      aria-disabled={pending}
    >
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
