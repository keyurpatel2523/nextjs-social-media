"use server";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import MessageHelper from "../utils/messageHelper";
import { sql } from "@vercel/postgres";

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

export async function addCustomer(firstName: string, lastName: string) {
  // const { customerId, amount, status } = validatedFields.data;
  // const amountInCents = amount * 100;
  // const date = new Date().toISOString().split("T")[0];
  // try {
  //   await sql`
  //     INSERT INTO invoices (customer_id, amount, status, date)
  //     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  //   `;
  // } catch (error) {
  //   return {
  //     message: "Database Error: Failed to Create Invoice.",
  //   };
  // }
  // revalidatePath("/dashboard/invoices");
  // redirect("/dashboard/invoices");
}
