import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { handleRouteChangeAds } from "../lib/ads";

export default function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    handleRouteChangeAds(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
}

