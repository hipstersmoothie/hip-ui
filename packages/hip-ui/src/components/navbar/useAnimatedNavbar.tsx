"use client";

import * as stylex from "@stylexjs/stylex";
import rafThrottle from "raf-throttle";
import { useEffect, useRef, useState } from "react";

import {
  animationDuration,
  animationTimingFunction,
} from "../theme/animations.stylex";

const SCROLL_THRESHOLD = 16;

const styles = stylex.create({
  navbarOutOfViewport: {
    position: "sticky",
    transform: "translateY(-100%)",
    top: 0,
  },
  navbarRevealed: {
    position: "sticky",
    transform: "translateY(0)",
    transitionDuration: animationDuration.slow,
    transitionProperty: "transform",
    transitionTimingFunction: animationTimingFunction.easeInOut,
    top: 0,
  },
  navbarAnimatedOut: {
    transitionDuration: animationDuration.slow,
    transitionProperty: "transform",
    transitionTimingFunction: animationTimingFunction.easeInOut,
  },
});

/**
 * A hook that animates the navbar into view and stick to the top when the user scrolls down.
 */
export const useAnimatedNavbar = ({
  scrollContainer: scrollContainerProp,
}: {
  scrollContainer?: React.RefObject<HTMLElement | null>;
}) => {
  const lastScrollY = useRef(0);
  const [hasScrollNavbarOutOfView, setHasScrollNavbarOutOfView] =
    useState(false);
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const topSentinelRef = useRef<HTMLDivElement>(null);

  // Use intersection observer to detect when navbar is out of viewport
  useEffect(() => {
    if (!navRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry || entry.isIntersecting) return;
      setHasScrollNavbarOutOfView(true);
    });

    observer.observe(navRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animate the navbar into view and stick to the top
  useEffect(() => {
    if (!hasScrollNavbarOutOfView || !scrollContainerProp?.current) return;

    const handleScroll = rafThrottle((e: Event) => {
      if (!(e.target instanceof HTMLElement)) return;

      const currentScrollY = e.target.scrollTop;
      const scrollDirection =
        currentScrollY > lastScrollY.current ? "down" : "up";

      if (scrollDirection === "up") {
        // Only hide/show if scrolled past threshold
        if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_THRESHOLD) {
          return;
        }

        // Show navbar when scrolling up or at the top
        if (
          currentScrollY < lastScrollY.current ||
          currentScrollY <= SCROLL_THRESHOLD
        ) {
          setShouldAnimateIn(true);
        }
      }
      // Animate navbar out when scrolling down past threshold
      else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > SCROLL_THRESHOLD
      ) {
        setShouldAnimateIn(false);
        setShouldAnimateOut(true);
      }

      lastScrollY.current = currentScrollY;
    });

    const scrollContainer = scrollContainerProp.current;

    scrollContainer.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrollNavbarOutOfView, scrollContainerProp]);

  // Use IntersectionObserver to detect if scrolled to top (most performant)
  useEffect(() => {
    if (!topSentinelRef.current || !scrollContainerProp?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        const atTop = entry.isIntersecting;

        setHasScrollNavbarOutOfView((has) => {
          if (!has) return has;
          if (atTop) {
            setShouldAnimateIn(false);
            setShouldAnimateOut(false);
            return false;
          }
          return true;
        });
      },
      { root: scrollContainerProp.current },
    );

    observer.observe(topSentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [scrollContainerProp]);

  return {
    sentinel: <div ref={topSentinelRef} />,
    navBarProps: {
      ref: navRef,
      style: [
        hasScrollNavbarOutOfView && styles.navbarOutOfViewport,
        shouldAnimateIn && styles.navbarRevealed,
        shouldAnimateOut && styles.navbarAnimatedOut,
      ],
    },
  };
};
