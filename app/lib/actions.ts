"use server";

import { sql } from "@vercel/postgres";
import MessageHelper from "../utils/messageHelper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";
const bcrypt = require("bcrypt");

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
    customerName?: string[];
    customerEmail?: string[];
    customerImage?: string[];
  };
  message?: string | null;
};

export async function addUserWithFirebase(values: any) {
  try {
    const email = values.get("email");
    const firstName = values.get("firstName");
    const lastName = values.get("lastName");
    const password = values.get("password");
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`
      INSERT INTO social_users (id, first_name, last_name, email, password)
      VALUES (${res.user.uid}, ${firstName}, ${lastName}, ${email}, ${hashedPassword})
    `;
    return true;
  } catch (error) {
    MessageHelper.firebaseErrorMessageHandling(error);
    console.log("Error", error);
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  // revalidatePath("/dashboard/invoices");
  // redirect("/dashboard/invoices");
}
