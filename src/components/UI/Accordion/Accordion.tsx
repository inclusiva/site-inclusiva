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

interface VariantMuiAccordionProps extends MuiAccordionProps {
  variantColor?: string;
  accordionTitle: string;
  accordionId: string;
}

const StyledMuiAccordion = styled(MuiAccordion)<MuiAccordionProps>(
  ({ theme }) => ({})
);

const Accordion = ({
  accordionId,
  accordionTitle,
  children,
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
        expanded={expanded === accordionId}
        onChange={handleChange(accordionId)}
        {...props}
      >
        <MuiAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${accordionId}bh-content`}
          id={`${accordionId}bh-header`}
        >
          <Typography
            component="span"
            sx={{ width: "100%", flexShrink: 0, padding: "0 0.5rem" }}
          >
            {accordionTitle}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={{ padding: "1rem" }}>
          <Typography>{children}</Typography>
        </MuiAccordionDetails>
      </StyledMuiAccordion>
    </>
  );
};

Accordion.displayName = "Accordion";
export { Accordion };
