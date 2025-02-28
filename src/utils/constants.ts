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
