import GalleryComponent from "../Components/GalleryComponent";
import { Box, Typography } from "@mui/material";

export default function Gallery() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ width: '100%', mt: 4 , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" component="h2" className="text-center">
          Gallery Page
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
          "Welcome to the Gallery!"
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, width: '100%' }}>
          <GalleryComponent />
        </Box>
      </Box>
    </Box>
  )
}