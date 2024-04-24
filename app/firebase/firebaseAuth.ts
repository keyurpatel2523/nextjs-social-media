import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./config";

export const auth = getAuth(app);

// Function to check if a user is logged in
export const checkUserLoggedIn = (callback: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is logged in
      callback(true);
    } else {
      // User is not logged in
      callback(false);
    }
  });
};

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    return auth.currentUser;
  } catch (error) {
    throw error;
  }
};

export const useAuthListener = (callback: any) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });

  return unsubscribe; // Return the unsubscribe function
};
