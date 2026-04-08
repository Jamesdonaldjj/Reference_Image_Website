import { Welcome } from "../Components/welcome/welcome";
import { Box, CssBaseline } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Reference Image Website";
  }, []);

  return (
    <Box sx={{ height: "100vh", flexGrow: 1, p: 3 }}>
      <Welcome />
    </Box>
  );
}
