import * as stylex from "@stylexjs/stylex";
import { Bookmark, Shredder, Upload } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { AspectRatio, AspectRatioImage } from "@/components/aspect-ratio";
import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderAction,
  CardImage,
  CardTitle,
} from "@/components/card";
import { ColorSwatch } from "@/components/color-swatch";
import { FileDropZone } from "@/components/file-drop-zone";
import { Flex } from "@/components/flex";
import { Grid } from "@/components/grid";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { NumberField } from "@/components/number-field";
import { SearchField } from "@/components/search-field";
import { Select, SelectItem } from "@/components/select";
import { Separator } from "@/components/separator";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components/text-field";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";
import { LabelText, SmallBody } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { spacing } from "../components/theme/spacing.stylex";

const styles = stylex.create({
  heightFull: {
    height: "100%",
  },
  grow: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 0,
    minWidth: 0,
  },
  medium: {
    flexBasis: "0%",
    flexGrow: 0.75,
    flexShrink: 0,
  },
  skinny: {
    flexBasis: "0%",
    flexGrow: 0.5,
    flexShrink: 0,
  },
  relative: {
    position: "relative",
  },
  bottomRight: {
    bottom: 0,
    marginBottom: spacing["4"],
    marginRight: spacing["4"],
    position: "absolute",
    right: 0,
  },
  timelineContainer: {
    position: "relative",
  },
  timelineLine: {
    backgroundColor: "#14b8a6", // teal color
    bottom: spacing["3"],
    left: spacing["2"],
    position: "absolute",
    top: spacing["3"],
    width: "2px",
  },
  timelineItem: {
    paddingLeft: spacing["10"],
    position: "relative",
  },
  timelineDot: {
    backgroundColor: "#14b8a6", // teal color
    borderRadius: "50%",
    flexShrink: 0,
    height: spacing["2.5"],
    left: spacing["1"],
    position: "absolute",
    top: spacing["1"],
    width: spacing["2.5"],
  },
  cardSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: spacing["6"],
    paddingLeft: spacing["6"],
    paddingRight: spacing["6"],
    paddingTop: spacing["6"],
  },
  customerRow: {
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  separator: {
    height: "auto",
  },
  main: {
    padding: spacing["4"],
    width: 2000,
  },
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
      <div {...stylex.props(styles.relative)}>
        <CardImage src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80" />
        <div {...stylex.props(styles.bottomRight)}>
          <IconButton label="Bookmark" variant="secondary">
            <Bookmark />
          </IconButton>
        </div>
      </div>
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

function ProductOptionsCard() {
  return (
    <Card size="sm">
      <CardBody>
        <Flex direction="column" gap="5">
          <Flex direction="column" gap="2">
            <Text weight="semibold">Delivery</Text>
            <ToggleButtonGroup
              variant="separate"
              itemsPerRow={2}
              selectionMode="single"
            >
              <ToggleButton id="tomorrow" variant="secondary">
                Tomorrow
              </ToggleButton>
              <ToggleButton id="within-3-days" variant="secondary">
                Within 3 days
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
          <Flex direction="column" gap="2">
            <Text weight="semibold">Size</Text>
            <ToggleButtonGroup
              variant="separate"
              itemsPerRow={5}
              selectionMode="single"
            >
              <ToggleButton id="5.5" variant="secondary">
                5.5
              </ToggleButton>
              <ToggleButton id="6" variant="secondary">
                6
              </ToggleButton>
              <ToggleButton id="6.5" variant="secondary">
                6.5
              </ToggleButton>
              <ToggleButton id="7" variant="secondary">
                7
              </ToggleButton>
              <ToggleButton id="7.5" variant="secondary">
                7.5
              </ToggleButton>
              <ToggleButton id="8" variant="secondary">
                8
              </ToggleButton>
              <ToggleButton id="8.5" variant="secondary">
                8.5
              </ToggleButton>
              <ToggleButton id="9" variant="secondary">
                9
              </ToggleButton>
              <ToggleButton id="9.5" variant="secondary">
                9.5
              </ToggleButton>
              <ToggleButton id="10" variant="secondary">
                10
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
          <Flex direction="column" gap="2">
            <Text weight="semibold">Material</Text>
            <ToggleButtonGroup
              variant="separate"
              itemsPerRow={5}
              selectionMode="single"
            >
              <ToggleButton id="leather" variant="secondary">
                Leather
              </ToggleButton>
              <ToggleButton id="suede" variant="secondary">
                Suede
              </ToggleButton>
              <ToggleButton id="mesh" variant="secondary">
                Mesh
              </ToggleButton>
              <ToggleButton id="canvas" variant="secondary">
                Canvas
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
          <Flex direction="column" gap="2">
            <Text weight="semibold">Color</Text>
            <ToggleButtonGroup
              variant="separate"
              itemsPerRow={3}
              selectionMode="single"
            >
              <ToggleButton id="white" variant="secondary">
                <ColorSwatch color="#fff" size="sm" />
                White
              </ToggleButton>
              <ToggleButton id="grey" variant="secondary">
                <ColorSwatch color="#808080" size="sm" />
                Grey
              </ToggleButton>
              <ToggleButton id="black" variant="secondary">
                <ColorSwatch color="#000" size="sm" />
                Black
              </ToggleButton>
              <ToggleButton id="red" variant="secondary">
                <ColorSwatch color="#f00" size="sm" />
                Red
              </ToggleButton>
              <ToggleButton id="pink" variant="secondary">
                <ColorSwatch color="#f0f" size="sm" />
                Pink
              </ToggleButton>
              <ToggleButton id="violet" variant="secondary">
                <ColorSwatch color="#800080" size="sm" />
                Violet
              </ToggleButton>
              <ToggleButton id="blue" variant="secondary">
                <ColorSwatch color="#00f" size="sm" />
                Blue
              </ToggleButton>
              <ToggleButton id="green" variant="secondary">
                <ColorSwatch color="#0f0" size="sm" />
                Green
              </ToggleButton>
              <ToggleButton id="beige" variant="secondary">
                <ColorSwatch color="#f5f5dc" size="sm" />
                Beige
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function ShoppingCartCard() {
  const cart = [
    {
      title: "Poncho #4",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy",
      price: 79,
      size: "M",
      count: 1,
    },
    {
      title: "Jeans #8",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy",
      price: 59,
      size: "30",
      count: 2,
    },
    {
      title: "Sneakers #14",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=center",
      price: 116,
      size: "8",
      count: 1,
    },
  ];

  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="4">
          <Grid columns="auto 1fr auto auto" columnGap="3" alignItems="center">
            {cart.map((item) => (
              <Fragment key={item.title}>
                <Avatar
                  src={item.image}
                  alt={item.title}
                  fallback={item.title.charAt(0)}
                  size="lg"
                />
                <Flex direction="column" gap="1">
                  <Text weight="medium">{item.title}</Text>
                  <Text variant="secondary" size="sm">
                    Size {item.size}
                  </Text>
                </Flex>
                <Select defaultValue={item.count.toString()}>
                  <SelectItem id="1">1</SelectItem>
                  <SelectItem id="2">2</SelectItem>
                  <SelectItem id="3">3</SelectItem>
                  <SelectItem id="4">4</SelectItem>
                  <SelectItem id="5">5</SelectItem>
                  <SelectItem id="6">6</SelectItem>
                  <SelectItem id="7">7</SelectItem>
                  <SelectItem id="8">8</SelectItem>
                  <SelectItem id="9">9</SelectItem>
                  <SelectItem id="10">10</SelectItem>
                </Select>
                <Text size="sm" variant="secondary">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price * item.count)}
                </Text>
              </Fragment>
            ))}
          </Grid>
          <Separator />
          <Flex gap="2" justify="between">
            <div></div>
            <Button>Go to checkout</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function Delivery() {
  return (
    <Card size="sm">
      <Flex direction="column" gap="5">
        <CardHeader>
          <CardTitle>Delivery</CardTitle>
          <CardHeaderAction>
            <Badge variant="warning" size="sm">
              Guaranteed
            </Badge>
          </CardHeaderAction>
        </CardHeader>
        <CardBody>
          <Flex direction="column" gap="1.5">
            <Text weight="semibold">Tomorrow</Text>
            <Text variant="secondary" size="sm">
              12:00 pm - 2:00 pm
            </Text>
          </Flex>

          <Flex direction="column" gap="1.5">
            <Text weight="semibold">Luna Rodriguez</Text>
            <Text variant="secondary" size="sm">
              9876 Maple Avenue
              <br />
              Cityville, WA 54321
            </Text>
          </Flex>
        </CardBody>
        <CardImage src="https://workos.imgix.net/images/bc04b345-f225-488d-8a46-1811096d0c3b.png?auto=format&fit=clip&q=90&w=840&h=654" />
        <CardFooter>
          <Button variant="secondary">Edit</Button>
          <Button>Confirm</Button>
        </CardFooter>
      </Flex>
    </Card>
  );
}

function Bookmarks() {
  const bookmarks = [
    {
      title: "Jeans #8",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy",
      price: 118,
    },
    {
      title: "Jacket #3",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=entropy&w=272&h=272&q=80",
      price: 49,
    },
    {
      title: "Pants #10",
      image:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80",
      price: 32,
    },
    {
      title: "Shirt #11",
      image:
        "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80",
      price: 39,
    },
  ];

  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Bookmarks</CardTitle>
        <CardHeaderAction>
          <Button variant="tertiary">Buy all</Button>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <Grid columns="1fr 1fr" columnGap="2">
          {bookmarks.map((bookmark) => (
            <Flex direction="column" gap="2" key={bookmark.title}>
              <AspectRatio aspectRatio={1}>
                <AspectRatioImage src={bookmark.image} />
              </AspectRatio>
              <div>
                <Text weight="medium" size="sm">
                  {bookmark.title}
                </Text>
                <Text variant="secondary" size="sm">
                  {", "}
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(bookmark.price)}
                </Text>
              </div>
            </Flex>
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
}

function DiscardedCard() {
  return (
    <Card>
      <CardBody>
        <Flex direction="column" gap="4" align="center">
          <Shredder size={48} />
          <Text weight="semibold" size="lg">
            Product discarded
          </Text>
          <SmallBody variant="secondary">
            It's still available in the <Link>archive.</Link>
          </SmallBody>
          <Flex gap="2">
            <Button variant="secondary">Undo</Button>
            <Button>Done</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function EditProductCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit product</CardTitle>
      </CardHeader>
      <CardBody>
        <Grid columns="1fr 140px" columnGap="2">
          <TextField label="Title" defaultValue="Sneakers #12" />
          <NumberField
            label="Price"
            defaultValue={116}
            formatOptions={{
              style: "currency",
              currency: "USD",
            }}
          />
        </Grid>
        <Flex direction="column" gap="2">
          <LabelText>Media</LabelText>
          <Grid columns="1fr 1fr 1fr" columnGap="2">
            <AspectRatio>
              <AspectRatioImage src="https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=bottom" />
            </AspectRatio>
            <AspectRatio>
              <AspectRatioImage src="https://workos.imgix.net/images/c773ee38-9136-49d1-804c-6d166dad9c65.png?auto=format&fit=clip&q=80w=400&h=400" />
            </AspectRatio>
            <AspectRatio>
              <FileDropZone style={styles.heightFull}>
                <IconButton variant="secondary" label="Upload image">
                  <Upload />
                </IconButton>
              </FileDropZone>
            </AspectRatio>
          </Grid>
        </Flex>
        <TextArea
          label="Description"
          defaultValue="This is a description of the product."
          rows={4}
        />
        <Flex direction="column" gap="2">
          <Text weight="semibold">Material</Text>
          <ToggleButtonGroup
            variant="separate"
            itemsPerRow={3}
            selectionMode="single"
          >
            <ToggleButton id="synthetic" variant="secondary">
              Synthetic
            </ToggleButton>
            <ToggleButton id="wool" variant="secondary">
              Wool
            </ToggleButton>
            <ToggleButton id="cotton" variant="secondary">
              Cotton
            </ToggleButton>
            <ToggleButton id="linen" variant="secondary">
              Linen
            </ToggleButton>
            <ToggleButton id="denim" variant="secondary">
              Denim
            </ToggleButton>
            <ToggleButton id="leather" variant="secondary">
              Leather
            </ToggleButton>
            <ToggleButton id="silk" variant="secondary">
              Silk
            </ToggleButton>
            <ToggleButton id="chiffon" variant="secondary">
              Chiffon
            </ToggleButton>
            <ToggleButton id="other" variant="secondary">
              Other
            </ToggleButton>
          </ToggleButtonGroup>
        </Flex>
        <Flex direction="column" gap="2">
          <Text weight="semibold">Main Color</Text>
          <ToggleButtonGroup
            variant="separate"
            itemsPerRow={3}
            selectionMode="single"
          >
            <ToggleButton id="white" variant="secondary">
              <ColorSwatch color="#fff" size="sm" />
              White
            </ToggleButton>
            <ToggleButton id="grey" variant="secondary">
              <ColorSwatch color="#808080" size="sm" />
              Grey
            </ToggleButton>
            <ToggleButton id="black" variant="secondary">
              <ColorSwatch color="#000" size="sm" />
              Black
            </ToggleButton>
            <ToggleButton id="red" variant="secondary">
              <ColorSwatch color="#f00" size="sm" />
              Red
            </ToggleButton>
            <ToggleButton id="pink" variant="secondary">
              <ColorSwatch color="#f0f" size="sm" />
              Pink
            </ToggleButton>
            <ToggleButton id="violet" variant="secondary">
              <ColorSwatch color="#800080" size="sm" />
              Violet
            </ToggleButton>
            <ToggleButton id="blue" variant="secondary">
              <ColorSwatch color="#00f" size="sm" />
              Blue
            </ToggleButton>
            <ToggleButton id="green" variant="secondary">
              <ColorSwatch color="#0f0" size="sm" />
              Green
            </ToggleButton>
            <ToggleButton id="beige" variant="secondary">
              <ColorSwatch color="#f5f5dc" size="sm" />
              Beige
            </ToggleButton>
          </ToggleButtonGroup>
        </Flex>
        <Flex direction="column" gap="2">
          <Text weight="semibold">Size</Text>
          <ToggleButtonGroup
            variant="separate"
            itemsPerRow={3}
            selectionMode="single"
          >
            <ToggleButton id="xs" variant="secondary">
              XS
            </ToggleButton>
            <ToggleButton id="s" variant="secondary">
              S
            </ToggleButton>
            <ToggleButton id="m" variant="secondary">
              M
            </ToggleButton>
            <ToggleButton id="l" variant="secondary">
              L
            </ToggleButton>
            <ToggleButton id="xl" variant="secondary">
              XL
            </ToggleButton>
            <ToggleButton id="xxl" variant="secondary">
              XXL
            </ToggleButton>
          </ToggleButtonGroup>
        </Flex>
      </CardBody>
    </Card>
  );
}

function ShipmentTracking() {
  const trackingEvents = [
    {
      date: "July 1, 2023, 10:28 AM",
      description: "Package picked up from the warehouse in Phoenix, TX",
    },
    {
      date: "July 1, 2023, 12:43 PM",
      description: "Departed from Phoenix, TX",
    },
    {
      date: "July 2, 2023, 3:20 PM",
      description: "Arrived at a sorting facility in Seattle, WA",
    },
    {
      date: "July 2, 2023, 7:31 PM",
      description: "Departed Seattle, WA",
    },
    {
      date: "July 2, 2023, 11:03 PM",
      description: "Arrived to a facility in Greenville, WA",
    },
  ];

  return (
    <Card>
      <CardBody>
        <Flex direction="column" gap="6" style={styles.heightFull}>
          <Flex direction="column" gap="4">
            <Text weight="semibold" size="lg">
              Shipment tracking
            </Text>
            <SearchField placeholder="Enter package number" />
          </Flex>

          <Grid columns="2fr 3fr" columnGap="6" style={styles.grow}>
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="1">
                <Text variant="secondary" size="xs">
                  Package number
                </Text>
                <Text weight="medium" size="sm">
                  LASC966124786554
                </Text>
              </Flex>

              <Flex direction="column" gap="1">
                <Text variant="secondary" size="xs">
                  Order number
                </Text>
                <Text weight="medium" size="sm">
                  #94356
                </Text>
              </Flex>

              <Flex direction="column" gap="1">
                <Text variant="secondary" size="xs">
                  Ship to
                </Text>
                <Text weight="medium" leading="lg" size="sm">
                  Sophia Martinez
                  <br />
                  512 Oakwood Avenue, Unit 201
                  <br />
                  Greenville, SC 67890
                </Text>
              </Flex>

              <Grid columns="auto auto auto" columnGap="6" alignItems="center">
                <Flex direction="column" gap="1">
                  <Text variant="secondary" size="sm">
                    Status
                  </Text>
                  <Badge variant="success" size="sm">
                    On time
                  </Badge>
                </Flex>
                <Flex direction="column" gap="1">
                  <Text variant="secondary" size="sm">
                    Weight
                  </Text>
                  <Text weight="medium">3 lb</Text>
                </Flex>
                <Flex direction="column" gap="1">
                  <Text variant="secondary" size="sm">
                    Order total
                  </Text>
                  <Text weight="medium">$243</Text>
                </Flex>
              </Grid>
            </Flex>

            <Flex direction="column" gap="3" style={styles.timelineContainer}>
              <div {...stylex.props(styles.timelineLine)} />
              {trackingEvents.map((event, index) => (
                <Flex
                  // eslint-disable-next-line @eslint-react/no-array-index-key
                  key={index}
                  align="start"
                  gap="3"
                  style={styles.timelineItem}
                >
                  <div {...stylex.props(styles.timelineDot)} />
                  <Flex direction="column" gap="1">
                    <Text weight="medium" size="sm">
                      {event.date}
                    </Text>
                    <Text variant="secondary" size="sm" leading="lg">
                      {event.description}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Grid>
        </Flex>
      </CardBody>
    </Card>
  );
}

function TopCustomersCard() {
  const customers = [
    {
      name: "Elijah Wilson",
      customerSince: "November 3, 2017",
      address: "735 Pine Street, Apartment 4C, Portland, OR 34567",
      sales: 15_432.56,
      orders: 42,
    },
    {
      name: "Cameron Johnson",
      customerSince: "June 10, 2020",
      address: "2465 Main Street, Apt 3B, Springfield, OH 12345",
      sales: 13_976.43,
      orders: 12,
    },
    {
      name: "Sophia Martinez",
      customerSince: "September 27, 2019",
      address: "512 Oakwood Avenue, Unit 201, Greenville, SC 67890",
      sales: 11_653.03,
      orders: 34,
    },
    {
      name: "Nathan Thompson",
      customerSince: "May 5, 2018",
      address: "837 Maple Lane, Suite 102, Lexington, KY 45678",
      sales: 8245.92,
      orders: 22,
    },
    {
      name: "Olivia Adams",
      customerSince: "January 12, 2021",
      address: "1123 Elmwood Drive, Boulder, CO 23456",
      sales: 6789.21,
      orders: 18,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top customers</CardTitle>
      </CardHeader>
      <CardBody>
        <Flex gap="4" direction="column">
          <Flex gap="3" align="center">
            <SearchField
              placeholder="Search"
              variant="secondary"
              style={styles.grow}
            />
            <Select defaultValue="all-customers" variant="secondary">
              <SelectItem id="all-customers">All customers</SelectItem>
              <SelectItem id="new-customers">New customers</SelectItem>
              <SelectItem id="vip-customers">VIP customers</SelectItem>
            </Select>
          </Flex>
        </Flex>
        <Flex direction="column" gap="6">
          {customers.map((customer) => (
            <Flex
              key={customer.name}
              justify="between"
              align="center"
              gap="8"
              {...stylex.props(styles.customerRow)}
            >
              <Flex direction="column" gap="1" style={styles.grow}>
                <Text weight="semibold">{customer.name}</Text>
                <Text variant="secondary" size="sm">
                  Customer since {customer.customerSince}
                </Text>
                <Text variant="secondary" size="xs">
                  {customer.address}
                </Text>
              </Flex>
              <Flex gap="6">
                <Flex direction="column" gap="1" align="end">
                  <Text variant="secondary" size="sm">
                    Sales
                  </Text>
                  <Text weight="semibold" size="lg">
                    {Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(customer.sales)}
                  </Text>
                </Flex>
                <Separator orientation="vertical" style={styles.separator} />
                <Flex direction="column" gap="1" align="start">
                  <Text variant="secondary" size="sm">
                    Orders
                  </Text>
                  <Text weight="semibold" size="lg">
                    {customer.orders}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}

function MarketingCallout() {
  const fashionItems = [
    "Men's Polo",
    "Shirt",
    "Sneakers",
    "Jeans",
    "T-shirt",
    "Pants",
    "Socks",
    "Watch",
    "Belt",
    "Bag",
    "Suit",
    "Shorts",
    "Shoes",
    "Women's Blouse",
    "Dress",
    "Skirt",
    "Heels",
    "Sandals",
    "Scarf",
    "Earrings",
    "Bracelet",
    "Necklace",
    "Glasses",
    "Perfume",
  ];

  return (
    <Card>
      <Grid columns="1fr 1fr 1fr">
        {/* Top Left - Dare to stand out */}
        <AspectRatio style={styles.cardSection} rounded={false}>
          <Flex direction="column" gap="4" justify="center" align="center">
            <Text weight="bold" size="2xl">
              Dare to stand out
            </Text>
            <Text>Striking patterns, vibrant hues, and unusual designs.</Text>
            <Button variant="secondary">Shop now</Button>
          </Flex>
        </AspectRatio>

        {/* Top Middle - Woman with sunglasses */}
        <AspectRatio rounded={false}>
          <AspectRatioImage
            src="https://images.unsplash.com/photo-1514866747592-c2d279258a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
            alt="Woman with sunglasses"
          />
        </AspectRatio>

        {/* Top Right - Fashion items list */}
        <AspectRatio style={styles.cardSection} rounded={false}>
          <Flex wrap gap="1">
            {fashionItems.map((item, index) => (
              // eslint-disable-next-line @eslint-react/no-array-index-key
              <Text variant="secondary" key={index} leading="2xl" size="sm">
                {item}
              </Text>
            ))}
          </Flex>
        </AspectRatio>

        {/* Bottom Left - Woman with plaid shirt */}
        <AspectRatio rounded={false}>
          <AspectRatioImage
            src="https://plus.unsplash.com/premium_photo-1668485968648-f29fe5157463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
            alt="Woman with plaid shirt"
          />
        </AspectRatio>

        {/* Bottom Middle - Discount callout */}
        <AspectRatio style={styles.cardSection} rounded={false}>
          <Flex direction="column" gap="2" justify="between" align="center">
            <Text>15 - 30 Mar</Text>
            <Text weight="bold" size="4xl">
              -25%
            </Text>
            <Text>Get our boldest designs.</Text>
          </Flex>
        </AspectRatio>

        {/* Bottom Right - Man with floral jacket */}
        <AspectRatio rounded={false}>
          <AspectRatioImage
            src="https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=700&q=80"
            alt="Man with floral jacket"
          />
        </AspectRatio>
      </Grid>
    </Card>
  );
}

export function EcommerceApp() {
  return (
    <Flex gap="4" style={styles.main}>
      <Flex direction="column" gap="4" style={styles.skinny}>
        <SmallProductCard />
        <SmallProductCardWithBuying />
        <ProductOptionsCard />
      </Flex>
      <Flex direction="column" gap="4" style={styles.skinny}>
        <Delivery />
        <Bookmarks />
        <ShoppingCartCard />
      </Flex>
      <Flex direction="column" gap="4" style={styles.medium}>
        <DiscardedCard />
        <EditProductCard />
      </Flex>
      <Flex direction="column" gap="4" style={styles.grow}>
        <TopCustomersCard />
        <ShipmentTracking />
        <MarketingCallout />
      </Flex>
    </Flex>
  );
}
