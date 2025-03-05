import theme from "@/styles/theme";
import { COURSE_CONTENT } from "@/utils/constants";
import { PageBlockProps } from "@/utils/types";
import { CircleRounded } from "@mui/icons-material";
import { Typography, Box, List, ListItem } from "@mui/material";

const CourseContent = ({ id }: PageBlockProps) => {
  return (
    <Box sx={{ margin: "64px 0" }} id={id}>
      <Typography variant="h3" sx={{ marginBottom: "24px" }}>
        Conteúdo Programático
      </Typography>
      <List disablePadding>
        {COURSE_CONTENT.map((content, idx) => {
          return (
            <ListItem key={idx} sx={{ paddingLeft: "0" }}>
              <CircleRounded
                fontSize="small"
                sx={{
                  fontSize: { xs: ".5rem", md: ".85rem" },
                  marginRight: "16px",
                  color: theme.palette.primary.main,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: theme.typography.fontWeightRegular,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                {content}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

CourseContent.displayName = "CourseContent";

export { CourseContent };
