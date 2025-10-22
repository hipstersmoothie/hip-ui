import { Grid, GridItem } from "@/components/grid";

export function Basic() {
  return (
    <Grid columns="repeat(3, 1fr)" gap="4">
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  );
}
