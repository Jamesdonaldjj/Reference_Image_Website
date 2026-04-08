import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router";

const drawerWidth = "240px";

const NavPages = [
  { name: "Gallery", path: "/gallery" },
  //{ name: 'Image of the Day', path: '/gallery/image-of-the-day' },
  //{ name: 'Random Image', path: '/gallery/random' },
  { name: "About", path: "/about" },
];

const classes = {
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
  },
};

export default function SideBar() {
  return (
    <Box component="nav" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ flexGrow: 1, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" noWrap component="div">
              Reference Image Gallery (Work in Progress)
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={classes.drawer}>
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {NavPages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <NavLink
                  to={page.path}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
