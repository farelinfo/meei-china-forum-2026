import {
  ImageIcon,
  Building2,
  Video,
  Users,
  QrCode,
  Factory,
  Handshake,
} from "lucide-react";

type PlaceholderIcon =
  | "image"
  | "building"
  | "video"
  | "users"
  | "qrcode"
  | "factory"
  | "handshake";

interface MediaPlaceholderProps {
  label: string;
  aspectRatio?: string;
  icon?: PlaceholderIcon;
  className?: string;
  showPlayIcon?: boolean;
}

const iconMap: Record<PlaceholderIcon, React.ComponentType<{ className?: string }>> = {
  image: ImageIcon,
  building: Building2,
  video: Video,
  users: Users,
  qrcode: QrCode,
  factory: Factory,
  handshake: Handshake,
};

export default function MediaPlaceholder({
  label,
  aspectRatio = "16/9",
  icon = "image",
  className = "",
  showPlayIcon = false,
}: MediaPlaceholderProps) {
  const IconComponent = iconMap[icon] ?? ImageIcon;

  const [w, h] = aspectRatio.split("/").map(Number);
  const paddingPercent = ((h / w) * 100).toFixed(4);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm ${className}`}
      style={{ paddingBottom: `${paddingPercent}%` }}
      role="img"
      aria-label={label}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a0f] via-[#09100b] to-[#050806]">
        {/* Network-inspired decorative lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 800 450"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="225" x2="800" y2="225" stroke="#2ca640" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="400" y2="450" stroke="#2ca640" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="800" y2="450" stroke="#2ca640" strokeWidth="0.3" />
          <line x1="800" y1="0" x2="0" y2="450" stroke="#d2a74f" strokeWidth="0.3" />
          <circle cx="400" cy="225" r="100" stroke="#2ca640" strokeWidth="0.5" />
          <circle cx="400" cy="225" r="180" stroke="#2ca640" strokeWidth="0.3" />
          <circle cx="150" cy="80" r="4" fill="#2ca640" opacity="0.6" />
          <circle cx="650" cy="370" r="4" fill="#d2a74f" opacity="0.6" />
          <circle cx="700" cy="100" r="3" fill="#2ca640" opacity="0.4" />
          <circle cx="100" cy="350" r="3" fill="#d2a74f" opacity="0.4" />
          <circle cx="400" cy="225" r="6" fill="#2ca640" opacity="0.8" />
          <line x1="150" y1="80" x2="400" y2="225" stroke="#2ca640" strokeWidth="0.3" strokeDasharray="4 4" />
          <line x1="650" y1="370" x2="400" y2="225" stroke="#d2a74f" strokeWidth="0.3" strokeDasharray="4 4" />
          <line x1="700" y1="100" x2="400" y2="225" stroke="#2ca640" strokeWidth="0.3" strokeDasharray="4 4" />
          <line x1="100" y1="350" x2="400" y2="225" stroke="#2ca640" strokeWidth="0.3" strokeDasharray="4 4" />
          {/* Radial glow */}
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2ca640" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2ca640" stopOpacity="0" />
          </radialGradient>
          <circle cx="400" cy="225" r="200" fill="url(#glow)" />
        </svg>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050806]/80 via-transparent to-[#050806]/40" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          {showPlayIcon ? (
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 translate-x-0.5 text-white"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)]">
              <IconComponent className="h-5 w-5 text-[var(--green-primary)]" />
            </div>
          )}
          <p className="px-6 text-center text-xs font-medium tracking-wide text-[var(--text-secondary)]">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
