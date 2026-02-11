import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

export function Welcome() {

  return (
      <Box sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ width: '100%', mt: 4 , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2" component="h2" className="text-center">
              Welcome to the Reference Image Gallery!
            </Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5" component="h2" className="text-center">
              This is a work in progress, but feel free to explore and check back for updates!
            </Typography>
            <Button sx={{ mt: 4 }} variant="contained" color="primary">
              Explore Gallery
            </Button>
          </Box>
      </Box>
  );
}