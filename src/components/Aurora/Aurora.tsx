const BLOBS = [
  {
    color: "bg-purple-500/25",
    pos: "top-[5%] left-[10%]",
    size: "h-[45vmax] w-[45vmax]",
    delay: "0s",
  },
  {
    color: "bg-fuchsia-500/20",
    pos: "top-[40%] right-[5%]",
    size: "h-[40vmax] w-[40vmax]",
    delay: "-7s",
  },
  {
    color: "bg-sky-500/20",
    pos: "bottom-[0%] left-[30%]",
    size: "h-[50vmax] w-[50vmax]",
    delay: "-14s",
  },
];

function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className={`absolute animate-aurora rounded-full blur-3xl motion-reduce:animate-none ${b.color} ${b.pos} ${b.size}`}
          style={{ animationDelay: b.delay }}
        />
      ))}
    </div>
  );
}

export default Aurora;
