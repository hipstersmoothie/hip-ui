import * as stylex from "@stylexjs/stylex";
import {
  Volume,
  Volume2,
  GripVertical,
  BarChart3,
  Box,
  MoveHorizontal,
  Heart,
  Star,
} from "lucide-react";
import { useState } from "react";

import { AspectRatio, AspectRatioImage } from "@/components/aspect-ratio";
import { Button } from "@/components/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardHeaderAction,
  CardTitle,
} from "@/components/card";
import { Checkbox, CheckboxGroup } from "@/components/checkbox";
import { Flex } from "@/components/flex";
import { Grid } from "@/components/grid";
import { IconButton } from "@/components/icon-button";
import { Separator } from "@/components/separator";
import { Slider } from "@/components/slider";
import { Switch } from "@/components/switch";
import { TextField } from "@/components/text-field";
import { ToggleButton } from "@/components/toggle-button";
import { Body } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { primaryColor } from "../components/theme/semantic-color.stylex";
import { spacing } from "../components/theme/spacing.stylex";

const styles = stylex.create({
  main: {
    padding: spacing["4"],
    width: 2000,
  },
  skinny: {
    width: 500,
  },
  grow: {
    flexGrow: 1,
  },
  albumArt: {
    height: 52,
    width: 52,
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
    backgroundColor: {
      ":hover": primaryColor.component2,
    },
    borderRadius: spacing["2"],
    cursor: "pointer",
    marginLeft: `calc(${spacing["3"]} * -1)`,
    marginRight: `calc(${spacing["3"]} * -1)`,
    paddingBottom: spacing["3"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["3"],
  },
  selectedTier: {
    backgroundColor: {
      default: primaryColor.component2,
      ":hover": primaryColor.component3,
    },
    color: primaryColor.text2,
  },
  priceBox: {
    backgroundColor: primaryColor.bgSubtle,
    borderColor: primaryColor.border2,
    borderRadius: spacing["1"],
    borderStyle: "solid",
    borderWidth: 1,
    color: primaryColor.text1,
    padding: spacing["2"],
  },
  selectedPriceBox: {
    backgroundColor: primaryColor.solid1,
    borderColor: primaryColor.solid2,
    color: primaryColor.textContrast,
  },
  membershipCard: {
    gap: spacing["2"],
  },
  lyricsBody: {
    height: spacing["72"],
    overflow: "auto",
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
                <Star key={star} {...stylex.props(styles.filled)} />
              ) : (
                <Star key={star} {...stylex.props(styles.starOutline)} />
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

function SoundCard() {
  const [normalize, setNormalize] = useState(false);
  const [equalizer, setEqualizer] = useState(false);
  const [audio3d, setAudio3d] = useState(false);
  const [crossFade, setCrossFade] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sound</CardTitle>
        <CardHeaderAction>
          <Text variant="secondary" size="sm">
            Yamaha THR
          </Text>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="2">
            <Flex direction="row" align="center" justify="between" gap="3">
              <Volume size={20} color="#6b7280" />
              <Slider
                defaultValue={67}
                minValue={0}
                maxValue={100}
                step={1}
                style={styles.grow}
                showValueLabel={false}
                aria-label="Volume"
              />
              <Volume2 size={20} color="#6b7280" />
            </Flex>
          </Flex>

          <Grid columns="repeat(4, 1fr)" columnGap="3">
            <Flex direction="column" gap="2" align="center">
              <ToggleButton
                aria-label="Normalize"
                variant="outline"
                aria-labelledby="normalize-label"
                isSelected={normalize}
                onChange={(e) => setNormalize(e)}
              >
                <GripVertical size={24} />
              </ToggleButton>
              <Flex direction="column" gap="1" align="center">
                <Text id="normalize-label" weight="medium" size="sm">
                  Normalize
                </Text>
                <Text variant="secondary" size="xs">
                  {normalize ? "On" : "Off"}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" gap="2" align="center">
              <ToggleButton
                aria-label="Equalizer"
                variant="outline"
                aria-labelledby="equalizer-label"
                isSelected={equalizer}
                onChange={(e) => setEqualizer(e)}
              >
                <BarChart3 size={24} />
              </ToggleButton>
              <Flex direction="column" gap="1" align="center">
                <Text id="equalizer-label" weight="medium" size="sm">
                  Equalizer
                </Text>
                <Text variant="secondary" size="xs">
                  {equalizer ? "On" : "Off"}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" gap="2" align="center">
              <ToggleButton
                aria-label="3D Audio"
                aria-labelledby="3d-audio-label"
                variant="outline"
                isSelected={audio3d}
                onChange={(e) => setAudio3d(e)}
              >
                <Box size={24} />
              </ToggleButton>
              <Flex direction="column" gap="1" align="center">
                <Text id="3d-audio-label" weight="medium" size="sm">
                  3D Audio
                </Text>
                <Text variant="secondary" size="xs">
                  {audio3d ? "On" : "Off"}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" gap="2" align="center">
              <ToggleButton
                aria-label="Cross-Fade"
                aria-labelledby="cross-fade-label"
                variant="outline"
                isSelected={crossFade}
                onChange={(e) => setCrossFade(e)}
              >
                <MoveHorizontal size={24} />
              </ToggleButton>
              <Flex direction="column" gap="1" align="center">
                <Text id="cross-fade-label" weight="medium" size="sm">
                  Cross-Fade
                </Text>
                <Text variant="secondary" size="xs">
                  {crossFade ? "On" : "Off"}
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </CardBody>
    </Card>
  );
}

function SettingsCard() {
  const [automaticDownloads, setAutomaticDownloads] = useState(true);
  const [losslessAudio, setLosslessAudio] = useState(true);
  const [spatialAudio, setSpatialAudio] = useState(false);
  const [normalizeVolume, setNormalizeVolume] = useState(true);
  const [maxVolume, setMaxVolume] = useState(75);
  const [crossfade, setCrossfade] = useState(5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="6">
          {/* Automatic downloads */}
          <Flex direction="column" gap="1">
            <Flex align="center" justify="between">
              <Flex direction="column" gap="1">
                <Text weight="medium" id="automatic-downloads-label">
                  Automatic downloads
                </Text>
                <Text
                  variant="secondary"
                  size="sm"
                  id="automatic-downloads-description"
                >
                  Automatically download music when added to your library
                </Text>
              </Flex>
              <Switch
                isSelected={automaticDownloads}
                onChange={setAutomaticDownloads}
                aria-labelledby="automatic-downloads-label"
                aria-describedby="automatic-downloads-description"
              />
            </Flex>
          </Flex>

          {/* Lossless audio */}
          <Flex direction="column" gap="1">
            <Flex align="center" justify="between">
              <Flex direction="column" gap="1">
                <Text weight="medium" id="lossless-audio-label">
                  Lossless audio
                </Text>
                <Text
                  variant="secondary"
                  size="sm"
                  id="lossless-audio-description"
                >
                  Preserve every detail of the original audio, but consume
                  significantly more data
                </Text>
              </Flex>
              <Switch
                isSelected={losslessAudio}
                onChange={setLosslessAudio}
                aria-labelledby="lossless-audio-label"
                aria-describedby="lossless-audio-description"
              />
            </Flex>
          </Flex>

          {/* Spatial audio */}
          <Flex direction="column" gap="1">
            <Flex align="center" justify="between">
              <Flex direction="column" gap="1">
                <Text weight="medium" id="spatial-audio-label">
                  Spatial audio
                </Text>
                <Text
                  variant="secondary"
                  size="sm"
                  id="spatial-audio-description"
                >
                  Enhancing the perception of audio in space
                </Text>
              </Flex>
              <Switch
                isSelected={spatialAudio}
                onChange={setSpatialAudio}
                aria-labelledby="spatial-audio-label"
                aria-describedby="spatial-audio-description"
              />
            </Flex>
          </Flex>

          {/* Normalize volume */}
          <Flex direction="column" gap="1">
            <Flex align="center" justify="between">
              <Flex direction="column" gap="1">
                <Text weight="medium" id="normalize-volume-label">
                  Normalize volume
                </Text>
                <Text
                  variant="secondary"
                  size="sm"
                  id="normalize-volume-description"
                >
                  Set the same volume level for all tracks
                </Text>
              </Flex>
              <Switch
                isSelected={normalizeVolume}
                onChange={setNormalizeVolume}
                aria-labelledby="normalize-volume-label"
                aria-describedby="normalize-volume-description"
              />
            </Flex>
          </Flex>

          {/* Maximum volume */}
          <Flex direction="column" gap="2">
            <Flex direction="column" gap="1">
              <Text weight="medium">Maximum volume</Text>
              <Text variant="secondary" size="sm">
                Limit the maximum volume to protect hearing
              </Text>
            </Flex>

            <Flex gap="4" align="center">
              <Text variant="secondary" size="xs">
                0%
              </Text>
              <Slider
                value={maxVolume}
                onChange={setMaxVolume}
                minValue={0}
                maxValue={100}
                step={1}
                showValueLabel={false}
                style={styles.grow}
              />
              <Text variant="secondary" size="xs">
                100%
              </Text>
            </Flex>
          </Flex>

          {/* Crossfade */}
          <Flex direction="column" gap="2">
            <Flex direction="column" gap="1">
              <Text weight="medium">Crossfade</Text>
              <Text variant="secondary" size="sm">
                Smoothly fade out into the next song.
              </Text>
            </Flex>

            <Flex gap="4" align="center">
              <Text variant="secondary" size="xs">
                Off
              </Text>
              <Slider
                value={crossfade}
                onChange={setCrossfade}
                minValue={0}
                maxValue={10}
                step={1}
                showValueLabel={false}
                style={styles.grow}
              />
              <Text variant="secondary" size="xs">
                10s
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function LyricsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lyrics</CardTitle>
        <CardDescription>King Krule - Biscuit Town</CardDescription>
      </CardHeader>

      <CardBody style={styles.lyricsBody}>
        <Flex direction="column" gap="2">
          <Body>I seem to sink lower, gazing in the rays of the solar</Body>
          <Body>In fact, we made a pact, but now I think it's over</Body>
          <Body>Red on white but he sipped on KA soda</Body>
          <Body>
            Damn, that's Coca-Cola, <span>as TV sports the Olympic ebola</span>
          </Body>
          <Body>
            I think we might be bipolar, I think she thinks I'm bipolar
          </Body>
          <Body>He left the crime scene without the Motorola</Body>
          <Body>Still had dreams of being Gianfranco Zola</Body>
          <Body>For at least for now, it's all over</Body>
          <Body>Yeah, at least for now, it's all over</Body>
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
      <Flex direction="column" gap="4" style={styles.skinny}>
        <SoundCard />
        <SettingsCard />
      </Flex>
      <Flex direction="column" gap="4" style={styles.skinny}>
        <LyricsCard />
      </Flex>
    </Flex>
  );
}
