import "./index.scss";
import UserContextProvider from "./context/AuthContext.tsx";
import UsersContextProvider from "./context/UsersContext.tsx";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import Routes from "./Routes.tsx";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <UserContextProvider>
          <UsersContextProvider>
            <Routes />
          </UsersContextProvider>
        </UserContextProvider>
      </Provider>
    </div>
  );
};

export default App;
