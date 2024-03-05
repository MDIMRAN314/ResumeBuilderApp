import React from "react";
import { PayloadProps } from "../types/PayloadType";
import { Navigate } from "react-router-dom";

export interface FoundUserType {
  foundUser: PayloadProps | null | undefined;
}

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
 const foundUser =  window.localStorage.getItem("login")

  if (!foundUser) {
    return <Navigate to="/signin" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
