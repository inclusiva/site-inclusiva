import pucrsLogo from "@/assets/PUCRS-logo.webp";
import thoughtworksLogo from "@/assets/thoughtworks-logo.png";
import inclusivaLogo from "@/assets/inclusiva-logo.png";
import tecnopucLogo from "@/assets/tecnopuc-logo.webp";
import globoLogo from "@/assets/globo-logo.png";
import heroBannerImg from "@/assets/hero-banner-2025.png";

export const INCLUSIVA_LOGO = inclusivaLogo;
export const HERO_BANNER = heroBannerImg;

// enum ROUTE_PATHS {
//   HOME = "/",
//   ABOUT = "/about",
// }

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
  "Home",
  "Turmas",
  "Galeria",
  "Equipe",
  "Documentação",
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
    date: "6 a 14 de junho",
    description: "Inscrição",
    color: "#e60c5c",
  },
  {
    date: "21 de junho",
    description: "Convocação para entrevistas",
    color: "#f3911f",
  },
  {
    date: "24 a 27 de junho",
    description: "Entrevistas",
    color: "#e60c5c",
  },
  {
    date: "28 de junho",
    description: "Divulgação dos selecionados",
    color: "#f3911f",
  },
  {
    date: "1 a 5 de julho",
    description: "Matrícula/Contrato",
    color: "#e60c5c",
  },
  {
    date: "1ª quinzena de julho",
    description: "Início das aulas",
    color: "#f3911f",
  },
];

export const FAQ_ACCORDIONS = [
  {
    id: "panel-1",
    question: "Por que TI?",
    answer:
      "A área de Tecnologia da Informação é uma das mais promissoras do mercado de trabalho. Dentre as muitas razões para para se desenvolver neste campo, destacamos: Amplo mercado de trabalho - pilar no desenvolvimento das empresas, tornando os processos mais rápidos e inovadores; Oportunidade de carreira - a faixa salarial de um profissional em TI está acima da média nacional; Alto índice de empregabilidade - a demanda das empresas por profissionais da área de TI só aumenta, oferecendo muitas vagas e oportunidades de trabalho; Valorização do profissional - profissionais especializados nesta área se tornaram membros imprescindíveis nas equipes de trabalho das empresas.",
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
      "O formato do Curso será totalmente remoto, através de videoaulas, palestras, debates, exercícios voltados à TI e temas transversais de interesse das alunas.",
  },
  {
    id: "panel-5",
    question: "Terei ajuda de custo?",
    answer:
      "Durante o período de realização do Curso, haverá uma ajuda de custo para cada uma das alunas, no valor de R$750,00 (setecentos e cinquenta reais) paga mensalmente. Para ter o direito à ajuda de custo, a candidata deverá ter vínculo com uma instituição de ensino: estar cursando o Ensino Técnico ou cursando o Ensino Superior. Para que receba a ajuda de custo é necessário que a aluna tenha, no mínimo, 75% de presença nas aulas.",
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
      "Depende. Se estiver concluindo o Ensino Médio ainda em 2024, a candidata poderá realizar a inscrição. Também poderão se candidatar pessoas com Ensino Técnico ou Ensino Superior em curso. ",
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
    question: "Não tenho nenhuma experiência em TI. Poderei fazer o curso?",
    answer:
      "Sim. Um dos objetivos do programa Aceleradora Inclusiva é oportunizar as primeiras aproximações com a área da Tecnologia da Informação e Comunicação. (TIC). Portanto, nas aulas iniciais, será feito um nivelamento para que todas as alunas estejam em condições de dar início ao aprendizado.",
  },
];

export const COURSE_CONTENT = [
  "Javascript;",
  "HTML e CSS;",
  "React.js;",
  "Git/Github;",
  "Node + Express;",
  "Aulas especiais.",
];

export const COURSE_PRE_REQUISITES = [
  "Ter 18 anos ou mais",
  "Pessoas com deficiência motora ou mobilidade reduzida*(com laudo médico que ateste a deficiência)",
  "Minímo ter Ensino Médio concluído até o final de 2024",
  "Disponibilidade de horário",
  "Possuir acesso à internet",
  "Ter computador para acessar as aulas",
  "Vontade de aprender",
  "Ter interesse por tecnologia da informação",
  "Ser residente em qualquer parte do Brasil",
];
