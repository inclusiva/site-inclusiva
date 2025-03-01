import {
  Box,
  Typography,
  Grid2 as Grid,
  Paper,
  styled,
  List,
  ListItem,
  Icon,
} from "@mui/material";
import {
  CourseCertificateIcon,
  CourseDurationIcon,
  CourseRequirementsIcon,
  CourseFinancialAidIcon,
  CourseOpenRolesIcon,
  CourseWorkOfferIcon,
} from "@/components/UI/Icons";
import { Timeline } from "@/components/UI/Timeline/Timeline";
import { Accordion } from "@/components/UI/Accordion/Accordion";
import {
  COURSE_CONTENT,
  COURSE_PRE_REQUISITES,
  FAQ_ACCORDIONS,
} from "@/utils/constants";
import theme from "@/styles/theme";
import { CircleRounded } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  border: "none",
  boxShadow: "none",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.primary.main,
  "& > p": {
    color: theme.palette.text.primary,
  },
}));

export const Home = () => {
  return (
    <Box sx={{ maxWidth: "1144px" }}>
      <Box sx={{ margin: "32px 0", width: "100%" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          Sobre o programa
        </Typography>
        <Typography variant="body1">
          Sobre o programa A iniciativa é viabilizada por uma parceria entre a
          Thoughtworks, a Globo, a PUCRS e o Tecnopuc, e tem como objetivo
          principal ensinar, de forma inclusiva, os fundamentos de lógica de
          programação e tecnologias web. Também busca trazer para o dia-a-dia
          conceitos e temáticas sociais, de maneira interdisciplinar, além de
          oferecer um espaço seguro para o desenvolvimento de empatia ao abordar
          temas de acessibilidade justiça econômica e social.
        </Typography>

        <Grid
          container
          sx={{ marginTop: "32px" }}
          rowSpacing={{ xs: 6, sm: 2, md: 1 }}
          columnSpacing={{ xs: 1, sm: 2, md: 6 }}
        >
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <CourseDurationIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">6 meses de duração</Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <CourseFinancialAidIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Ajuda de custo mensal no valor de R$750,00*
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <CourseCertificateIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Certificado ao final do curso
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <CourseOpenRolesIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">25 vagas disponíveis</Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <CourseWorkOfferIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Possibilidade de contratação
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <CourseRequirementsIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Sem necessidade de conhecimento prévio
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ margin: "64px 0" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          Conteúdo Programático
        </Typography>
        <List disablePadding>
          {COURSE_CONTENT.map((content, idx) => {
            return (
              <ListItem key={idx}>
                <CircleRounded
                  fontSize="small"
                  sx={{
                    marginRight: "16px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: theme.typography.fontWeightRegular }}
                >
                  {content}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box sx={{ margin: "64px 0" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          Pré-requisitos
        </Typography>
        <List disablePadding>
          {COURSE_PRE_REQUISITES.map((content, idx) => {
            return (
              <ListItem key={idx}>
                <CircleRounded
                  fontSize="small"
                  sx={{
                    marginRight: "16px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: theme.typography.fontWeightRegular }}
                >
                  {content}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box sx={{ margin: "64px 0" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          Cronograma 2025
        </Typography>
        <Timeline />
      </Box>

      <Box sx={{ margin: "64px 0" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          FAQ
        </Typography>
        {FAQ_ACCORDIONS.map((accordion) => {
          return (
            <Accordion
              key={accordion.id}
              accordionId={accordion.id}
              accordionTitle={accordion.question}
            >
              {accordion.answer}
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};
