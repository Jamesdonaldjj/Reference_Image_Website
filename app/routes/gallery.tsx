import { useEffect } from "react";
import GalleryComponent from "../Components/GalleryComponent";
import { Box, Typography } from "@mui/material";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery - Reference Image Website";
  }, []);

  return (
    <Box
      sx={{
        p: 3,
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#094179",
          padding: 1,
          borderRadius: 1,
          mb: 2
        }}
      >
        <Typography variant="h3" component="h2" sx={{ textAlign: "center" }}>
          "Welcome to the Gallery!"
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            width: "100%",
          }}
        >
          <GalleryComponent />
        </Box>
      </Box>
    </Box>
  );
}
