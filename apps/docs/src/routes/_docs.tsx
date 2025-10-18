import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
