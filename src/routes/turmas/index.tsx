import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/turmas/")({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});

function RouteComponent() {
  return <></>;
}
