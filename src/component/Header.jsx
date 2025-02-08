import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import ArrowDropDownCircleTwoToneIcon from "@mui/icons-material/ArrowDropDownCircleTwoTone";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: "black", py: 1 }}>
        <Toolbar
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          {/* Logo */}
          <Box component="img"
            src="/header/whale-logo 1.png"
            alt="logo"
            sx={{ width: { xs: 100, md: 160 }, height: "auto" }}
          />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button color="inherit">First Link</Button>
            <Button color="inherit">Second Link</Button>
            <Button color="inherit">Third Link</Button>
            <Button color="inherit">Fourth Link</Button>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button variant="contained" color="primary" sx={{ borderRadius: "100px" }}>
              <ManageSearchRoundedIcon />
            </Button>
            <Button variant="contained" color="primary" sx={{ borderRadius: "100px" }}>
              Eng <ArrowDropDownCircleTwoToneIcon />
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { md: "none" }, color: "white" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250, height: "100vh", backgroundColor: "blue", color: "white" }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {["First Link", "Second Link", "Third Link", "Fourth Link"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} sx={{ textAlign: "center" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
