"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { event } from "@/lib/gtag";

export default function useFullGA() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("config", "G-R49PTG8TEG", {
      page_path: pathname,
    });
  }, [pathname]);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const label =
        (target as HTMLElement).innerText ||
        (target as HTMLAnchorElement).href ||
        "unknown";

      event("element_click", {
        category: "interaction",
        label,
        href: (target as HTMLAnchorElement).href || null,
      });

      if (
        (target as HTMLAnchorElement).href &&
        !(target as HTMLAnchorElement).href.includes(window.location.host)
      ) {
        event("outbound_click", {
          destination: (target as HTMLAnchorElement).href,
        });
      }
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    let sent25 = false,
      sent50 = false,
      sent75 = false,
      sent100 = false;

    const onScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) / document.body.scrollHeight;

      if (!sent25 && scrolled > 0.25) {
        event("scroll_25");
        sent25 = true;
      }
      if (!sent50 && scrolled > 0.5) {
        event("scroll_50");
        sent50 = true;
      }
      if (!sent75 && scrolled > 0.75) {
        event("scroll_75");
        sent75 = true;
      }
      if (!sent100 && scrolled > 0.99) {
        event("scroll_100");
        sent100 = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const start = Date.now();

    const onExit = () => {
      const duration = Date.now() - start;
      event("time_on_page", { value: duration });
    };

    window.addEventListener("beforeunload", onExit);
    return () => window.removeEventListener("beforeunload", onExit);
  }, []);
}
