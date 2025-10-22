import { Link } from "@/components/link";

export function Basic() {
  return (
    <div>
      <p>
        This is a paragraph with a <Link href="https://example.com">link</Link>{" "}
        in it.
      </p>
      <Link href="https://example.com">Standalone link</Link>
    </div>
  );
}
