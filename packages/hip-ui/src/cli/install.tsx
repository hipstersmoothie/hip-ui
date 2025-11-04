/* eslint-disable react-refresh/only-export-components */

import { Option, Select, TextInput } from "@inkjs/ui";
import { render, Box, Text } from "ink";
import { exec } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import * as React from "react";

import { alertDialogConfig } from "../components/alert-dialog/alert-dialog-config.js";
import { aspectRatioConfig } from "../components/aspect-ratio/aspect-ratio-config.js";
import { avatarConfig } from "../components/avatar/avatar-config.js";
import { badgeConfig } from "../components/badge/badge-config.js";
import { breadcrumbsConfig } from "../components/breadcrumbs/breadcrumbs-config.js";
import { buttonGroupConfig } from "../components/button-group/button-group-config.js";
import { buttonConfig } from "../components/button/button-config.js";
import { calendarConfig } from "../components/calendar/calendar-config.js";
import { cardConfig } from "../components/card/card-config.js";
import { checkboxConfig } from "../components/checkbox/checkbox-config.js";
import { colorAreaConfig } from "../components/color-area/color-area-config.js";
import { colorFieldConfig } from "../components/color-field/color-field-config.js";
import { colorPickerConfig } from "../components/color-picker/color-picker-config.js";
import { colorSliderConfig } from "../components/color-slider/color-slider-config.js";
import { colorSwatchPickerConfig } from "../components/color-swatch-picker/color-swatch-picker-config.js";
import { colorSwatchConfig } from "../components/color-swatch/link-config.js";
import { colorWheelConfig } from "../components/color-wheel/color-wheel-config.js";
import { comboboxConfig } from "../components/combobox/combobox-config.js";
import { commandMenuConfig } from "../components/command-menu/command-menu-config.js";
import { contextMenuConfig } from "../components/context-menu/context-menu-config.js";
import { dateFieldConfig } from "../components/date-field/date-field-config.js";
import { datePickerConfig } from "../components/date-picker/date-picker-config.js";
import { dateRangePickerConfig } from "../components/date-range-picker/date-range-picker-config.js";
import { dialogConfig } from "../components/dialog/dialog-config.js";
import { disclosureGroupConfig } from "../components/disclosure-group/disclosure-group-config.js";
import { disclosureConfig } from "../components/disclosure/disclosure-config.js";
import { drawerConfig } from "../components/drawer/drawer-config.js";
import { fileDropZoneConfig } from "../components/file-drop-zone/file-drop-zone-config.js";
import { flexConfig } from "../components/flex/flex-config.js";
import { formConfig } from "../components/form/form-config.js";
import { gridConfig } from "../components/grid/grid-config.js";
import { hoverCardConfig } from "../components/hover-card/hover-card-config.js";
import { iconButtonConfig } from "../components/icon-button/icon-button-config.js";
import { kbdConfig } from "../components/kbd/kbd-config.js";
import { labelConfig } from "../components/label/label-config.js";
import { linkConfig } from "../components/link/link-config.js";
import { listboxConfig } from "../components/listbox/listbox-config.js";
import { menuConfig } from "../components/menu/menu-config.js";
import { menubarConfig } from "../components/menubar/menubar-config.js";
import { meterConfig } from "../components/meter/meter-config.js";
import { numberFieldConfig } from "../components/number-field/number-field-config.js";
import { paginationConfig } from "../components/pagination/pagination-config.js";
import { popoverConfig } from "../components/popover/popover-config.js";
import { progressBarConfig } from "../components/progress-bar/progress-bar-config.js";
import { progressCircleConfig } from "../components/progress-circle/progress-circle-config.js";
import { radioConfig } from "../components/radio/radio-config.js";
import { rangeCalendarConfig } from "../components/range-calendar/range-calendar-config.js";
import { searchFieldConfig } from "../components/search-field/search-field-config.js";
import { segmentedControlConfig } from "../components/segmented-control/segmented-control-config.js";
import { selectConfig } from "../components/select/select-config.js";
import { separatorConfig } from "../components/separator/separator-config.js";
import { sidebarConfig } from "../components/sidebar/sidebar-config.js";
import { sliderConfig } from "../components/slider/slider-config.js";
import { switchConfig } from "../components/switch/switch-config.js";
import { tableConfig } from "../components/table/table-config.js";
import { tabsConfig } from "../components/tabs/tabs-config.js";
import { tagGroupConfig } from "../components/tag-group/tag-group-config.js";
import { textAreaConfig } from "../components/text-area/text-area-config.js";
import { textFieldConfig } from "../components/text-field/text-field-config.js";
import { timeFieldConfig } from "../components/time-field/time-field-config.js";
import { toggleButtonGroupConfig } from "../components/toggle-button-group/toggle-button-group-config.js";
import { toggleButtonConfig } from "../components/toggle-button/toggle-button-config.js";
import { toolbarConfig } from "../components/toolbar/toolbar-config.js";
import { tooltipConfig } from "../components/tooltip/tooltip-config.js";
import { treeConfig } from "../components/tree/tree-config.js";
import { typographyConfig } from "../components/typography/typography-config.js";
import { ComponentConfig } from "../types.js";
import { ConfigOptions, getConfig, setConfig } from "./config.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const COMPONENT_CONFIGS = [
  buttonConfig,
  flexConfig,
  typographyConfig,
  tooltipConfig,
  iconButtonConfig,
  popoverConfig,
  buttonGroupConfig,
  cardConfig,
  textFieldConfig,
  labelConfig,
  linkConfig,
  checkboxConfig,
  radioConfig,
  separatorConfig,
  textAreaConfig,
  selectConfig,
  toggleButtonConfig,
  toggleButtonGroupConfig,
  toolbarConfig,
  menuConfig,
  menubarConfig,
  listboxConfig,
  contextMenuConfig,
  timeFieldConfig,
  dateFieldConfig,
  datePickerConfig,
  dateRangePickerConfig,
  searchFieldConfig,
  colorFieldConfig,
  numberFieldConfig,
  comboboxConfig,
  treeConfig,
  commandMenuConfig,
  alertDialogConfig,
  dialogConfig,
  disclosureConfig,
  disclosureGroupConfig,
  avatarConfig,
  badgeConfig,
  breadcrumbsConfig,
  gridConfig,
  switchConfig,
  aspectRatioConfig,
  colorSwatchConfig,
  fileDropZoneConfig,
  formConfig,
  tableConfig,
  sliderConfig,
  tagGroupConfig,
  progressBarConfig,
  progressCircleConfig,
  meterConfig,
  hoverCardConfig,
  segmentedControlConfig,
  paginationConfig,
  kbdConfig,
  sidebarConfig,
  colorAreaConfig,
  colorSliderConfig,
  colorWheelConfig,
  colorSwatchPickerConfig,
  colorPickerConfig,
  calendarConfig,
  rangeCalendarConfig,
  tabsConfig,
  drawerConfig,
];

