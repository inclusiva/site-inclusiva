import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "@/styles/theme.ts";
import { ThemeProvider } from "@emotion/react";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Create a new router instance
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
