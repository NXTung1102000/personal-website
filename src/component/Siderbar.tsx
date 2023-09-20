import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FilterIcon from "@mui/icons-material/Filter";
import SubjectIcon from "@mui/icons-material/Subject";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Box from "@mui/material/Box";

import { Menu, ResponsiveMenu } from "./Menu";
import ItemSider from "../common/ItemSider";
import avatar from "../assets/avt_chibi_resize.png";
import Footer from "./Footer";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  //   navigate: (route?: string) => void;
}

export default function LeftBav(props: IProps) {
  const theme = useTheme();

  return (
    <Box>
      <Menu variant="permanent" open={props.open}>
        <ResponsiveMenu color="inherit">
          <IconButton onClick={() => props.setOpen(false)}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </ResponsiveMenu>
        {props.open && (
          <>
            <Grid
              container
              sx={{ transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms", margin: "0 0 .5rem 0" }}>
              <Grid item xs={3} sm={2} md={1} lg={0} />
              <Grid item xs={6} sm={8} md={10} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar src={avatar} alt="NXTung" sx={{ width: "70%", height: "auto" }} />
              </Grid>
              <Grid item xs={3} sm={2} md={1} lg={0} />
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", margin: ".5rem 0 0 0" }} color={"rgb(113, 113, 113)"}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "800" }}>
                NXTung
              </Typography>
              <Typography variant="h6" component="div" sx={{ margin: "0 0 0 .5rem" }}>
                (Cedrus)
              </Typography>
            </Box>
            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ margin: "0 0 1rem 0" }}>
              Hi, I'm Nguyen Xuan Tung
            </Typography>
          </>
        )}

        <Divider />
        <List>
          <ItemSider text="Home" end icon={<HomeIcon />} to={"/"} open={props.open} setOpen={props.setOpen} />
          <ItemSider text="Blog" icon={<SubjectIcon />} to={"/blog"} open={props.open} setOpen={props.setOpen} />
          <ItemSider text="Resume" icon={<BookmarksIcon />} to={"/resume"} open={props.open} setOpen={props.setOpen} />
          <ItemSider text="Stat" icon={<FilterIcon />} to={"/stat"} open={props.open} setOpen={props.setOpen} />
          <ItemSider text="About" icon={<InfoIcon />} to={"/about"} open={props.open} setOpen={props.setOpen} />
        </List>
        <Footer open={props.open} />
      </Menu>
    </Box>
  );
}
