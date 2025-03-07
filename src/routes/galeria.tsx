import { Gallery } from "@/pages/Galeria";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/galeria")({
  component: Gallery,
});
