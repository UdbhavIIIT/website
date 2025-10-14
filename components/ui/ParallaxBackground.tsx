"use client";

export function ParallaxBackground() {
  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    ></div>
  );
}
