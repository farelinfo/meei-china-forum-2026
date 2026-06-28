"use client";

interface VideoPlaceholderProps {
  videoUrl: string | null;
  posterUrl?: string | null;
  title: string;
  label?: string;
  className?: string;
}

export default function VideoPlaceholder({
  videoUrl,
  posterUrl,
  title,
  label = "Video coming soon",
  className = "",
}: VideoPlaceholderProps) {
  if (videoUrl) {
    const isYouTube = videoUrl.includes("youtube") || videoUrl.includes("youtu.be");
    const isVimeo = videoUrl.includes("vimeo");

    let embedUrl = videoUrl;
    if (isYouTube) {
      const videoId = videoUrl.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1];
      if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (isVimeo) {
      const videoId = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
      if (videoId) embedUrl = `https://player.vimeo.com/video/${videoId}`;
    }

    return (
      <div
        className={`relative w-full overflow-hidden rounded-sm ${className}`}
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm ${className}`}
      style={{ paddingBottom: "56.25%" }}
      role="img"
      aria-label={title}
    >
      <div
        className="absolute inset-0"
        style={{
          background: posterUrl
            ? `url(${posterUrl}) center/cover no-repeat`
            : undefined,
        }}
      >
        {!posterUrl && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c2415] via-[#09100b] to-[#050806]">
            <svg
              className="absolute inset-0 h-full w-full opacity-15"
              viewBox="0 0 800 450"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <circle cx="400" cy="225" r="120" stroke="#2ca640" strokeWidth="0.8" />
              <circle cx="400" cy="225" r="200" stroke="#d2a74f" strokeWidth="0.4" />
              <line x1="0" y1="225" x2="800" y2="225" stroke="#2ca640" strokeWidth="0.5" />
              <line x1="400" y1="0" x2="400" y2="450" stroke="#2ca640" strokeWidth="0.5" />
            </svg>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/15">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-9 w-9 translate-x-0.5 text-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-white/70">{label}</p>
        </div>
      </div>
    </div>
  );
}
