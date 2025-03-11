import { Header } from "@/components/Header/Header";
import { Box, Grid2 as Grid } from "@mui/material";
import { Outlet, useMatch } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Hero } from "@/components/UI/Hero/Hero";
import { BreadcrumbLink } from "@/components/UI/Link/Link";
import { BREADCRUMBS_NAVIGATION } from "@/utils/constants";
// import { isHomepage } from "@/lib/utils";

export const MainLayout = () => {
  const match = useMatch({
    from: "/",
    shouldThrow: false,
  });
  const isHomePage = match?.pathname === "/";
  return (
    <>
      <Header />
      {isHomePage && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 32px",
          }}
        >
          <Breadcrumbs>
            {BREADCRUMBS_NAVIGATION.map(({ name, href }) => {
              return (
                <BreadcrumbLink
                  variantColor="breadcrumbs"
                  key={name}
                  href={href}
                >
                  {name}
                </BreadcrumbLink>
              );
            })}
          </Breadcrumbs>
        </Box>
      )}
      {isHomePage && <Hero />}
      <Grid
        container
        sx={{ alignItems: "center", padding: { xs: "16px", md: "32px" } }}
        direction="column"
      >
        <Outlet />
        {import.meta.env.VITE_NODE_ENV !== "production" && (
          <TanStackRouterDevtools />
        )}
      </Grid>
    </>
  );
};
