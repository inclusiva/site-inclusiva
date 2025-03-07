import { Equipe } from "@/pages/Equipe";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/equipe")({
  component: Equipe,
});
