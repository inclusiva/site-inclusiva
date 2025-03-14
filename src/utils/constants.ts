import pucrsLogo from "@/assets/PUCRS-logo.webp";
import thoughtworksLogo from "@/assets/thoughtworks-logo.png";
import inclusivaLogo from "@/assets/inclusiva-logo.png";
import tecnopucLogo from "@/assets/tecnopuc-logo.webp";
import globoLogo from "@/assets/globo-logo.png";
import heroBannerImg from "@/assets/ID-Acelerdora-Inclusiva-2025-incricoes-abertas.jpg";
import inclusivaBookImg from "@/assets/inclusiva-book.jpeg";
import anaProfilePicture from "@/assets/team/ana.jpeg";
import peuProfilePicture from "@/assets/team/peu.png";
import fernandoProfilePicture from "@/assets/team/fernando.jpeg";
import guiProfilePicture from "@/assets/team/gui.jpeg";
import mairaProfilePicture from "@/assets/team/maira.jpg";
import rafaProfilePicture from "@/assets/team/rafa.jpeg";
import rafaelProfilePicture from "@/assets/team/rafael.jpg";
import guiSoaresProfilePicture from "@/assets/team/gui-soares.jpg";
import TURMA_01_PICTURE from "@/assets/gallery/turma-01/t1.jpg";
import TURMA_02_PICTURE from "@/assets/gallery/turma-02/t2.png";
import TURMA_03_PICTURE from "@/assets/gallery/turma-03/t3.png";
import TURMA_04_PICTURE from "@/assets/gallery/turma-04/t4.jpg";
import TURMA_05_PICTURE from "@/assets/gallery/turma-05/t5.jpeg";
import TURMA_06_PICTURE from "@/assets/gallery/turma-06/t6.png";
import TURMA_07_PICTURE from "@/assets/gallery/turma-07/t7.jpeg";
import TURMA_08_PICTURE from "@/assets/gallery/turma-08/t8.jpeg";
import TURMA_09_PICTURE from "@/assets/gallery/turma-09/t9.jpeg";
import TURMA_10_PICTURE from "@/assets/gallery/turma-10/t10.jpeg";
import TURMA_11_PICTURE from "@/assets/gallery/turma-11/t11.jpg";
import TURMA_12_PICTURE from "@/assets/gallery/turma-12/t12.jpg";

export const INCLUSIVA_LOGO = inclusivaLogo;
export const HERO_BANNER = heroBannerImg;
export const INCLUSIVA_BOOK_IMG = inclusivaBookImg;

enum ROUTE_PATHS {
  HOME = "/",
  TURMAS = "/turmas",
  GALERIA = "/galeria",
  EQUIPE = "/equipe",
  MIDIAS = "/midias",
}

export const BREADCRUMBS_NAVIGATION = [
  {
    name: "O Programa",
    href: "#course-description",
  },
  {
    name: "Conteúdo",
    href: "#course-content",
  },
  {
    name: "Pré-requisitos",
    href: "#prerequisites",
  },
  {
    name: "Cronograma",
    href: "#cronogram",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Contato",
    href: "#contact",
  },
];

export const HEADER_NAVIGATION_ITEMS = [
  {
    label: "Home",
    path: ROUTE_PATHS.HOME,
  },
  {
    label: "Galeria",
    path: ROUTE_PATHS.GALERIA,
  },
  {
    label: "Equipe",
    path: ROUTE_PATHS.EQUIPE,
  },
  {
    label: "Mídias",
    path: ROUTE_PATHS.MIDIAS,
  },
];

export const MENU_DRAWER_WIDTH = 240;

export const PARTNERS_ASSETS = [
  {
    name: "PUCRS",
    asset: {
      path: pucrsLogo,
    },
    assets: {},
  },
  {
    name: "Thoughtworks",
    asset: {
      path: thoughtworksLogo,
    },
    assets: {},
  },
  {
    name: "Tecnopuc",
    asset: {
      path: tecnopucLogo,
    },
    assets: {},
  },
  {
    name: "Globo",
    asset: {
      path: globoLogo,
    },
    assets: {},
  },
];

