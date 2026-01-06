import { Timeline } from "@/components/UI/Timeline/Timeline";
import { PageBlockProps } from "@/utils/types";
import { Box, Typography } from "@mui/material";

const CourseCronogram = ({ id }: PageBlockProps) => {
  return (
    <Box sx={{ margin: "64px 0" }} id={id}>
      <Typography variant="h3" sx={{ marginBottom: "24px" }}>
        Cronograma {new Date().getFullYear()}*
      </Typography>
      <Timeline />
      <Typography variant="caption" sx={{ margin: "2rem 0" }}>
        * As datas poderão sofrer alterações em função do número de pessoas
        inscritas.
      </Typography>
    </Box>
  );
};

export default CourseCronogram;
