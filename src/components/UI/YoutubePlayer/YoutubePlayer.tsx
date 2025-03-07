// ts
import { Box } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubePlayerProps {
  videoId: string;
  options?: {
    width?: string;
    height?: string;
  };
}

const YoutubePlayer = ({ videoId, options }: YoutubePlayerProps) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box
      sx={{
        width: options?.width,
        height: options?.height,
        margin: { xs: "8px 0", sm: "0 8px" },
        "& > .youtube_player_iframe > iframe": {
          width: "100%",
          height: "100%",
          border: "none",
        },
      }}
    >
      <YouTube
        className="youtube_player_iframe"
        videoId={`${videoId}`}
        opts={opts}
        onReady={onPlayerReady}
      />
    </Box>
  );
};

YoutubePlayer.displayName = "YoutubePlayer";

export { YoutubePlayer };
