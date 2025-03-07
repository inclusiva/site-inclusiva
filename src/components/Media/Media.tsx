import { YoutubePlayer } from "@/components/UI/YoutubePlayer/YoutubePlayer";
import { INCLUSIVA_BOOK_IMG } from "@/utils/constants";
import { Box, Link, Typography } from "@mui/material";

const Media = () => {
  return (
    <Box sx={{ maxWidth: "1144px" }}>
      <Box sx={{ margin: "4rem 0" }}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Livro
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
              width: "100%",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src={`${INCLUSIVA_BOOK_IMG}`}
              alt="Livro da Aceleradora Inclusiva"
            />
          </Box>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Aceleradora Ágil e Inclusiva, unindo conhecimento, projetos e
            pessoas para construir um futuro tecnológico justo. Você pode fazer
            o download através do{" "}
            <Link
              target="_blank"
              href="https://www.amazon.com.br/Aceleradora-%C3%A1gil-inclusiva-conhecimento-tecnol%C3%B3gico-ebook/dp/B08G386YC7"
            >
              link
            </Link>
            .
          </Typography>
        </Box>
      </Box>
      <Box sx={{ margin: "4rem 0" }}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Dissertação
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          Temos o prazer de destacar a dissertação intitulada "Gestão Social:
          Conformação e Impactos de um Programa de Inclusão Social na Área da
          Tecnologia", escrita por Ana Paula Ribeiro de Souza, nossa parceira no
          programa. Você pode acessar a dissertação completa através do{" "}
          <Link
            target="_blank"
            href="https://tede2.pucrs.br/tede2/handle/tede/10809"
          >
            link
          </Link>
          .
        </Typography>
      </Box>
      <Box sx={{ margin: "4rem 0" }}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Videos
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <YoutubePlayer videoId="YIjHgtnkf9M" options={{ width: "320px" }} />
          <YoutubePlayer videoId="gQ_MP0b0UIM" options={{ width: "320px" }} />
          <YoutubePlayer videoId="B4kCenvqD6w" options={{ width: "320px" }} />
        </Box>
      </Box>
    </Box>
  );
};

Media.displayName = "Media";
export { Media };
