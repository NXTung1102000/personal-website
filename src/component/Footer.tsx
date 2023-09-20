import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

interface IProps {
  open: boolean;
}

export default function Footer(props: IProps) {
  return (
    <Box component="footer">
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          margin: "0 0 1rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Box
          sx={{
            ...(!props.open && {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }),
          }}>
          <Link target="_blank" href="https://www.facebook.com/nxtung1102000" color="rgba(0, 0, 0, 0.54)">
            <Facebook />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/n.x.tung"
            color="rgba(0, 0, 0, 0.54)"
            sx={{ pl: 1, pr: 1 }}>
            <Instagram />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/nxtung1102000" color="rgba(0, 0, 0, 0.54)">
            <LinkedIn />
          </Link>
        </Box>
        {props.open && (
          <Box mt={1}>
            <Typography variant="subtitle2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="/">
                NXTung
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