export const COURSE_STEPS = [
  {
    date: "14 de março a 1 de abril",
    description: "Inscrições",
    color: "#e60c5c",
  },
  {
    date: "14 de março a 4 de abril",
    description: "Análise das Documentações",
    color: "#f3911f",
  },
  {
    date: "4 de abril",
    description: "Chamada para Entrevistas",
    color: "#e60c5c",
  },
  {
    date: "7 a 11 de abril",
    description: "Entrevistas e Desafio Técnico",
    color: "#f3911f",
  },
  {
    date: "14 de abril",
    description: "Divulgação das Selecionadas",
    color: "#e60c5c",
  },
  {
    date: "15 a 17 de abril",
    description: "Matrícula",
    color: "#f3911f",
  },
  {
    date: "28 de abril",
    description: "Início das Aulas",
    color: "#f3911f",
  },
];

export const FAQ_ACCORDIONS = [
  {
    id: "panel-1",
    question: "Por que Desenvolvimento Web?",
    answer:
      "A área de Desenvolvimento Web é uma das mais promissoras do mercado de trabalho. Dentre as muitas razões para para se desenvolver neste campo, destacamos: Amplo mercado de trabalho - pilar no desenvolvimento das empresas, tornando os processos mais rápidos e inovadores; Oportunidade de carreira - a faixa salarial de um profissional em TI está acima da média nacional; Alto índice de empregabilidade - a demanda das empresas por profissionais da área de TI só aumenta, oferecendo muitas vagas e oportunidades de trabalho; Valorização do profissional - profissionais especializados nesta área se tornaram membros imprescindíveis nas equipes de trabalho das empresas.",
  },
  {
    id: "panel-2",
    question:
      "Por que o curso é destinado exclusivamente para pessoas com deficiência?",
    answer:
      "A inclusão de Pessoas com Deficiência por parte das empresas é um dever moral e legal,  e visa integrar as pessoas com deficiência na sociedade, como um todo, possibilitando que esse grupo tenha acesso aos direitos que lhes são garantidos pela Constituição. Para além das leis que regem as políticas de cotas para a inclusão de pessoas com deficiências, a maior importância da integração social é o respeito aos direitos de pessoas com deficiências, desenvolvendo-se o sentimento de dignidade, de humanidade e de pertencimento de todos dentro de uma comunidade. O ato de incluir socialmente tem o objetivo de possibilitar que as pessoas marginalizadas e excluídas, como as pessoas com deficiência, tenham acesso à vida social, econômica, política e desfrutem dos seus direitos . Além disso, essa é uma ótima forma para que as equipes aprendam a lidar com a diversidade.",
  },
  {
    id: "panel-3",
    question: "O que vou aprender?",
    answer:
      "Você irá aprender, desenvolver e aprimorar noções básicas de desenvolvimento para a Web, incluindo linguagens de programação, ferramentas e acessibilidade na Web.",
  },
  {
    id: "panel-4",
    question: "As aulas serão presenciais ou virtuais? ",
    answer:
      "O formato do Curso será totalmente remoto, através de videoaulas, palestras, debates, exercícios voltados à Desenvolvimento Web e temas transversais de interesse das alunas.",
  },
  {
    id: "panel-5",
    question: "Terei ajuda de custo?",
    answer:
      "Durante o período de realização da Formação, haverá uma ajuda de custo no valor de R$750,00 (setecentos e cinquenta reais), paga mensalmente.\n\n**Observação: O recebimento da bolsa de auxílio não representa, em nenhum momento, vínculo empregatício** com a Aceleradora Inclusiva, nem com suas mantenedoras.",
  },
  {
    id: "panel-6",
    question: " Haverá algum contrato para receber a bolsa?",
    answer:
      "Sim. O contrato será assinado pela aluna, após ser aprovada em todas as etapas da seleção.",
  },
  {
    id: "panel-7",
    question: "Se faltar às aulas a bolsa é cancelada?",
    answer:
      "A aluna, para continuar recebendo a ajuda de custo, necessitará, obrigatoriamente, ter uma frequência mínima de 75% das aulas.",
  },
  {
    id: "panel-8",
    question: "Ao final do curso vou receber certificado?",
    answer:
      "Sim, no encerramento das atividades será entregue um certificado de conclusão. Porém, para a aluna receber seu certificado, necessitará obrigatoriamente ter uma frequência mínima de 75% das aulas. ",
  },
  {
    id: "panel-9",
    question: "Posso morar fora do RS e fazer o curso?",
    answer:
      "Sim, o curso terá abrangência nacional, não sendo impeditivo que a aluna resida em outro estado da Federação.",
  },
  {
    id: "panel-10",
    question: "Terei aula todos os dias da semana?",
    answer:
      "Não, as aulas ocorrerão às segundas, terças e quintas, no período da tarde",
  },
  {
    id: "panel-11",
    question: "Não tenho ensino médio completo. Posso fazer o curso?",
    answer:
      "Depende. Se estiver concluindo o Ensino Médio ainda em 2025, a candidata poderá realizar a inscrição. Também poderão se candidatar pessoas com Ensino Técnico ou Ensino Superior em curso. ",
  },
  {
    id: "panel-12",
    question:
      "Não tenho computador, mas tenho celular conectado à internet. Posso fazer o curso?",
    answer:
      "Não. Para a realização do curso é necessário não só conexão com internet, mas também softwares e apps instalados que somente são compatíveis em computadores ou laptops.",
  },
  {
    id: "panel-13",
    question:
      "Não tenho nenhuma experiência em Desenvolvimento Web. Poderei fazer o curso?",
    answer:
      "Sim. Um dos objetivos do programa Aceleradora Inclusiva é oportunizar as primeiras aproximações com a área de Desenvolvimento Web. Portanto, nas aulas iniciais, será feito um nivelamento para que todas as alunas estejam em condições de dar início ao aprendizado.",
  },
];

