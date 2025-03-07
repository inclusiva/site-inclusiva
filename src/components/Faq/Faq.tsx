import { Accordion } from "@/components/UI/Accordion/Accordion";
import { FAQ_ACCORDIONS } from "@/utils/constants";
import { PageBlockProps } from "@/utils/types";
import { Box, Typography } from "@mui/material";

const Faq = ({ id }: PageBlockProps) => {
  return (
    <Box sx={{ margin: "64px 0" }} id={id}>
      <Typography variant="h3" sx={{ marginBottom: "24px" }}>
        FAQ
      </Typography>
      {FAQ_ACCORDIONS.map((accordion) => {
        return (
          <Accordion
            key={accordion.id}
            accordionId={accordion.id}
            accordionTitle={accordion.question}
            accordionContent={accordion.answer}
          />
        );
      })}
    </Box>
  );
};

export default Faq;
