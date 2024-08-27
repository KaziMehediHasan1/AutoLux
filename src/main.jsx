import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
