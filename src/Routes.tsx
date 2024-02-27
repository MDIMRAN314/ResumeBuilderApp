import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import Layouts from "./components/Home/Layouts";
import ResumeContainer from "./components/ResumeContainer";
import PublicRoute from "./helpers/PublicRoute";
import PrivateRoute from "./helpers/PrivateRoute";
import Templete_01 from "./pages/templete/Templete_01";
import Templete_02 from "./pages/templete/Templete_02";
import Templete_03 from "./pages/templete/Templete_03";

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
              <Signin />
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
              <ResumeContainer />
            </PrivateRoute>
          ),
          children: [
            {
              path: "/resume/resume",
              element: (
                <PrivateRoute>
                  <ResumeContainer />
                </PrivateRoute>
              ),
            },
            {
              path: "/resume/resume_1",
              element: (
                <PrivateRoute>
                  <Templete_01 />
                </PrivateRoute>
              ),
            },
            {
              path: "/resume/resume_2",
              element: (
                <PrivateRoute>
                  <Templete_03 />
                </PrivateRoute>
              ),
            },
            {
              path: "/resume/resume_3",
              element: (
                <PrivateRoute>
                  <Templete_02 />
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
