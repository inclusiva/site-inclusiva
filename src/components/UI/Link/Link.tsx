import * as React from "react";

import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  styled,
} from "@mui/material";

import {
  Link as TanStackLink,
  LinkOptions as TanStackLinkProps,
} from "@tanstack/react-router";
import { Typography } from "@mui/material";

interface CustomTanstackLinkProps extends TanStackLinkProps {
  label: string;
}

interface VariantMuiLinkProps extends MuiLinkProps {
  variantColor?: "primary" | "breadcrumbs";
}

const StyledMuiLink = styled(MuiLink)<VariantMuiLinkProps>(
  ({ theme, variantColor }) => ({
    ...(variantColor === "primary" && {
      color: theme.palette.primary.main,
    }),
    ...(variantColor === "breadcrumbs" && {
      fontSize: theme.typography.h4.fontSize,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main,
        textDecoration: "underline",
      },
    }),
  })
);

const BreadcrumbLink = React.forwardRef<
  React.ComponentRef<typeof MuiLink>,
  VariantMuiLinkProps
>(({ variantColor = "primary", children, ...props }, ref) => (
  <StyledMuiLink
    aria-label="breadcrumb"
    variantColor={variantColor}
    ref={ref}
    {...props}
  >
    {children}
  </StyledMuiLink>
));

BreadcrumbLink.displayName = "BreadcrumbLink";

const NavigationLink = React.forwardRef<
  React.ComponentRef<typeof TanStackLink>,
  CustomTanstackLinkProps
>(({ label, to }) => (
  <TanStackLink to={to}>
    <Typography>{label}</Typography>
  </TanStackLink>
));

NavigationLink.displayName = "NavigationLink";

export { BreadcrumbLink, NavigationLink };
