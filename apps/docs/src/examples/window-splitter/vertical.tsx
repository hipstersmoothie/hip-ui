import * as stylex from "@stylexjs/stylex";

import { PanelGroup, Panel, PanelResizer } from "@/components/window-splitter";

const styles = stylex.create({
  container: {
    height: "400px",
    width: "100%",
  },
  panelContent: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});

export function Vertical() {
  return (
    <div {...stylex.props(styles.container)}>
      <PanelGroup orientation="vertical">
        <Panel min="100px" max="300px" style={styles.panelContent}>
          Top Panel
        </Panel>
        <PanelResizer />
        <Panel min="100px" style={styles.panelContent}>
          Bottom Panel
        </Panel>
      </PanelGroup>
    </div>
  );
}
