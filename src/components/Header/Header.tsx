import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  CssBaseline,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  styled,
  Button,
} from "@mui/material";
import {
  INCLUSIVA_LOGO,
  HEADER_NAVIGATION_ITEMS,
  MENU_DRAWER_WIDTH,
  PARTNERS_ASSETS,
} from "@/utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  "&.MuiPaper-root": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Header = React.forwardRef<
  React.ComponentRef<typeof MuiAppBar>,
  MuiAppBarProps
>(({ ...props }, ref) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer: React.ReactElement = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={INCLUSIVA_LOGO}
        alt="Inclusiva Logo"
        style={{ margin: "16px 0", width: "120px" }}
      />
      <Divider />
      <List>
        {HEADER_NAVIGATION_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} sx={{ color: "#e60c5c" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" sx={{ my: 2 }}>
        Parceiros
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {PARTNERS_ASSETS.map((partner) => {
          return (
            <ListItem key={partner.name} sx={{ my: 4 }} disablePadding>
              <img
                src={partner.asset.path}
                alt={`${partner.name} logo`}
                style={{ width: "96px", margin: "0 auto" }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <StyledMuiAppBar
        aria-label="App Bar"
        component="nav"
        sx={{ position: "initial" }}
        ref={ref}
        {...props}
      >
        <CssBaseline />
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <List sx={{ display: "flex" }}>
              <ListItem sx={{ padding: { xs: "8px", xl: "8px 48px" } }}>
                <img
                  src={INCLUSIVA_LOGO}
                  alt="Inclusiva Logo"
                  style={{ width: "120px" }}
                />
              </ListItem>
              {PARTNERS_ASSETS.map((partner) => {
                return (
                  <ListItem
                    key={partner.name}
                    sx={{
                      padding: "8px 48px",
                      display: { xs: "none", xl: "flex" },
                    }}
                  >
                    <img
                      src={partner.asset.path}
                      alt={`${partner.name} logo`}
                      style={{ width: "120px" }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box sx={{ display: { xs: "none", xl: "flex" } }}>
            {HEADER_NAVIGATION_ITEMS.map((item) => (
              <Button key={item} sx={{ color: "#e60c5c" }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            sx={{
              color: "#e60c5c",
              display: { xs: "flex", xl: "none" },
            }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledMuiAppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: MENU_DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
});
