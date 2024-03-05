import { useContext } from "react";
import { UserContextApi } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
const PublicRoute = ({ children }: Props) => {
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;

  if (foundUser) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoute;
