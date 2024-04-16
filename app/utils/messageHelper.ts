import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import strings from "../../public/locales/en.json";

class MessageHelper {
  static firebaseErrorMessageHandling = (errorMessage: any) => {
    if (errorMessage?.code) {
      if (errorMessage.code === "auth/email-already-in-use") {
        toast.error(strings.key_firebase_email_already_exits_message);
      } else if (errorMessage.code === "auth/weak-password") {
        toast.warning(strings.key_firebase_weak_password_message);
      } else if (errorMessage.code === "auth/invalid-credential") {
        toast.error(strings.key_firebase_invalid_credential_message);
      } else if (errorMessage.code === "auth/user-not-found") {
        toast.error(strings.key_firebase_user_not_found_message);
      } else {
        toast.error(errorMessage.message);
      }
    }
  };
}

export default MessageHelper;
