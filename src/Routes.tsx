import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import Layouts from "./components/Home/Layouts";
import ResumeContainer from "./components/ResumeContainer";
import PublicRoute from "./helpers/Public";
import PrivateRoute from "./helpers/Private";
import Template1 from "./pages/templates/Template1";
import Template2 from "./pages/templates/Template2";

const Routes = () => {
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
          element: (
            <PublicRoute>
              <Signin />,
            </PublicRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <PublicRoute>
              <Signup />
            </PublicRoute>
          ),
        },
        {
          path: "/resume",
          element: (
            <PrivateRoute>
              <ResumeContainer />,
            </PrivateRoute>
          ),
          children: [
            {
              path: "/resume/resume_1",
              element: (
                <PrivateRoute>
                  <Template1 />
                </PrivateRoute>
              ),
            },
            {
              path: "/resume/resume_2",
              element: (
                <PrivateRoute>
                  <Template2 />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
