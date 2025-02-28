import { Box, Typography, Grid2 as Grid, Paper, styled } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

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
    <>
      <Box sx={{ margin: "32px 0", maxWidth: "700px" }}>
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

        {/* <Box>
          <List sx={{ display: "flex", flexWrap: "wrap" }}>
            <ListItem
              sx={{
                maxWidth: "200px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemIcon>
                <WorkIcon sx={{ fontSize: "3.5rem" }} />
              </ListItemIcon>
              <Typography variant="body1">6 meses de duração</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon>
                <WorkIcon sx={{ fontSize: "3.5rem" }} />
              </ListItemIcon>
              <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                Ajuda de custo mensal no valor de R$750,00*
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon>
                <WorkIcon sx={{ fontSize: "3.5rem" }} />
              </ListItemIcon>
              <Typography variant="body1">
                Certificado ao final do curso
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon>
                <WorkIcon sx={{ fontSize: "3.5rem" }} />
              </ListItemIcon>
              <Typography variant="body1">25 vagas disponíveis</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon>
                <WorkIcon sx={{ fontSize: "3.5rem" }} />
              </ListItemIcon>
              <Typography variant="body1">
                Possibilidade de contratação
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon>
                <WorkIcon sx={{ fontSize: "3.5rem" }} />
              </ListItemIcon>
              <Typography variant="body1">
                Sem necessidade de conhecimento prévio
              </Typography>
            </ListItem>
          </List>
        </Box> */}
        <Grid
          container
          sx={{ marginTop: "32px" }}
          rowSpacing={{ xs: 6, sm: 2, md: 1 }}
          columnSpacing={{ xs: 1, sm: 2, md: 6 }}
        >
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <WorkIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">6 meses de duração</Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <WorkIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Ajuda de custo mensal no valor de R$750,00*
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <WorkIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Certificado ao final do curso
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <WorkIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">25 vagas disponíveis</Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <WorkIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Possibilidade de contratação
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Item>
              <WorkIcon sx={{ fontSize: "3.5rem" }} />
              <Typography variant="body1">
                Sem necessidade de conhecimento prévio
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ margin: "64px 0", maxWidth: "700px" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          Pré-requisitos
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
      </Box>

      <Box sx={{ margin: "64px 0", maxWidth: "700px" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          Cronograma 2025
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
      </Box>

      <Box sx={{ margin: "64px 0", maxWidth: "700px" }}>
        <Typography variant="h3" sx={{ marginBottom: "24px" }}>
          FAQ
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
      </Box>
    </>
  );
};
