import { Flex } from "@/components/flex";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderAction,
  CardTitle,
} from "@/components/card";
import { spacing } from "../components/theme/spacing.stylex";
import { primaryColor } from "../components/theme/semantic-color.stylex";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/button";
import { AspectRatio, AspectRatioImage } from "@/components/aspect-ratio";
import { Text } from "@/components/typography/text";
import { Heart, Star } from "lucide-react";
import { IconButton } from "@/components/icon-button";
import { TextField } from "@/components/text-field";
import { Checkbox, CheckboxGroup } from "@/components/checkbox";
import { Separator } from "@/components/separator";

const styles = stylex.create({
  main: {
    padding: spacing["4"],
    width: 2000,
  },
  skinny: {
    width: 500,
  },
  queueCard: {
    width: 280,
  },
  grow: {
    flex: 1,
  },
  albumArt: {
    width: 52,
    height: 52,
  },
  albumCardArt: {
    width: "60%",
  },
  starOutline: {
    color: primaryColor.solid1,
  },
  filled: {
    color: primaryColor.solid1,
    fill: primaryColor.solid1,
  },
  membershipTier: {
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["3"],
    paddingBottom: spacing["3"],
    marginLeft: `calc(${spacing["3"]} * -1)`,
    marginRight: `calc(${spacing["3"]} * -1)`,
    borderRadius: spacing["2"],
    cursor: "pointer",
    backgroundColor: {
      ":hover": primaryColor.component2,
    },
  },
  selectedTier: {
    backgroundColor: {
      default: primaryColor.component2,
      ":hover": primaryColor.component3,
    },
    color: primaryColor.text2,
  },
  priceBox: {
    padding: spacing["2"],
    borderRadius: spacing["1"],
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: primaryColor.border2,
    backgroundColor: primaryColor.bgSubtle,
    color: primaryColor.text1,
  },
  selectedPriceBox: {
    borderColor: primaryColor.solid2,
    backgroundColor: primaryColor.solid1,
    color: primaryColor.textContrast,
  },
  membershipCard: {
    gap: spacing["2"],
  },
});

