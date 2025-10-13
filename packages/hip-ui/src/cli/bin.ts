import { app, Command, MultiCommand } from "command-line-application";
import { installComponent } from "./install.js";

const install: Command = {
  name: "install",
  description: "Install a component",
  examples: ["install button", "install --all"],
  options: [
    {
      name: "component",
      type: String,
      defaultOption: true,
      multiple: true,
      description: "The component to install",
    },
    {
      name: "all",
      type: Boolean,
      description: "Install all components",
    },
  ],
};

const hip: MultiCommand = {
  name: "hip",
  description: "Scaffold hip components into your project",
  commands: [install],
};

const args = app(hip);

if (args?._command === "install") {
  const component = Array.isArray(args.component)
    ? args.component
    : args.component
      ? [args.component]
      : [];

  installComponent({
    component,
    all: args.all,
  });
}
