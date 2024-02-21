// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserContextProvider from "./context/AuthContext.tsx";
import UsersContextProvider from "./context/UsersContext.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./App/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <UserContextProvider>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </UserContextProvider>
  </Provider>
);
