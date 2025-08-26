import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Container,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [cartCount, setCartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: { xs: "100vw", sm: 280 } }}>
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          textAlign: "center",
          borderBottom: "1px solid",
          borderColor: "grey.200",
        }}
      >
        <StoreIcon
          sx={{
            fontSize: { xs: 40, sm: 48 },
            color: "primary.main",
            mb: { xs: 1, sm: 2 },
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "text.primary",
            fontWeight: 700,
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          SHIS Shop
        </Typography>
      </Box>
      <List sx={{ pt: 2 }}>
        <ListItem
          button
          onClick={() => handleNavigation("/")}
          sx={{
            py: { xs: 1.5, sm: 2 },
            "&:hover": { backgroundColor: "primary.50" },
          }}
        >
          <ListItemText
            primary="Home"
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.1rem" },
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation("/products")}
          sx={{
            py: { xs: 1.5, sm: 2 },
            "&:hover": { backgroundColor: "primary.50" },
          }}
        >
          <ListItemText
            primary="Products"
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.1rem" },
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation("/cart")}
          sx={{
            py: { xs: 1.5, sm: 2 },
            "&:hover": { backgroundColor: "primary.50" },
          }}
        >
          <ListItemText
            primary="Cart"
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.1rem" },
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid",
          borderColor: "grey.200",
          backdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 0.5, sm: 1 },
              minHeight: { xs: 56, sm: 64 },
            }}
          >
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: { xs: 1, sm: 2 },
                  color: "text.primary",
                  backgroundColor: "grey.100",
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  "&:hover": {
                    backgroundColor: "grey.200",
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
            )}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                flexGrow: isMobile ? 0 : 1,
              }}
              onClick={() => handleNavigation("/")}
            >
              <StoreIcon
                sx={{
                  mr: { xs: 1, sm: 1.5 },
                  color: "primary.main",
                  fontSize: { xs: 24, sm: 28, md: 32 },
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                SHIS Shop
              </Typography>
            </Box>

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  gap: { md: 1, lg: 2 },
                  ml: { md: 4, lg: 6 },
                }}
              >
                <Button
                  color="inherit"
                  onClick={() => handleNavigation("/")}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    px: { md: 2, lg: 3 },
                    py: 1,
                    borderRadius: 2,
                    fontSize: { md: "0.875rem", lg: "1rem" },
                    "&:hover": {
                      backgroundColor: "primary.50",
                      color: "primary.main",
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleNavigation("/products")}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    px: { md: 2, lg: 3 },
                    py: 1,
                    borderRadius: 2,
                    fontSize: { md: "0.875rem", lg: "1rem" },
                    "&:hover": {
                      backgroundColor: "primary.50",
                      color: "primary.main",
                    },
                  }}
                >
                  Products
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleNavigation("/signup")}
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    px: { md: 2, lg: 3 },
                    py: 1,
                    borderRadius: 2,
                    fontSize: { md: "0.875rem", lg: "1rem" },
                    backgroundColor: "primary.50",
                    "&:hover": {
                      backgroundColor: "primary.100",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            )}

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              color="primary"
              onClick={() => handleNavigation("/cart")}
              sx={{
                ml: 1,
                backgroundColor: "primary.50",
                width: { xs: 40, sm: 44, md: 48 },
                height: { xs: 40, sm: 44, md: 48 },
                "&:hover": {
                  backgroundColor: "primary.100",
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Badge
                badgeContent={cartCount}
                color="secondary"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "secondary.main",
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    minWidth: { xs: 18, sm: 20 },
                    height: { xs: 18, sm: 20 },
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    fontSize: { xs: 20, sm: 22, md: 24 },
                  }}
                />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "100vw", sm: 280 },
            border: "none",
            boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
