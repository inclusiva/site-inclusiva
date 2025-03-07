import * as React from "react";
import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  styled,
} from "@mui/material";

interface VariantBreadcrumbsProps extends MuiBreadcrumbsProps {
  variantColor?: string;
}

const StyledMuiBreadcrumbs = styled(MuiBreadcrumbs)<VariantBreadcrumbsProps>(
  ({ theme }) => ({
    margin: "48px 0",
    fontSize: theme.typography.h4.fontSize,
    "& .MuiBreadcrumbs-separator": {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&.MuiBreadcrumbs-ol": {
      padding: theme.spacing(1),
    },
  })
);

const Breadcrumbs = React.forwardRef<
  React.ComponentRef<typeof MuiBreadcrumbs>,
  MuiBreadcrumbsProps
>(({ children, ...props }, ref) => (
  <StyledMuiBreadcrumbs
    aria-label="breadcrumb"
    ref={ref}
    separator="/"
    {...props}
  >
    {children}
  </StyledMuiBreadcrumbs>
));

Breadcrumbs.displayName = "Breadcrumbs";

export { Breadcrumbs };
