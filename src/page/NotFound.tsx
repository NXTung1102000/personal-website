import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}>
      <Typography variant="h1" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
    </Box>
  );
};

export default NotFound;
