import { Midias } from "@/pages/Midias";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/midias")({
  component: Midias,
});
