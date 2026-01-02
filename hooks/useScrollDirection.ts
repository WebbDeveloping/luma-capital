"use client";

import { useEffect, useState, useRef } from "react";

type ScrollDirection = "up" | "down" | null;

interface UseScrollDirectionOptions {
  threshold?: number; // Minimum pixels scrolled to trigger direction change
  initialDirection?: ScrollDirection;
}

export function useScrollDirection(
  options: UseScrollDirectionOptions = {}
): ScrollDirection {
  const { threshold = 10, initialDirection = null } = options;
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>(initialDirection);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Always show nav at the very top
      if (scrollY < threshold) {
        setScrollDirection(null);
        lastScrollY.current = scrollY;
        ticking.current = false;
        return;
      }

      // Only update if we've scrolled more than the threshold
      if (Math.abs(scrollY - lastScrollY.current) < threshold) {
        ticking.current = false;
        return;
      }

      const direction = scrollY > lastScrollY.current ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return scrollDirection;
}

