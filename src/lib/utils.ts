import { Remarkable } from "remarkable";

// Utility Functions
export function isHomepage(pathname: string): boolean {
  return pathname === "/";
}

const md = new Remarkable();

export function markdownToHTMLParser(markdown: string) {
  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
}
