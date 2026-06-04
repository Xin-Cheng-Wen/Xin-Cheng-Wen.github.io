import React from 'react';

interface Props {
    venueShort: string;
    year: string;
    title: string;
    color: string;
    /** Optional: if provided, an <img> will be rendered instead of the SVG placeholder. */
    img?: string;
}

// ──────────────────────────────────────────────
// PaperPlaceholder
//   When `img` is provided -> renders <img>.
//   Otherwise -> renders a deterministic SVG "paper preview" using
//   venue name, year, title initials and color, so each paper has
//   a unique-looking thumbnail without external assets.
//
//   The SVG mimics a paper-cover look: title block + faux abstract
//   text lines + venue badge in the corner.
// ──────────────────────────────────────────────
const PaperPlaceholder: React.FC<Props> = ({ venueShort, year, title, color, img }) => {
    if (img) {
        return <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />;
    }

    // Build a stable hash from title for layout variation
    const hash = title.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const seedOffsetX = (hash % 7) - 3;
    const seedRotate = ((hash * 7) % 5) - 2;

    // Extract first two meaningful words from title for big text
    const bigText = title
        .split(/[\s:,]+/)
        .filter((w) => w.length > 2)
        .slice(0, 2)
        .join(' ')
        .toUpperCase();

    // Fake abstract lines (deterministic widths)
    const lineCount = 7;
    const lineWidths = Array.from({ length: lineCount }, (_, i) => {
        const base = 70 + ((hash + i * 13) % 25);
        return Math.min(base, 95);
    });

    return (
        <svg
            viewBox="0 0 400 300"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
        >
            <defs>
                <linearGradient id={`grad-${hash}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.04" />
                </linearGradient>
                <pattern
                    id={`grid-${hash}`}
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke={color}
                        strokeOpacity="0.08"
                        strokeWidth="0.5"
                    />
                </pattern>
            </defs>

            {/* base background */}
            <rect width="400" height="300" fill="#fafafa" />
            <rect width="400" height="300" fill={`url(#grad-${hash})`} />
            <rect width="400" height="300" fill={`url(#grid-${hash})`} />

            {/* color accent bar */}
            <rect x="0" y="0" width="6" height="300" fill={color} />

            {/* venue + year badge top-right */}
            <g transform={`translate(${260 + seedOffsetX}, 22)`}>
                <rect
                    x="0"
                    y="0"
                    width="120"
                    height="22"
                    rx="11"
                    fill="white"
                    stroke={color}
                    strokeOpacity="0.4"
                />
                <text
                    x="60"
                    y="15"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="10"
                    fontWeight="600"
                    fill={color}
                    letterSpacing="1.5"
                >
                    {venueShort}
                </text>
            </g>

            {/* year - faded big in corner */}
            <text
                x="395"
                y="295"
                textAnchor="end"
                fontFamily="ui-monospace, monospace"
                fontSize="80"
                fontWeight="900"
                fill={color}
                fillOpacity="0.06"
            >
                {year.slice(0, 4)}
            </text>

            {/* big paper title (first 2 words) */}
            <g transform={`translate(28, 100) rotate(${seedRotate * 0.3})`}>
                <text
                    fontFamily="'Albert Sans', sans-serif"
                    fontSize="36"
                    fontWeight="900"
                    fill="#0a0a0a"
                    letterSpacing="-1"
                >
                    {bigText.slice(0, 22)}
                </text>
            </g>

            {/* fake abstract lines */}
            <g transform="translate(28, 170)">
                {lineWidths.map((w, i) => (
                    <rect
                        key={i}
                        x="0"
                        y={i * 12}
                        width={w * 3.2}
                        height="3"
                        rx="1.5"
                        fill="#0a0a0a"
                        fillOpacity={0.12 - i * 0.012}
                    />
                ))}
            </g>

            {/* corner dot */}
            <circle cx="380" cy="282" r="4" fill={color} />
        </svg>
    );
};

export default PaperPlaceholder;
