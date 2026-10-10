import { useEffect, useId, useRef } from "react";

interface AdUnitProps {
  blockId?: string;
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    yaContextCb?: Array<() => void>;
    Ya?: {
      Context?: {
        AdvManager?: {
          render: (options: {
            blockId: string;
            renderTo: string;
            async?: boolean;
          }) => void;
        };
      };
    };
  }
}

export default function AdUnit({
  blockId = "R-A-20199196-11",
  className = "my-6 flex w-full justify-center overflow-hidden min-h-[90px]",
}: AdUnitProps) {
  const reactId = useId().replace(/[^a-zA-Z0-9_-]/g, "_");
  const containerId = `yandex_rtb_${blockId.replace(/[^a-zA-Z0-9_-]/g, "_")}_${reactId}`;
  const renderedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || renderedRef.current) return;
    renderedRef.current = true;

    window.yaContextCb = window.yaContextCb || [];
    window.yaContextCb.push(() => {
      try {
        if (window.Ya?.Context?.AdvManager) {
          window.Ya.Context.AdvManager.render({
            blockId,
            renderTo: containerId,
          });
        }
      } catch (err) {
        console.warn("Yandex RTB render hatası:", err);
      }
    });
  }, [blockId, containerId]);

  return (
    <div className={className} aria-label="Sponsorlu Reklam Alanı">
      <div id={containerId} className="w-full flex justify-center text-center" />
    </div>
  );
}

