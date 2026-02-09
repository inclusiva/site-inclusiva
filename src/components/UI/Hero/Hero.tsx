import { HERO_BANNER, SUBSCRIPTION_FORM_URL } from "@/utils/constants";
import { Box } from "@mui/material";
import { Link } from "@mui/material"; 

const Hero = () => {
  return (
    <Link
      href={SUBSCRIPTION_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        sx={{
          margin: "48px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          background: "linear-gradient(to right, #f21486, #fcd88a)",
          position: "relative",
          cursor: "pointer",
          textDecoration: "none",
          "&:focus": {
            outline: "none",
          },
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
    </Link>
  );
};

Hero.displayName = "Hero";
export { Hero };
