import { Breadcrumbs, Breadcrumb } from "@/components/breadcrumbs";
import { Link } from "@/components/link";

export function Basic() {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <Link href="/">Home</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href="/react-aria/">React Aria</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link>Breadcrumbs</Link>
      </Breadcrumb>
    </Breadcrumbs>
  );
}
