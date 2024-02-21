import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import Layouts from "./components/Home/Layouts";
import ResumeContainer from "./components/ResumeContainer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/resume",
          element: <ResumeContainer />
        }
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
