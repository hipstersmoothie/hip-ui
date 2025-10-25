import { Grid, GridItem } from "@/components/grid";

export function GridSpans() {
  return (
    <Grid columns="repeat(4, 1fr)" columnGap="4">
      <GridItem columnStart={1} columnEnd={3}>
        Spans 2 columns
      </GridItem>
      <GridItem columnStart={3} columnEnd={5}>
        Spans 2 columns
      </GridItem>
      <GridItem columnStart={1} columnEnd={2}>
        Single column
      </GridItem>
      <GridItem columnStart={2} columnEnd={4}>
        Spans 2 columns
      </GridItem>
      <GridItem columnStart={4} columnEnd={5}>
        Single column
      </GridItem>
    </Grid>
  );
}
