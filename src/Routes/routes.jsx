import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/error-page/error";
import Root from "../Components/Root/root";
import Home from "../Components/pages/Home/Home";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import Profile from "../Components/Pages/Dashboard/Dash_Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blogs from "../Components/Pages/Blog/Blogs";
import Contact from "../Components/Pages/HomeRouteSubmenu/Contact/Contact";
import Service from "../Components/Pages/HomeRouteSubmenu/Service/Service";
import Shop from "../Components/Pages/HomeRouteSubmenu/Shop/Shop";
import About from "../Components/Pages/HomeRouteSubmenu/About/About";
import Accessories from "../Components/Pages/HomeRouteSubmenu/Accessories/Accessories";
import Membership from "../Components/Pages/Membership/Membership";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import AddListing from "../Components/Pages/Dashboard/AddListing/AddListing";
import MyListing from "../Components/Pages/Dashboard/MyListing/MyListing";
import Favorites from "../Components/Pages/Dashboard/Favorites/Favorites";
import Message from "../Components/Pages/Dashboard/Message/Message";
import StaticDashboard from "../Components/Pages/Dashboard/Static-Dashboard/StaticDashboard";
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
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "add-listing",
            element: <AddListing></AddListing>,
          },
          {
            path: "my-listing",
            element: <MyListing></MyListing>,
          },
          {
            path: "my-favorites",
            element: <Favorites></Favorites>,
          },
          {
            path: "message",
            element: <Message></Message>,
          },
          {
            path: "static-dashboard",
            element: <StaticDashboard> </StaticDashboard>,
          },
          {
            path: "profile",
            element: (
              <PrivateRoute>
                <Profile></Profile>
              </PrivateRoute>
            ),
          },
        ],
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
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
