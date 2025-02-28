import { HERO_BANNER } from "@/utils/constants";
import { Box } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        margin: "48px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: { xs: "transparent", xl: "#edf1f3" },
      }}
    >
      <img
        style={{ width: "100%", maxWidth: "1800px" }}
        src={HERO_BANNER}
        alt="banner inclusiva 2025"
      />
    </Box>
  );
};

Hero.displayName = "Hero";
export { Hero };
