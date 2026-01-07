import { Box, Avatar as MuiAvatar, Typography, SxProps, Theme } from "@mui/material";

interface AvatarProps {
  src: string;
  avatarLabel: string;
  sx?: SxProps<Theme>;
}

const Avatar = ({ src, avatarLabel, sx }: AvatarProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: { xs: "0.75rem", sm: "1rem" } }}>
        {avatarLabel}
      </Typography>
      <MuiAvatar src={src} alt={avatarLabel} sx={{ ...sx }} />
    </Box>
  );
};

Avatar.displayName = "Avatar";
export { Avatar };
