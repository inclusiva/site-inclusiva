import {
  CourseDurationIcon,
  CourseFinancialAidIcon,
  CourseCertificateIcon,
  CourseOpenRolesIcon,
} from "@/components/UI/Icons";
import { PageBlockProps } from "@/utils/types";
import { Paper, styled, Typography, Grid2 as Grid, Box } from "@mui/material";

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

const About = ({ id }: PageBlockProps) => {
  return (
    <Box sx={{ margin: "32px 0", width: "100%" }} id={id}>
      <Typography variant="h3" sx={{ marginBottom: "24px" }}>
        Sobre o programa
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        A iniciativa é viabilizada por uma parceria entre a{" "}
        <strong>Thoughtworks</strong>, a <strong>Globo</strong>, a{" "}
        <strong>PUCRS</strong> e o <strong>Tecnopuc Farol Hub</strong>, e tem como
        objetivo principal ensinar, de forma <strong>inclusiva</strong>, os
        fundamentos de lógica de programação e tecnologias web. Também busca
        trazer para o dia-a-dia <strong>conceitos</strong> e{" "}
        <strong>temáticas sociais</strong>, de maneira interdisciplinar, além de
        oferecer um espaço seguro para o desenvolvimento de empatia ao abordar
        temas de <strong>acessibilidade</strong> <strong>justiça</strong>{" "}
        <strong>econômica</strong> e <strong>social</strong>.
      </Typography>

      <Grid
        container
        sx={{ marginTop: "32px" }}
        rowSpacing={{ xs: 6, sm: 2, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 6 }}
      >
        <Grid size={{ xs: 12, sm: 3 }}>
          <Item>
            <CourseDurationIcon sx={{ fontSize: "3.5rem" }} />
            <Typography variant="body1">8 meses de duração</Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Item>
            <CourseFinancialAidIcon sx={{ fontSize: "3.5rem" }} />
            <Typography variant="body1">
              Ajuda de custo mensal no valor de R$750,00*
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Item>
            <CourseCertificateIcon sx={{ fontSize: "3.5rem" }} />
            <Typography variant="body1">
              Certificado ao final do curso
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Item>
            <CourseOpenRolesIcon sx={{ fontSize: "3.5rem" }} />
            <Typography variant="body1">13 vagas disponíveis</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
