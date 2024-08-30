import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
