import { Header } from "@/components/Header/Header";
import { Box, Grid2 as Grid } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Hero } from "@/components/UI/Hero/Hero";
import { BreadcrumbLink } from "@/components/UI/Link/Link";
import { BREADCRUMBS_NAVIGATION } from "@/utils/constants";

export const MainLayout = () => {
  return (
    <>
      <Header />
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
              <BreadcrumbLink variantColor="breadcrumbs" key={name} href={href}>
                {name}
              </BreadcrumbLink>
            );
          })}
        </Breadcrumbs>
      </Box>
      <Hero />
      <Grid
        container
        sx={{ alignItems: "center", padding: "32px" }}
        direction="column"
      >
        <Outlet />
        <TanStackRouterDevtools />
      </Grid>
    </>
  );
};
