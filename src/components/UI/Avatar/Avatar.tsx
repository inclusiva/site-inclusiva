import { Box, Avatar as MuiAvatar, Typography } from "@mui/material";

interface AvatarProps {
  src: string;
  avatarLabel: string;
  sx?: {
    [key: string]: string;
  };
}

const Avatar = ({ src, avatarLabel, sx }: AvatarProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
        {avatarLabel}
      </Typography>
      <MuiAvatar src={src} alt={avatarLabel} sx={{ ...sx }} />
    </Box>
  );
};

Avatar.displayName = "Avatar";
export { Avatar };
