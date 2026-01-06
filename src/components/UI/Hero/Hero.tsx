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
        background: "linear-gradient(to right, #f21486, #fcd88a)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1800px",
        }}
      >
        <Box
          component="img"
          src={HERO_BANNER}
          alt="banner inclusiva 2026"
          sx={{
            width: "100%",
            display: "block",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        />
      </Box>
    </Box>
  );
};

Hero.displayName = "Hero";
export { Hero };
