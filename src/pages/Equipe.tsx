import { Grid2 as Grid, Typography } from "@mui/material";
import { Avatar } from "@/components/UI/Avatar/Avatar";
import { TEAM_MEMBERS } from "@/utils/constants";

export const Equipe = () => {
  return (
    <>
      <Typography variant="h2" sx={{ margin: "2rem 0" }}>
        Equipe
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 5, sm: 6, md: 8, lg: 8 }}
        columnSpacing={{ xs: 3, sm: 4, md: 4, lg: 5 }}
        sx={{ margin: "2rem 0" }}
      >
        {TEAM_MEMBERS.map((teamMember) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={teamMember.id}>
            <Avatar
              src={teamMember.avatar}
              avatarLabel={teamMember.name}
              sx={{
                width: { xs: "180px", sm: "200px", lg: "220px" },
                height: { xs: "180px", sm: "200px", lg: "220px" },
                borderRadius: "1rem",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
