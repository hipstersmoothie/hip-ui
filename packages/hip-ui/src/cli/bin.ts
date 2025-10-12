import { app, Command, MultiCommand } from "command-line-application";
import { installComponent } from "./install.js";

const install: Command = {
  name: "install",
  description: "Install a component",
  examples: ["install button"],
  require: ["component"],
  options: [
    {
      name: "component",
      type: String,
      defaultOption: true,
      description: "The component to install",
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
  installComponent({
    component: args.component,
  });
}
