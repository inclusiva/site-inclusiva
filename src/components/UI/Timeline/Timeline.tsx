import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Typography } from "@mui/material";
import theme from "@/styles/theme";
import { COURSE_STEPS } from "@/utils/constants";

const Timeline = () => {
  return (
    <MuiTimeline position="alternate-reverse">
      {COURSE_STEPS.map((step) => {
        return (
          <TimelineItem key={step.description}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: step.color }} />
              <TimelineConnector sx={{ backgroundColor: step.color }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: { xs: ".85rem", md: "1.25rem" },
                }}
              >
                {step.description}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                {step.date}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

Timeline.displayName = "Timeline";

export { Timeline };
