import { Button } from "@/components/button";
import {
  Navbar,
  NavbarAction,
  NavbarLink,
  NavbarLogo,
  NavbarNavigation,
} from "@/components/navbar";
import { uiColor } from "../../components/theme/color.stylex";
import * as stylex from "@stylexjs/stylex";
import { radius } from "../../components/theme/radius.stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { useRef } from "react";
import { useAnimatedNavbar } from "@/components/navbar/useAnimatedNavbar";

const styles = stylex.create({
  wrapper: {
    containerType: "inline-size",
    height: "400px",
    width: "90%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: uiColor.border1,
    borderRadius: radius["lg"],
    overflow: "auto",
    margin: spacing["4"],
  },
  content: {
    padding: spacing["4"],
  },
});

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 120 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Sticky() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { sentinel, navBarProps } = useAnimatedNavbar({
    scrollContainer: scrollContainerRef,
  });

  return (
    <div ref={scrollContainerRef} {...stylex.props(styles.wrapper)}>
      {sentinel}
      <Navbar {...navBarProps}>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <NavbarNavigation justify="right">
          <NavbarLink href="/dashboard">Dashboard</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/settings">Settings</NavbarLink>
        </NavbarNavigation>
        <NavbarAction>
          <Button variant="primary">Sign In</Button>
        </NavbarAction>
      </Navbar>
      <div {...stylex.props(styles.content)}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <p>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
      </div>
    </div>
  );
}
