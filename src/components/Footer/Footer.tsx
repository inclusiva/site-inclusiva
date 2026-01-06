import { InstagramIcon } from "@/components/UI/Icons";
import { LinkedinIcon } from "@/components/UI/Icons/LinkedinIcon";
import theme from "@/styles/theme";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        padding: "1rem",
      }}
    >
      <Box>
        <Link
          href="https://www.instagram.com/aceleradorainclusiva/"
          target="_blank"
        >
          <InstagramIcon
            sx={{ color: theme.palette.grey[100], marginRight: "1rem" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/school/aceleradora-inclusiva/"
          target="_blank"
        >
          <LinkedinIcon sx={{ color: theme.palette.grey[100] }} />
        </Link>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: theme.palette.grey[100] }}>
          Aceleradora Inclusiva ® {new Date().getFullYear()} - Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

Footer.displayName = "Footer";

export { Footer };
