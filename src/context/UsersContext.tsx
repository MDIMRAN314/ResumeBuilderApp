import { createContext, useEffect, useReducer } from "react";
import userReducer, { UsersStateType } from "../reducer/UserReducer";
import axios from "axios";

type UserCreateType = {
  children: React.ReactNode;
};

type UserContextValueType = {
  userData: UsersStateType;
};

export const UsersContextApi = createContext<UserContextValueType | null>(null);

const UsersContextProvider = ({ children }: UserCreateType) => {
  const initialState: UsersStateType = {
    payload: null,
    isLoading: true,
  };
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users");
      dispatch({ type: "FETCHALL", payload: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const contextValue: UserContextValueType = {
    userData: userState,
  };

  return (
    <UsersContextApi.Provider value={contextValue}>
      {children}
    </UsersContextApi.Provider>
  );
};

export default UsersContextProvider;
