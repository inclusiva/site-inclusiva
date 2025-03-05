import theme from "@/styles/theme";
import { Box } from "@mui/material";
import { LoaderIcon } from "lucide-react";

export const Loader = () => (
  <Box
    sx={{
      "@keyframes loading": {
        "0%": { rotate: "0deg" },
        "100%": {
          rotate: "360deg",
        },
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      background: theme.palette.background.paper,
      opacity: 1,
      width: "100vw",
      height: "100vh",
      "> svg": {
        width: "64px",
        height: "64px",
        animation: "loading 1.5s ease-in-out infinite",
        color: theme.palette.primary.main,
      },
    }}
  >
    <LoaderIcon />
  </Box>
);
