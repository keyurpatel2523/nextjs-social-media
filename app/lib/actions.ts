"use server";

import { sql } from "@vercel/postgres";
import MessageHelper from "../utils/messageHelper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";
const bcrypt = require("bcrypt");
import { unstable_noStore as noStore } from "next/cache";
import { SocialPostTable } from "./definitions";
import { formatDateToLocal } from "./utils";

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

export async function fetchAllPost() {
  noStore();
  try {
    const data = await sql<SocialPostTable>`
      SELECT
      id,
        user_id,
        content_type,
        content_url,
        text_content,
        created_at
      FROM social_posts
      ORDER BY created_at DESC
    `;

    const allPosts = data.rows.map((post) => ({
      ...post,
      created_at: formatDateToLocal(post.created_at),
    }));
    return allPosts;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all post.");
  }
}

export async function addPost(post: any) {
  try {
    await sql`
      INSERT INTO social_posts (user_id, content_type, content_url, text_content)
          VALUES (${post.user_id}, ${post.content_type}, ${post.content_url}, ${post.text_content});
        `;
    return true;
  } catch (error) {
    console.log("Error", error);
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  // revalidatePath("/dashboard/invoices");
  // redirect("/dashboard/invoices");
}
