import type { Route } from "./+types/home";
import { Welcome } from "../Components/welcome/welcome";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";

  

export default function Home() {
  return (
        <Box sx={{ height: '100vh', flexGrow: 1, p: 3}}>
          <Welcome />
        </Box>
  );
}