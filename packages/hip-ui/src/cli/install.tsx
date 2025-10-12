import { Option, Select, TextInput } from "@inkjs/ui";
import path from "path";
import { render, Box, Text } from "ink";
import * as React from "react";
import { mkdir } from "fs/promises";
import { exec } from "child_process";
import { readFileSync, writeFileSync } from "fs";

import { ConfigOptions, getConfig, setConfig } from "./config.js";
import { ComponentConfig } from "../types.js";

import { buttonConfig } from "../components/button/button-config.js";
import { flexConfig } from "../components/flex/flex-config.js";
import { typographyConfig } from "../components/typography/typography-config.js";
import { tooltipConfig } from "../components/tooltip/tooltip-config.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const COMPONENT_CONFIGS = [
  buttonConfig,
  flexConfig,
  typographyConfig,
  tooltipConfig,
];

function StringSetting({
  label,
  defaultValue,
  onChange,
  onSubmit,
  isEditing,
}: {
  label: string;
  defaultValue: string | undefined;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isEditing: boolean;
}) {
  return (
    <Box gap={1}>
      <Text bold>{label}</Text>
      {isEditing ? (
        <TextInput
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder="src/components"
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

const ConfigPrompt = ({ config }: { config: ConfigOptions | null }) => {
  const [value, setValue] = React.useState(config?.componentDir);
  const [packageManager, setPackageManager] = React.useState(
    config?.packageManager
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
        defaultValue={value}
        onChange={setValue}
        onSubmit={() => setStep(step + 1)}
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
  const config: ConfigOptions = loadedConfig ? { ...loadedConfig.config } : {};

  if (config.componentDir && config.packageManager) {
    return config;
  }

  const { waitUntilExit } = render(<ConfigPrompt config={config} />);
  await waitUntilExit();

  if (
    config.componentDir !== loadedConfig?.config.componentDir ||
    config.packageManager !== loadedConfig?.config.packageManager
  ) {
    await setConfig(loadedConfig, config);
  }

  return config;
}

async function installDependencies(
  config: ConfigOptions,
  dependencies: { [key: string]: string } | undefined
) {
  if (!dependencies) {
    return;
  }

  const packageJson = readFileSync(
    path.join(process.cwd(), "package.json"),
    "utf-8"
  );
  const packageJsonObject = JSON.parse(packageJson);

  for (const [packageName, version] of Object.entries(dependencies)) {
    if (packageJsonObject.dependencies[packageName] === version) {
      continue;
    }

    console.log(`🔄 Installing ${packageName}@${version}`);

    await new Promise((resolve) =>
      exec(`${config.packageManager} i ${packageName}@${version}`, (error) => {
        if (error) {
          console.error(
            `❌ Error installing ${packageName}@${version}:`,
            error
          );
        }

        resolve(true);
      })
    );
  }
}

async function outputFile(
  config: ConfigOptions,
  filepath: string,
  content: string
) {
  const outputPath = path.join(process.cwd(), config.componentDir, filepath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, content);
}

async function installHipDependencies(
  config: ConfigOptions,
  componentConfig: ComponentConfig
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
        dependency
      ),
      "utf-8"
    );
    await outputFile(
      config,
      path.join(componentConfig.name, dependency), // kind of hacky but works
      content
    );
    console.log(`✅ Created ${dependency}`);
  }
}

async function copyFiles(
  config: ConfigOptions,
  componentConfig: ComponentConfig
) {
  const outputPath = path.join(componentConfig.name, "index.tsx");
  const template = readFileSync(
    path.join(
      __dirname,
      "../../src/components",
      componentConfig.name,
      componentConfig.filepath
    ),
    "utf-8"
  );

  await outputFile(config, outputPath, template);
  console.log(`✅ Created ${componentConfig.filepath} at ${outputPath}`);
}

export async function installComponent({ component }: { component: string }) {
  const componentConfig = COMPONENT_CONFIGS.find(
    (config) => config.name === component
  );

  if (!componentConfig) {
    console.error(`❌ Component ${component} not found.`);
    process.exit(1);
  }

  const config = await setup();

  await installDependencies(config, componentConfig.dependencies);
  await installHipDependencies(config, componentConfig);
  await copyFiles(config, componentConfig);
}
