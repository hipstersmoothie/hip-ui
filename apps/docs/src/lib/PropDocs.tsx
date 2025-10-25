import * as stylex from "@stylexjs/stylex";
import { Grid } from "lucide-react";
import { useState } from "react";
import { ComponentDoc } from "react-docgen-typescript";
import { propDocs } from "virtual:propDocs";

import { Card, CardBody } from "@/components/card";
import { Flex } from "@/components/flex";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/table";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";
import { SmallBody } from "@/components/typography";
import { Text } from "@/components/typography/text";

const styles = stylex.create({
  props: {
    overflow: "auto",
  },
});

function PropTable({ doc }: { doc: ComponentDoc }) {
  return (
    <Card size="sm" style={styles.props}>
      <CardBody>
        <Table>
          <TableHeader>
            <TableColumn isRowHeader minWidth={300}>
              Name
            </TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Default</TableColumn>
            <TableColumn>Description</TableColumn>
          </TableHeader>
          <TableBody></TableBody>
          <TableBody>
            {Object.values(doc.props).map((prop) => (
              <TableRow key={prop.name}>
                <TableCell>{prop.name}</TableCell>
                <TableCell>{prop.type.name}</TableCell>
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                <TableCell>{prop.defaultValue?.value}</TableCell>
                <TableCell>
                  <SmallBody>{prop.description}</SmallBody>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}

export function PropDocs({ components }: { components: string[] }) {
  const docs = propDocs
    .filter((doc) => components.includes(doc.displayName))
    .toSorted((a, b) => {
      const aIndex = components.indexOf(a.displayName);
      const bIndex = components.indexOf(b.displayName);
      return aIndex - bIndex;
    });
  const [selected, setSelected] = useState(docs[0].displayName);

  return (
    <Flex direction="column" gap="6">
      {docs.length > 1 && (
        <ToggleButtonGroup
          variant="grouped"
          selectionMode="single"
          onSelectionChange={(keys) =>
            setSelected(keys.values().next().value as string)
          }
        >
          <ToggleButton variant="outline" id="all">
            <Grid />
          </ToggleButton>
          {docs.map((doc) => (
            <ToggleButton
              key={doc.displayName}
              id={doc.displayName}
              variant="outline"
            >
              {doc.displayName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
      {docs.map(
        (doc) =>
          (selected === doc.displayName || selected === "all") && (
            <Flex key={doc.displayName} direction="column" gap="4">
              {selected === "all" && (
                <Text weight="semibold">{doc.displayName}</Text>
              )}
              <PropTable doc={doc} />
            </Flex>
          ),
      )}
    </Flex>
  );
}
