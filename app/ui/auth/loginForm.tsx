"use client";

import { lusitana } from "@/app/ui/fonts";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import MessageHelper from "@/app/utils/messageHelper";
import { auth } from "@/app/firebase/firebaseAuth";

export default function LoginForm() {
  const handleSignIn = async (values: any) => {
    try {
      const email = values.get("email");
      const password = values.get("password");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User signed in:", user);
    } catch (errorMessage: any) {
      MessageHelper.firebaseErrorMessageHandling(errorMessage);
    }
  };

  return (
    <form action={handleSignIn} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} text-center mb-5 text-2xl`}>
          Please log in to continue
        </h1>
        <div className="w-full">
          <div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
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
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <CreateAccountButton />
      </div>
      {/* <ToastContainer /> */}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`${lusitana.className} font-semibold mt-5 w-full`}
      aria-disabled={pending}
    >
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

function CreateAccountButton() {
  const router = useRouter();
  const { pending } = useFormStatus();

  const handleSignup = () => {
    // Redirect to the signup page
    router.push("/signup");
  };

  return (
    <div className="flex justify-center">
      <Button
        className={`${lusitana.className} font-bold mt-8 text-2xl`}
        aria-disabled={pending}
        onClick={handleSignup} // Call handleSignup function on button click
      >
        Create new account
      </Button>
    </div>
  );
}
