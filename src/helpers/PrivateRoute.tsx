import React, { useContext } from "react";
import { PayloadProps } from "../types/PayloadType";
import { UserContextApi } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export interface FoundUserType {
  foundUser: PayloadProps | null | undefined;
}

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;

  if (!foundUser) {
    return <Navigate to="/signin" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
