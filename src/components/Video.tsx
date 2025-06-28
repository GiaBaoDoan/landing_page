export default function Video(): React.ReactNode {
  return (
    <video
      className="absolute inset-0 w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      width="1200"
      height="720"
      controls
    >
      <source src="/videos/video.mp4" type="video/mp4" />
    </video>
  );
}