export const COURSE_CONTENT = [
  "Javascript",
  "HTML e CSS",
  "React.js",
  "Git/Github",
  "Node + Express",
  "Aulas especiais",
  "Inglês",
];

export const COURSE_PRE_REQUISITES = [
  "Ter 18 anos ou mais",
  "Pessoas com deficiência motora ou mobilidade reduzida (com laudo médico que ateste a deficiência)",
  "Minímo ter Ensino Médio concluído até o final de 2025",
  "Disponibilidade de horário",
  "Possuir acesso à internet",
  "Ter computador para acessar as aulas",
  "Vontade de aprender",
  "Ter interesse por tecnologia da informação",
  "Ser residente em qualquer parte do Brasil",
];

export const TEAM_MEMBERS = [
  {
    id: "member-item-1",
    name: "Ana Paula",
    avatar: anaProfilePicture,
  },
  {
    id: "member-item-2",
    name: "Fernando Fernandes",
    avatar: fernandoProfilePicture,
  },
  {
    id: "member-item-3",
    name: "Rafael Gustavo",
    avatar: rafaProfilePicture,
  },
  {
    id: "member-item-4",
    name: "Guilherme Anjos",
    avatar: guiProfilePicture,
  },
  {
    id: "member-item-5",
    name: "Rafael Prikladnicki",
    avatar: rafaelProfilePicture,
  },
  {
    id: "member-item-6",
    name: "Maira Petrini",
    avatar: mairaProfilePicture,
  },
  {
    id: "member-item-7",
    name: "Pedro Silva",
    avatar: peuProfilePicture,
  },
  {
    id: "member-item-8",
    name: "Guilherme Soares",
    avatar: guiSoaresProfilePicture,
  },
];

export const GALLERY = [
  {
    src: TURMA_01_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_02_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_03_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_04_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_05_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_06_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_07_PICTURE,
    width: 7,
    height: 3,
  },
  {
    src: TURMA_08_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_09_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_10_PICTURE,
    width: 4,
    height: 3,
  },
  {
    src: TURMA_11_PICTURE,
    width: 4,
    height: 5,
  },
  {
    src: TURMA_12_PICTURE,
    width: 4,
    height: 5,
  },
];
