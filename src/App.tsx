import UserContextProvider from "./context/AuthContext.tsx";
import UsersContextProvider from "./context/UsersContext.tsx";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import Routes from "./Routes";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <UsersContextProvider>
          <Routes />
        </UsersContextProvider>
      </UserContextProvider>
    </Provider>
  );
};

export default App;
