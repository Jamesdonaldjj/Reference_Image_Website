import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import createTheme from "node_modules/@mui/material/esm/styles/createTheme";
import type { Route } from "./+types/root";
import "./app.css";
import { Box, ThemeProvider } from "@mui/material";
import SideBar from "./Components/NavSideBar/SideBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reference Gallery App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


export default function  Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ThemeProvider theme={darkTheme}>
        <SideBar />
        <main style={{ marginTop: 64, marginLeft: 240, flexGrow: 1 }}>
          <Outlet />
        </main>
      </ThemeProvider>
    </Box>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
