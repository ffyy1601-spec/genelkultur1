import { useEffect, useRef } from "react";

interface AdUnitProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

export default function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "my-8 flex w-full justify-center overflow-hidden",
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        if (adRef.current && !adRef.current.getAttribute("data-adsbygoogle-status")) {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        }
      }
    } catch {
      // Ignored
    }
  }, []);

  return (
    <div className={className} aria-label="Sponsorlu İçerik Alanı">
      <ins
        ref={adRef}
        className="adsbygoogle block w-full text-center"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9373355317840845"
        data-ad-slot={slot || "auto"}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
