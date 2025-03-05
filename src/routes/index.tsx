import { Home } from "@/pages/Home/Home";
import { createFileRoute, LazyRoute, AnyRoute } from "@tanstack/react-router";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-next-line
export const Route: LazyRoute<AnyRoute> = createFileRoute("/")({
  component: Home,
});
