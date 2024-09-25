import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Components/Authentication/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
