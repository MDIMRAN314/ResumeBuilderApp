import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import Layouts from "./components/Home/Layouts";
import ResumeContainer from "./components/ResumeContainer";
import PublicRoute from "./helpers/PublicRoute";
import PrivateRoute from "./helpers/PrivateRoute";
import Template_01 from "./pages/template/Template_01";
import Template_03 from "./pages/template/Template_03";
import Template_02 from "./pages/template/Template_02";


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
          path: "/signin",
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
                  <Template_01 />
                </PrivateRoute>
              ),
            },
            {
              path: "/resume/resume_2",
              element: (
                <PrivateRoute>
                  <Template_03 />
                </PrivateRoute>
              ),
            },
            {
              path: "/resume/resume_3",
              element: (
                <PrivateRoute>
                  <Template_02 />
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
