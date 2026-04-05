declare global {
  interface Window {
    adsbygoogle?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-9Y81QKXVRQ";

const pushPendingAds = () => {
  if (typeof window === "undefined" || !window.adsbygoogle) {
    return;
  }

  const adNodes = document.querySelectorAll<HTMLModElement>("ins.adsbygoogle");

  adNodes.forEach((node) => {
    if (node.dataset.adsbygoogleStatus) {
      return;
    }

    try {
      window.adsbygoogle!.push({});
    } catch {
      // Ignore duplicate/early AdSense init attempts during route transitions.
    }
  });
};

const trackVirtualPageView = (pathWithSearch: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pathWithSearch,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const handleRouteChangeAds = (pathWithSearch: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("app:route-change", {
      detail: {
        path: pathWithSearch,
      },
    }),
  );

  trackVirtualPageView(pathWithSearch);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      pushPendingAds();
    });
  });
};

