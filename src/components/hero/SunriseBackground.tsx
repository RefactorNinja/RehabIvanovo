/**
 * Полноразмерное изображение без обрезки: ширина 100%, высота по пропорциям файла (`h-auto`).
 */
export function SunriseBackground() {
  return (
    <>
      <img
        src="/hero-cover.png"
        alt=""
        className="block h-auto w-full max-w-full select-none"
        decoding="async"
        fetchPriority="high"
        draggable={false}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.2) 100%)"
        }}
      />
    </>
  );
}
