import { StarRating } from "@/components/star-rating";

export function Basic() {
  return (
    <>
      <StarRating rating={4.5} reviewCount={128} />
    </>
  );
}
