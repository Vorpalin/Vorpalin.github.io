interface BlurBlobProps {
  position: { top: string; left: string };
  size: { width: string; height: string };
}

function BlurBlob({ position, size }: BlurBlobProps) {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="h-full w-full animate-blob rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-500/20"></div>
    </div>
  );
}

export default BlurBlob;
