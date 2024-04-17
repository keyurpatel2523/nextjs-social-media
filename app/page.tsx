import ProtectedRoute from "@/protectedRoute";
import LoginIn from "./(user)/login/page";

const Home = () => {
  return (
    <ProtectedRoute>
      <LoginIn />
    </ProtectedRoute>
  );
};

export default Home;
