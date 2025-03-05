import { Carousel } from "@/components/UI/Carousel/Carousel";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/galeria")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Carousel />;
}
