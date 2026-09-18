"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./GlobalScrollHint.module.css";

export default function GlobalScrollHint() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Initial appearance after page load
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    const checkProximity = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Check footer proximity
      const footerElement = document.querySelector("footer");
      let nearFooter = false;

      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // If footer is within 100px of bottom of screen or visible
        nearFooter = footerRect.top <= windowHeight + 60;
      } else {
        nearFooter = scrollY + windowHeight >= docHeight - 200;
      }

      setIsNearFooter(nearFooter);
      return nearFooter;
    };

    const handleScroll = () => {
      // Hide immediately while scrolling
      setIsVisible(false);

      const nearFooter = checkProximity();

      // Clear any pending timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // If user stopped scrolling and not near footer, bring it back
      if (!nearFooter) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
        }, 900);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkProximity, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkProximity);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  const shouldShow = isVisible && !isNearFooter;

  return (
    <div
      className={`${styles.container} ${shouldShow ? styles.visible : styles.hidden}`}
      onClick={scrollToNext}
      role="button"
      tabIndex={0}
      aria-label="Scroll to explore"
    >
      <div className={styles.pill}>
        <span className={styles.text}>Scroll to explore</span>
        <ChevronDown size={12} className={styles.icon} />
      </div>
    </div>
  );
}
