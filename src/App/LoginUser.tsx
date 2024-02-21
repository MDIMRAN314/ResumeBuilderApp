// Your login component or action
import { useDispatch } from "react-redux";
import { loginUser } from "../path-to-userSlice";

const YourLoginComponent = () => {
  const dispatch = useDispatch();

  const handleLogin = async (credentials) => {
    try {
      await dispatch(loginUser(credentials));
      // Navigate to the next page or perform other actions upon successful login
    } catch (error) {
      // Handle login failure
    }
  };

  // Render your login form
};
