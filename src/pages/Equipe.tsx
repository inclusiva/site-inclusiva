import { Grid2 as Grid, Typography } from "@mui/material";
import { Avatar } from "@/components/UI/Avatar/Avatar";
import { TEAM_MEMBERS } from "@/utils/constants";

export const Equipe = () => {
  return (
    <>
      <Typography variant="h2" sx={{ margin: "2rem 0" }}>
        Equipe
      </Typography>
      <Grid container sx={{ margin: "2rem 0" }}>
        {TEAM_MEMBERS.map((teamMember) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={teamMember.id}>
            <Avatar
              src={teamMember.avatar}
              avatarLabel={teamMember.name}
              sx={{ width: "128px", height: "128px", borderRadius: "1rem" }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
