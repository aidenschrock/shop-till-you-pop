import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ResponsiveDialog from "./rulesDialog";
import Timer from "./timer";
import { useRouter } from "next/router";
import ComboBox from "./search";

const settings = ["Profile", "Logout"];

function AppHeader(props) {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isGameStarted, setIsGameStarted] = useState();
  const [isGamePaused, setIsGamePaused] = useState();

  const updateGameStarted = (data) => {
    setIsGameStarted(data);
    props.gameStatus(data);
  };

  const updateGamePaused = (data) => {
    setIsGamePaused(data);
    props.gamePaused(data);
  };

  const navigate = (category) => {
    router.push(`/main?category=${category}`);
  };
  return (
    <AppBar sx={{ bgcolor: "#1f1f1f" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              size="large"
              color="inherit"
              aria-label="Toggle menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  router.push("/main");
                }}
              >
                <Typography textAlign="center">All</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("meat");
                }}
              >
                <Typography textAlign="center">Meat</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("produce");
                }}
              >
                <Typography textAlign="center">Produce</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("dairy");
                }}
              >
                <Typography textAlign="center">Dairy</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                router.push("/main");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              All
            </Button>
            <Button
              onClick={() => {
                navigate("meat");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Meat
            </Button>
            <Button
              onClick={() => {
                navigate("produce");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Produce
            </Button>
            <Button
              onClick={() => {
                navigate("dairy");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Dairy
            </Button>
          </Box>

          {/* <ComboBox /> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              justifyContent: "right",
              width: { xs: "100%" },
            }}
          >
            <Button
              onClick={() => router.push("/cart")}
              sx={{ color: "white", margin: "1%" }}
              startIcon={<ShoppingCartIcon />}
            >
              Cart
            </Button>
            {!isGameStarted ? (
              <ResponsiveDialog gameStatus={updateGameStarted} />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",

                  justifyContent: "right",
                }}
              >
                <Typography
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    width: { sm: "6em" },
                  }}
                  variant="subtitle2"
                  noWrap={true}
                >
                  Limit: $100
                </Typography>

                <Timer gameStatus={updateGamePaused} />
              </div>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;