function StringSetting({
  label,
  defaultValue,
  onChange,
  onSubmit,
  isEditing,
  placeholder,
}: {
  label: string;
  defaultValue: string | undefined;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isEditing: boolean;
  placeholder: string;
}) {
  return (
    <Box gap={1}>
      <Text bold>{label}</Text>
      {isEditing ? (
        <TextInput
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          onSubmit={onSubmit}
        />
      ) : (
        <Text>{defaultValue}</Text>
      )}
    </Box>
  );
}

function SelectSetting({
  label,
  defaultValue,
  onChange,
  isEditing,
  options,
}: {
  label: string;
  defaultValue: string | undefined;
  onChange: (value: string) => void;
  isEditing: boolean;
  options: Option[];
}) {
  return (
    <Box gap={1}>
      <Text bold>{label}</Text>
      {isEditing ? (
        <Select
          defaultValue={defaultValue}
          onChange={onChange}
          options={options}
        />
      ) : (
        <Text>{defaultValue}</Text>
      )}
    </Box>
  );
}

const ConfigPrompt = ({
  config,
}: {
  config: Partial<ConfigOptions> | null;
}) => {
  const [value, setValue] = React.useState(config?.componentDir);
  const [packageManager, setPackageManager] = React.useState(
    config?.packageManager,
  );
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (!config) return;
    Object.assign(config, { componentDir: value, packageManager });
  }, [value, packageManager, config]);

  return (
    <Box padding={2} flexDirection="column" gap={1}>
      {!config && (
        <Text>No config found. You must configure some settings.</Text>
      )}

      <StringSetting
        label="Component directory:"
        placeholder="src/components"
        defaultValue={value}
        onChange={setValue}
        onSubmit={() => {
          setStep(step + 1);

          if (!value) {
            setValue("src/components");
          }
        }}
        isEditing={step === 0}
      />

      {step > 0 && (
        <SelectSetting
          label="Package manager:  "
          defaultValue={packageManager}
          onChange={(selected) => {
            setPackageManager(selected as typeof packageManager);
            setStep(step + 1);
          }}
          isEditing={step === 1}
          options={["pnpm", "npm", "yarn"].map((manager) => ({
            label: manager,
            value: manager,
          }))}
        />
      )}
    </Box>
  );
};

