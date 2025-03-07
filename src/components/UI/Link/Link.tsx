import * as React from "react";

import {
  Link,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  styled,
} from "@mui/material";

import {
  Link as TanStackLink,
  LinkOptions as TanStackLinkProps,
} from "@tanstack/react-router";
import { Typography } from "@mui/material";
import theme from "@/styles/theme";

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

const navigationLinkStyles: React.CSSProperties = {
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,
  textDecoration: "none",
};

const NavigationLink = React.forwardRef<
  React.ComponentRef<typeof TanStackLink>,
  CustomTanstackLinkProps
>(({ label, to }, ref) => (
  <TanStackLink to={to} ref={ref} style={navigationLinkStyles}>
    <Typography>{label}</Typography>
  </TanStackLink>
));

NavigationLink.displayName = "NavigationLink";

const RedirectToCourseNotice = () => {
  return (
    <Typography
      sx={{
        fontSize: "1.25rem",
        textAlign: "center",
        fontWeight: theme.typography.fontWeightMedium,
      }}
    >
      Leia atentamente o{" "}
      <Link
        href="https://docs.google.com/document/d/1K5VupmxmRpYT0Im6LJ_yFJcDgzBOYPxyD3aF8Dmbfpo/edit?usp=drive_link"
        target="_blank"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: theme.typography.fontWeightBold,
          textDecoration: "none",
        }}
      >
        edital{" "}
      </Link>
      antes de efetuar sua{" "}
      <Link
        href="#"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: theme.typography.fontWeightBold,
          textDecoration: "none",
        }}
      >
        inscrição
      </Link>
    </Typography>
  );
};

RedirectToCourseNotice.displayName = "RedirectToCourseNotice";

export { BreadcrumbLink, NavigationLink, RedirectToCourseNotice };
