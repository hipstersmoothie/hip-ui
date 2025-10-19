import { Flex } from "@/components/flex";
import { createFileRoute } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardHeaderAction,
  CardImage,
  CardTitle,
} from "@/components/card";
import { Button } from "@/components/button";
import { Text } from "@/components/typography/text";
import { Separator } from "@/components/separator";
import { Select, SelectItem } from "@/components/select";

const styles = stylex.create({
  grow: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "0%",
    minWidth: 0,
  },
  skinny: {
    flexGrow: 0.5,
    flexShrink: 0,
    flexBasis: "0%",
  },
});

export const Route = createFileRoute("/_docs/ecommerce-app")({
  component: RouteComponent,
});

function SmallProductCard() {
  return (
    <Card size="sm">
      <CardImage src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80" />
      <CardHeader>
        <CardTitle>Back to basics</CardTitle>
        <CardDescription>Simple and versatile</CardDescription>
        <CardHeaderAction>
          <Button variant="secondary">Show now</Button>
        </CardHeaderAction>
      </CardHeader>
    </Card>
  );
}

function SmallProductCardWithBuying() {
  return (
    <Card size="sm">
      <CardImage src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80" />
      <CardBody>
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="2">
            <Text size="sm">Footwear</Text>
            <Text weight="semibold">Sneakers #12</Text>
            <Text size="sm" variant="secondary">
              Love at the first sight for enthusiasts seeking a fresh and
              whimsical style.
            </Text>
          </Flex>
          <Separator />
          <Flex align="end" gap="2">
            <Select
              label="Color"
              defaultValue="red"
              style={styles.grow}
              variant="secondary"
            >
              <SelectItem id="red">Red</SelectItem>
              <SelectItem id="blue">Blue</SelectItem>
              <SelectItem id="green">Green</SelectItem>
              <SelectItem id="yellow">Yellow</SelectItem>
              <SelectItem id="purple">Purple</SelectItem>
              <SelectItem id="orange">Orange</SelectItem>
              <SelectItem id="pink">Pink</SelectItem>
              <SelectItem id="brown">Brown</SelectItem>
              <SelectItem id="gray">Gray</SelectItem>
            </Select>
            <Select
              label="Size"
              defaultValue="8"
              style={styles.grow}
              variant="secondary"
            >
              <SelectItem id="8">8</SelectItem>
              <SelectItem id="9">9</SelectItem>
              <SelectItem id="10">10</SelectItem>
              <SelectItem id="11">11</SelectItem>
              <SelectItem id="12">12</SelectItem>
              <SelectItem id="13">13</SelectItem>
              <SelectItem id="14">14</SelectItem>
              <SelectItem id="15">15</SelectItem>
              <SelectItem id="16">16</SelectItem>
            </Select>
            <Button>Buy</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function RouteComponent() {
  return (
    <Flex gap="4">
      <Flex direction="column" gap="4" style={styles.skinny}>
        <SmallProductCard />
        <SmallProductCardWithBuying />
      </Flex>
      <Flex direction="column" gap="4" style={styles.skinny}></Flex>
      <Flex direction="column" gap="4" style={styles.skinny}></Flex>
      <Flex direction="column" gap="4" style={styles.grow}></Flex>
    </Flex>
  );
}