async function setup() {
  const loadedConfig = await getConfig();
  const config = (
    loadedConfig ? { ...loadedConfig.config } : {}
  ) as Partial<ConfigOptions>;

  if (config.componentDir && config.packageManager) {
    return config as ConfigOptions;
  }

  const { waitUntilExit } = render(<ConfigPrompt config={config} />);
  await waitUntilExit();

  if (
    config.componentDir !==
      (loadedConfig?.config as ConfigOptions | undefined)?.componentDir ||
    config.packageManager !==
      (loadedConfig?.config as ConfigOptions | undefined)?.packageManager
  ) {
    setConfig(loadedConfig, config as ConfigOptions);
  }

  return config as ConfigOptions;
}

async function installDependencies(
  config: ConfigOptions,
  dependencies: { [key: string]: string } | undefined,
) {
  if (!dependencies) {
    return;
  }

  const packageJson = readFileSync(
    path.join(process.cwd(), "package.json"),
    "utf8",
  );
  const packageJsonObject = JSON.parse(packageJson) as Record<string, unknown>;

  const packageDependencies = packageJsonObject.dependencies as Record<
    string,
    string
  >;

  for (const [packageName, version] of Object.entries(dependencies)) {
    if (packageDependencies[packageName] === version) {
      continue;
    }

    console.log(`🔄 Installing ${packageName}@${version}`);

    // await new Promise((resolve) =>
    //   exec(`${config.packageManager} i ${packageName}@${version}`, (error) => {
    //     if (error) {
    //       console.error(
    //         `❌ Error installing ${packageName}@${version}:`,
    //         error,
    //       );
    //     }

    //     resolve(true);
    //   }),
    // );
  }
}

async function outputFile(
  config: ConfigOptions,
  filepath: string,
  content: string,
) {
  const outputPath = path.join(process.cwd(), config.componentDir, filepath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, content);
}

async function installHipDependencies(
  config: ConfigOptions,
  componentConfig: ComponentConfig,
) {
  if (!componentConfig.hipDependencies) {
    return;
  }

  for (const dependency of componentConfig.hipDependencies) {
    const content = readFileSync(
      path.join(
        __dirname,
        "../../src/components",
        componentConfig.name,
        dependency,
      ),
      "utf8",
    );
    await outputFile(
      config,
      path.join(componentConfig.name, dependency), // kind of hacky but works
      content,
    );
    console.log(`➕ Created ${dependency}`);
  }
}

async function copyFiles(
  config: ConfigOptions,
  componentConfig: ComponentConfig,
) {
  const outputPath = path.join(componentConfig.name, "index.tsx");
  const template = readFileSync(
    path.join(
      __dirname,
      "../../src/components",
      componentConfig.name,
      componentConfig.filepath,
    ),
    "utf8",
  );

  await outputFile(config, outputPath, template);
  console.log(`➕ Created ${componentConfig.filepath} at ${outputPath}`);
}

export async function installComponent({
  component,
  all,
}: {
  component: string[];
  all: boolean;
}) {
  const componentConfigs = all
    ? COMPONENT_CONFIGS
    : component
        .map((componentName) =>
          COMPONENT_CONFIGS.find((config) => config.name === componentName),
        )
        .filter((config): config is ComponentConfig => config !== undefined);

  for (const componentName of component) {
    const componentConfig = COMPONENT_CONFIGS.find(
      (config) => config.name === componentName,
    );

    if (!componentConfig) {
      throw new Error(`Component ${componentName} not found.`);
    }

    componentConfigs.push(componentConfig);
  }

  const config = await setup();

  for (const componentConfig of componentConfigs) {
    console.log(`🔄 Installing ${componentConfig.name}`);
    await installDependencies(config, componentConfig.dependencies);
    await installHipDependencies(config, componentConfig);
    await copyFiles(config, componentConfig);
    console.log(`✅ Installed ${componentConfig.name}\n`);
  }
}

/* eslint-enable react-refresh/only-export-components */
