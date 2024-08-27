import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/error-page/error";
import Root from "../Components/Root/root";
import Home from "../Components/pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);
