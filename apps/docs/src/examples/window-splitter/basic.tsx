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
    padding: "16px",
  },
});

export function Basic() {
  return (
    <div {...stylex.props(styles.container)}>
      <PanelGroup>
        <Panel min="130px" max="80%" style={styles.panelContent}>
          Left Panel
        </Panel>
        <PanelResizer />
        <Panel min="130px" style={styles.panelContent}>
          Right Panel
        </Panel>
      </PanelGroup>
    </div>
  );
}
