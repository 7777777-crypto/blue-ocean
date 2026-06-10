"use client"

export function WaveDivider({ position = "bottom" }: { position?: "top" | "bottom" }) {
  const isTop = position === "top"
  return (
    <div className="relative w-full overflow-hidden" style={{ height: isTop ? "80px" : "120px", marginTop: isTop ? "-1px" : 0 }}>
      <svg
        className={`absolute ${isTop ? "wave-top -top-[1px]" : "wave-svg bottom-0"}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: isTop ? "80px" : "120px" }}
      >
        <path
          d={isTop
            ? "M0,80 C360,0 720,120 1440,40 L1440,0 L0,0 Z"
            : "M0,40 C360,120 720,0 1440,80 L1440,120 L0,120 Z"}
          fill="rgba(30,94,255,0.08)"
        />
      </svg>
      <svg
        className={`absolute ${isTop ? "wave-top -top-[1px]" : "wave-svg-2 bottom-0"}`}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: isTop ? "80px" : "100px", animationDelay: "-2s" }}
      >
        <path
          d={isTop
            ? "M0,60 C480,0 960,120 1440,30 L1440,0 L0,0 Z"
            : "M0,30 C480,100 960,0 1440,60 L1440,100 L0,100 Z"}
          fill="rgba(76,166,255,0.05)"
        />
      </svg>
    </div>
  )
}