function MembershipCard() {
  return (
    <Card style={styles.membershipCard}>
      <CardHeader>
        <CardTitle>Membership</CardTitle>
        <CardHeaderAction>
          <Button variant="tertiary">Done</Button>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="5">
          {/* Membership Tiers */}
          <Flex direction="column" gap="2">
            {/* Individual */}
            <Flex
              align="center"
              justify="between"
              style={styles.membershipTier as unknown as stylex.StyleXStyles}
            >
              <Flex direction="column" gap="2">
                <Text weight="medium">Individual</Text>
                <Text variant="secondary" size="sm">
                  Sign up with 1 account
                </Text>
              </Flex>
              <Text {...stylex.props(styles.priceBox)}>$4.99</Text>
            </Flex>

            {/* Duo - Selected */}
            <Flex
              align="center"
              justify="between"
              style={
                [
                  styles.membershipTier,
                  styles.selectedTier,
                ] as unknown as stylex.StyleXStyles
              }
            >
              <Flex direction="column" gap="1">
                <Text weight="medium">Duo</Text>
                <Text variant="secondary" size="sm">
                  Sign up 2 accounts
                </Text>
              </Flex>
              <Text style={[styles.priceBox, styles.selectedPriceBox]}>
                $6.99
              </Text>
            </Flex>

            {/* Family */}
            <Flex
              align="center"
              justify="between"
              style={[styles.membershipTier] as unknown as stylex.StyleXStyles}
            >
              <Flex direction="column" gap="1">
                <Text weight="medium">Family</Text>
                <Text variant="secondary" size="sm">
                  Sign up to 6 accounts
                </Text>
              </Flex>
              <Text style={styles.priceBox}>$12.99</Text>
            </Flex>
          </Flex>

          <Separator />

          <Flex direction="column" gap="4">
            <Text variant="secondary" size="sm">
              Your next payment is $6.99 on November 14, 2025
            </Text>
            <Button variant="critical-outline" size="sm">
              Cancel subscription
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your profile</CardTitle>
        <CardHeaderAction>
          <Button variant="tertiary" size="sm">
            Cancel
          </Button>
          <Button variant="tertiary" size="sm">
            Save
          </Button>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="6">
          <Flex direction="column" gap="4">
            <TextField label="Name" defaultValue="Vlad Moroz" />
            <TextField label="Username" defaultValue="@vladmoroz" />
            <TextField label="Email" defaultValue="hi@vladmoroz.com" />
          </Flex>
          <CheckboxGroup
            label="Privacy"
            defaultValue={[
              "display-listening-history",
              "show-playlists-in-search",
            ]}
          >
            <Checkbox value="display-listening-history">
              Display my listening history
            </Checkbox>
            <Checkbox value="everyone-can-follow-activity">
              Everyone can follow my activity
            </Checkbox>
            <Checkbox value="show-playlists-in-search">
              Show my playlists in search
            </Checkbox>
          </CheckboxGroup>
          <Flex direction="column" gap="4">
            <Text weight="medium" size="lg">
              Danger zone
            </Text>
            <Flex direction="column" gap="2">
              <Button variant="critical-outline">Reset recommendations</Button>
              <Button variant="critical-outline">Delete profile</Button>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function AlbumCard() {
  return (
    <Card>
      <CardBody>
        <Flex direction="column" gap="6" align="center">
          <AspectRatio style={[styles.albumCardArt]}>
            <AspectRatioImage
              src="https://workos.imgix.net/images/e35b46dc-4384-43d1-932c-24fa44e212cd.png?auto=format&fit=clip&q=80"
              alt="King Krule - The OOZ"
            />
          </AspectRatio>
          <Flex direction="row" gap="1">
            {[1, 2, 3, 4, 5].map((star) =>
              4 >= star ? (
                <Star {...stylex.props(styles.filled)} />
              ) : (
                <Star {...stylex.props(styles.starOutline)} />
              ),
            )}
          </Flex>
          <Text weight="bold" size="2xl">
            King Krule - The OOZ
          </Text>
          <Text variant="secondary" align="center">
            A dark and introspective album that showcases King Krule's
            distinctive blend of genres, while delivering hauntingly raw and
            poetic lyrics.
          </Text>
          <Flex direction="row" gap="2" align="center">
            <Button variant="primary">Listen Now</Button>
            <IconButton label="Like" variant="outline">
              <Heart />
            </IconButton>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function QueueCard() {
  const songs = [
    {
      id: 1,
      title: "The Less I Know the Better",
      artist: "Tame Impala",
      album: "Currents",
      duration: "3:39",
      albumArt:
        "https://workos.imgix.net/images/79645741-51e0-47fc-bb40-2fa66cf9f68e.png?auto=format&fit=clip&q=80&w=192",
    },
    {
      id: 2,
      title: "Pieces",
      artist: "Villagers",
      album: "Becoming a Jackal",
      duration: "5:25",
      albumArt:
        "https://workos.imgix.net/images/95ff9b99-36f3-46d8-a3fe-9387fd7c3c32.png?auto=format&fit=clip&q=80&w=192",
    },
    {
      id: 3,
      title: "Cola",
      artist: "Arlo Parks",
      album: "Super Sad Generation",
      duration: "3:50",
      albumArt:
        "https://workos.imgix.net/images/945c66a9-afd9-4b1c-8eb0-4ce3992731ca.png?auto=format&fit=clip&q=80&w=192",
    },
    {
      id: 4,
      title: "Do the Astral Plane",
      artist: "Flying Lotus",
      album: "Cosmogramma",
      duration: "3:58",
      albumArt:
        "https://workos.imgix.net/images/3d9075e4-c232-4fb5-a1a4-b0a33d669192.png?auto=format&fit=clip&q=80&w=192",
    },
    {
      id: 5,
      title: "Left Hand Free",
      artist: "Alt-J",
      album: "This Is All Yours",
      duration: "2:54",
      albumArt:
        "https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Queue</CardTitle>
        <CardHeaderAction>
          <Button variant="tertiary" size="sm">
            Clear
          </Button>
          <Button variant="tertiary" size="sm">
            Repeat
          </Button>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="3">
          {songs.map((song) => (
            <Flex key={song.id} gap="3" align="center">
              <AspectRatio style={styles.albumArt}>
                <AspectRatioImage src={song.albumArt} alt={song.title} />
              </AspectRatio>
              <Flex direction="column" gap="1.5" style={styles.grow}>
                <Text weight="medium">{song.title}</Text>
                <Text variant="secondary" size="sm">
                  {song.artist} - {song.album}
                </Text>
              </Flex>
              <Text variant="secondary" size="sm">
                {song.duration}
              </Text>
            </Flex>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}

export function Music() {
  return (
    <Flex gap="4" style={styles.main}>
      <Flex direction="column" gap="4" style={styles.skinny}>
        <MembershipCard />
        <ProfileCard />
        <QueueCard />
        <AlbumCard />
      </Flex>
    </Flex>
  );
}
