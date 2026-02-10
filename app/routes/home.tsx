import type { Route } from "./+types/home";
import { Welcome } from "../Components/welcome/welcome";
import Sidebar from "../Components/NavSideBar/SideBar";
import createTheme from "node_modules/@mui/material/esm/styles/createTheme";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";

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
  

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={ { display: 'flex' } }>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Welcome />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
