import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/error-page/error";
import Root from "../Components/Root/root";
import Home from "../Components/pages/Home/Home";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import Profile from "../Components/Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blogs from "../Components/Pages/Blog/Blogs";
import Contact from "../Components/Pages/HomeRouteSubmenu/Contact/Contact";
import Service from "../Components/Pages/HomeRouteSubmenu/Service/Service";
import Shop from "../Components/Pages/HomeRouteSubmenu/Shop/Shop";
import About from "../Components/Pages/HomeRouteSubmenu/About/About";
import Accessories from "../Components/Pages/HomeRouteSubmenu/Accessories/Accessories";
import UserDashboard from "../Components/Pages/UserDashboardPages/UserDashboard";
import Membership from "../Components/Pages/Membership/Membership";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/accessories",
        element: <Accessories></Accessories>,
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
