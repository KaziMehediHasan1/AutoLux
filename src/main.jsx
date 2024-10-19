import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";
import React from "react";
import "@radix-ui/themes/styles.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Components/Authentication/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
import "@radix-ui/themes/styles.css";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <Theme>
            <RouterProvider router={router} />
          </Theme>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
