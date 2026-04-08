import { Box } from "@mui/material";
import { use, useEffect } from "react";

export default function About() {

  useEffect(() => {
    document.title = "About - Reference Image Website";
  }, []);
    
  return (
    <Box sx={{ p: 3 }}>
      <h1>About Page</h1>
      <p>This is the about page for the reference image gallery application.</p>
    </Box>
  );
}