import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.35,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.04;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full border bg-cyan-500/20 dark:bg-cyan-400/15 shadow-2xl backdrop-blur-sm ring-1 ring-cyan-300/30 dark:ring-cyan-500/20`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "2px",
                borderColor: `hsl(var(--cyan) / 0.4)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
                filter: "blur(0.5px)",
                backdropFilter: "blur(8px)",
                background: `radial-gradient(circle, hsl(var(--cyan) / 0.15) 0%, hsl(var(--cyan) / 0.05) 70%, transparent 100%)`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
