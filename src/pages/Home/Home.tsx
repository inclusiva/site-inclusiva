import { Box } from "@mui/material";
import About from "@/components/About/About";
import { CourseContent } from "@/components/CourseContent/CourseContent";
import CoursePreRequisites from "@/components/CoursePreRequisites/CoursePreRequisites";
import CourseCronogram from "@/components/CourseCronogram/CourseCronogram";
import Faq from "@/components/Faq/Faq";
import { Contact } from "@/components/Contact/Contact";
import { RedirectToCourseNotice } from "@/components/UI/Link/Link";

export const Home = () => {
  return (
    <Box sx={{ maxWidth: "1144px" }}>
      <About id="course-description" />
      <CourseContent id="course-content" />
      <CoursePreRequisites id="prerequisites" />
      <CourseCronogram id="cronogram" />
      <RedirectToCourseNotice />
      <Faq id="faq" />
      <Contact />
    </Box>
  );
};
