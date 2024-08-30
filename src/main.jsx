import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Components/Authentication/AuthProvider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
