import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/error-page/error";
import Root from "../Components/Root/root";
import Home from "../Components/pages/Home/Home";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const LazyBlogs = React.lazy(() => import("../Components/Pages/Blog/Blogs"));
import Contact from "../Components/Pages/HomeRouteSubmenu/Contact/Contact";
import Service from "../Components/Pages/HomeRouteSubmenu/Service/Service";
import Shop from "../Components/Pages/HomeRouteSubmenu/Shop/Shop";
import About from "../Components/Pages/HomeRouteSubmenu/About/About";
import Accessories from "../Components/Pages/HomeRouteSubmenu/Accessories/Accessories";
import Membership from "../Components/Pages/Membership/Membership";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import MyListing from "../Components/Pages/Dashboard/MyListing/MyListing";
import Favorites from "../Components/Pages/Dashboard/Favorites/Favorites";
import Message from "../Components/Pages/Dashboard/Message/Message";
import StaticDashboard from "../Components/Pages/Dashboard/Static-Dashboard/StaticDashboard";
import Details from "../Components/Pages/Dashboard/AddListing/Details";
import Feature from "../Components/Pages/Dashboard/AddListing/Feature";
import Media from "../Components/Pages/Dashboard/AddListing/Media";
import ListingStep from "../Components/Pages/Dashboard/AddListing/ListingStep";
import CarDetails from "../Components/Shared/CarDetailsPage/CarDetails";
import AddBlog from "../Components/Pages/Dashboard/AddBlog/AddBlog";
import User from "../Components/Pages/Dashboard/User/User";
import UpdateBlog from "../Components/Pages/Blog/UpdateBlog/UpdateBlog";
import BlogDetails from "../Components/Pages/Blog/BlogDetails/BlogDetails";
import Cart from "../Components/Pages/ListingRoutes/Cart/Cart";
import Listings from "../Components/Pages/ListingRoutes/Listings";
import AddProduct from "../Components/Pages/Dashboard/AddProduct/AddProduct";
import AllProduct from "../Components/Pages/Dashboard/AllProduct/AllProduct";
import ProductDetails from "../Components/Shared/ProductDetails/ProductDetails";
import Payment from "../Components/Payment/Payment";
import CartProvider from "../Components/Pages/ListingRoutes/Cart/CartContext/CartProvider";

const LazyAllBlogs = React.lazy(() =>
  import("../Components/Pages/Dashboard/AllBlog/AllBlog")
);
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
        element: <Service></Service>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartProvider>
              <Cart></Cart>
            </CartProvider>
          </PrivateRoute>
        ),
      },
      {
        path: "/listing",
        element: (
          <PrivateRoute>
            <Listings></Listings>
          </PrivateRoute>
        ),
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
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
          <React.Suspense
            fallback={
              <div className="max-w-[1320px] mx-44 mt-44">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            }
          >
            <LazyBlogs />
          </React.Suspense>
        ),
      },
      {
        path: "/blog-details/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlog></UpdateBlog>,
      },
      {
        path: "/car-details/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
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
            element: <ListingStep></ListingStep>,
            children: [
              {
                path: "detail",
                element: <Details></Details>,
              },
              {
                path: "feature",
                element: <Feature></Feature>,
              },
              {
                path: "media",
                element: <Media></Media>,
              },
            ],
          },
          {
            path: "all-blogs",
            element: (
              <React.Suspense
                fallback={
                  <div className="container mx-auto mt-10">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                  </div>
                }
              >
                <LazyAllBlogs />
              </React.Suspense>
            ),
          },
          {
            path: "users",
            element: <User></User>,
          },
          {
            path: "add-blog",
            element: <AddBlog></AddBlog>,
          },
          {
            path: "add-product",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "all-product",
            element: <AllProduct></AllProduct>,
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
