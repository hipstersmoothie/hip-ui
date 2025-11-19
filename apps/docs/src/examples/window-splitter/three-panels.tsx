import * as stylex from "@stylexjs/stylex";

import { Card, CardBody, CardHeader, CardTitle } from "@/components/card";
import { PanelGroup, Panel, PanelResizer } from "@/components/window-splitter";

const styles = stylex.create({
  container: {
    height: "400px",
    width: "100%",
  },
  panelContent: {
    padding: "16px",
  },
});

export function ThreePanels() {
  return (
    <div {...stylex.props(styles.container)}>
      <PanelGroup>
        <Panel id="left" min="150px" max="300px">
          <div {...stylex.props(styles.panelContent)}>
            <Card>
              <CardHeader>
                <CardTitle>Left Panel</CardTitle>
              </CardHeader>
              <CardBody>First panel with constraints.</CardBody>
            </Card>
          </div>
        </Panel>
        <PanelResizer id="resizer-1" />
        <Panel id="middle" min="150px">
          <div {...stylex.props(styles.panelContent)}>
            <Card>
              <CardHeader>
                <CardTitle>Middle Panel</CardTitle>
              </CardHeader>
              <CardBody>Second panel that can grow and shrink.</CardBody>
            </Card>
          </div>
        </Panel>
        <PanelResizer id="resizer-2" />
        <Panel id="right" min="150px" max="300px">
          <div {...stylex.props(styles.panelContent)}>
            <Card>
              <CardHeader>
                <CardTitle>Right Panel</CardTitle>
              </CardHeader>
              <CardBody>Third panel with constraints.</CardBody>
            </Card>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
