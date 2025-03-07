import theme from "@/styles/theme";
import { PageBlockProps } from "@/utils/types";
import { Box, Link, Typography } from "@mui/material";

const Contact = ({ id }: PageBlockProps) => {
  return (
    <Box
      sx={{
        marginBottom: "64px",
        textAlign: "center",
      }}
      id={id}
    >
      <Typography
        variant="caption"
        sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
      >
        Caso tenha mais dúvidas, entre em contato:
      </Typography>
      <Link
        href="mailto:inclusiva.aceleradora@gmail.com"
        sx={{
          fontSize: { xs: "1rem", md: "1.25rem" },
          fontWeight: theme.typography.fontWeightMedium,
          marginLeft: "8px",
        }}
      >
        inclusiva.aceleradora@gmail.com
      </Link>
    </Box>
  );
};

Contact.displayName = "Contact";

export { Contact };
