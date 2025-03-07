import * as React from "react";
import { ExpandMoreOutlined as ExpandMoreIcon } from "@mui/icons-material";
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
  styled,
} from "@mui/material";
import theme from "@/styles/theme";
import { markdownToHTMLParser } from "@/lib/utils";

// interface VariantMuiAccordionProps extends MuiAccordionProps {
//   variantColor?: string;
//   accordionTitle: string;
//   accordionId: string;
//   children: NonNullable<React.ReactNode>;
// }
interface VariantMuiAccordionProps extends Omit<MuiAccordionProps, "children"> {
  variantColor?: string;
  accordionTitle: string;
  accordionContent: string;
  accordionId: string;
  children?: React.ReactNode | string | null;
}
const StyledMuiAccordion = styled(MuiAccordion)<MuiAccordionProps>(
  ({ theme }) => ({
    "button.MuiAccordionSummary-root": {
      background: theme.palette.background.default,
      padding: "8px",
    },
  })
);

const Accordion = ({
  accordionId,
  accordionTitle,
  accordionContent,
  ...props
}: VariantMuiAccordionProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <StyledMuiAccordion
        expanded={expanded === `${accordionId}-header`}
        onChange={handleChange(`${accordionId}-header`)}
        {...props}
      >
        <MuiAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${accordionId}-content`}
          id={`${accordionId}-header`}
        >
          <Typography
            component="span"
            sx={{
              width: "100%",
              fontWeight: theme.typography.fontWeightBold,
              flexShrink: 0,
              padding: "0 0.5rem",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            {accordionTitle}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails
          sx={{
            padding: "1rem",
            fontSize: { xs: "1rem", md: "1.25rem" },
            textAlign: "justify",
          }}
        >
          <div
            dangerouslySetInnerHTML={markdownToHTMLParser(accordionContent)}
          />
        </MuiAccordionDetails>
      </StyledMuiAccordion>
    </>
  );
};

Accordion.displayName = "Accordion";
export { Accordion };
