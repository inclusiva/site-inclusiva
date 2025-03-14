import { HERO_BANNER } from "@/utils/constants";
import { Box, Link } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        margin: "48px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: { xs: "transparent", xl: "#fde5cb" },
      }}
    >
      <Link href="https://forms.gle/kG4hJcYk9wU46gL27" target="_blank">
        <img
          style={{ width: "100%", maxWidth: "1800px" }}
          src={HERO_BANNER}
          alt="banner inclusiva 2025"
        />
      </Link>
    </Box>
  );
};

Hero.displayName = "Hero";
export { Hero };
