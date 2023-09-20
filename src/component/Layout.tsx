import React from "react";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

import { HeaderApp, Search, SearchIconWrapper, StyledInputBase } from "./Header";
import { ResponsiveMenu } from "./Menu";
import LeftBav from "./Siderbar";
interface Props {
  children?: JSX.Element;
}

export default function Layout(props: Props) {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <HeaderApp position="fixed" open={open}>
          <Toolbar>
            <Box sx={{ width: "100%", display: "flex" }}>
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpen(true)}
                  edge="start"
                  sx={{ marginRight: 5, ...(open && { display: "none" }) }}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ cursor: "pointer" }}>
                  {"NXTung"}
                </Typography>
              </Box>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Toolbar>
        </HeaderApp>
        <LeftBav open={open} setOpen={setOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ResponsiveMenu />
          {props.children}
        </Box>
      </Box>
    </>
  );
}
