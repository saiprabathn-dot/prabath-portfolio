"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./GlobalScrollHint.module.css";

export default function GlobalScrollHint() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isSectionAllowed = () => {
      const windowHeight = window.innerHeight;
      const aboutElem = document.getElementById("about");
      const qdeltaElem = document.getElementById("qdelta");
      const footerElem = document.querySelector("footer");

      // 1. Footer proximity: Never show near footer
      if (footerElem) {
        const footerRect = footerElem.getBoundingClientRect();
        if (footerRect.top <= windowHeight + 40) {
          return false;
        }
      }

      // 2. QDelta section: When QDelta has entered 20% into viewport
      let qdeltaEntered20 = false;
      if (qdeltaElem) {
        const qdeltaRect = qdeltaElem.getBoundingClientRect();
        if (qdeltaRect.top <= windowHeight * 0.8 && qdeltaRect.bottom > 0) {
          qdeltaEntered20 = true;
        }
      }

      // 3. About section: When About has entered 50% into viewport
      let aboutReached50 = false;
      if (aboutElem) {
        const aboutRect = aboutElem.getBoundingClientRect();
        if (aboutRect.top <= windowHeight * 0.5 && aboutRect.bottom >= 0) {
          aboutReached50 = true;
        }
      }

      // If QDelta entered 20%, section is allowed
      if (qdeltaEntered20) {
        return true;
      }

      // If About reached 50% (and before QDelta enters 20%), strictly forbidden
      if (aboutReached50) {
        return false;
      }

      // Hero / Top of page is allowed
      return true;
    };

    let isCurrentlyVisible = false;

    // Initial appearance on page load (if in an allowed section)
    const initialTimer = setTimeout(() => {
      if (isSectionAllowed()) {
        isCurrentlyVisible = true;
        setIsVisible(true);
      }
    }, 600);

    const handleScroll = () => {
      // 1. Only trigger state update if it was visible
      if (isCurrentlyVisible) {
        isCurrentlyVisible = false;
        setIsVisible(false);
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // 2. Only become visible after user stops scrolling (idle pause) and if allowed
      scrollTimeoutRef.current = setTimeout(() => {
        if (isSectionAllowed()) {
          isCurrentlyVisible = true;
          setIsVisible(true);
        }
      }, 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`}
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
