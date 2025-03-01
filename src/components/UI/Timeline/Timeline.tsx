import * as React from "react";
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
                }}
              >
                {step.description}
              </Typography>
              <Typography>{step.date}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

Timeline.displayName = "Timeline";

export { Timeline };
