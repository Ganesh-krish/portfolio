const WAVE_BG = `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 50 50 100 100 T 200 100 T 300 100 T 400 100' fill='none' stroke='white' stroke-width='2' opacity='0.2'/%3E%3Cpath d='M0 200 Q 100 150 200 200 T 400 200' fill='none' stroke='white' stroke-width='2' opacity='0.2'/%3E%3Cpath d='M0 300 Q 150 250 300 300 T 400 300' fill='none' stroke='white' stroke-width='2' opacity='0.2'/%3E%3C%2Fsvg%3E")`;

interface CardDef {
  color: string;
  quote: string;
  term: string;
  isLarge?: boolean;
}

const cardData: CardDef[] = [
  {
    color: "#d32f2f",
    quote: "Design every endpoint as if the client will call it twice.",
    term: "Idempotency",
  },
  {
    color: "#2e7d32",
    quote: "A 200 with an error body is still a lie.",
    term: "HTTP Semantics",
  },
  {
    color: "#e67e22",
    quote: "Never return all records. Pagination is not optional.",
    term: "Resource Design",
    isLarge: true,
  },
  {
    color: "#d81b60",
    quote: "Version the API contract, not the implementation.",
    term: "API Versioning",
    isLarge: true,
  },
  {
    color: "#1976d2",
    quote: "Rate limiting protects your API from your most loyal users.",
    term: "Throttling",
  },
  {
    color: "#7b1fa2",
    quote: "Authentication asks who you are. Authorization asks what you're allowed to do.",
    term: "Security",
  },
];

function StarIcon({ size = 80, opacity = 0.1 }: { size?: number; opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      style={{ opacity, display: "block" }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function HCard({ color, quote, term, isLarge }: CardDef) {
  return (
    <div
      className="pcard"
      style={{
        backgroundColor: color,
        backgroundImage: WAVE_BG,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top: term pill + quote mark */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <span style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "9999px",
          padding: isLarge ? "0.4em 1.1em" : "0.32em 0.85em",
          fontSize: isLarge ? "0.75em" : "0.7em",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#fff",
          marginBottom: isLarge ? "0.7em" : "0.55em",
        }}>
          {term}
        </span>
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: isLarge ? "3.5em" : "2.8em",
          lineHeight: 0.75,
          opacity: 0.38,
          userSelect: "none",
          letterSpacing: "-0.02em",
        }}>
          "
        </div>
      </div>

      {/* Quote text */}
      <p style={{
        position: "relative",
        zIndex: 1,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: isLarge ? "1.35em" : "1.15em",
        fontWeight: 600,
        lineHeight: 1.4,
        margin: 0,
        color: "rgba(255,255,255,0.96)",
        letterSpacing: "-0.01em",
      }}>
        {quote}
      </p>

      {/* spacer so star watermark doesn't overlap text */}
      <div aria-hidden="true" />

      {/* Star watermark */}
      <div style={{
        position: "absolute",
        bottom: isLarge ? "8%" : "-6%",
        right: isLarge ? "3%" : "-4%",
        zIndex: 0,
        transform: `rotate(12deg)`,
        transition: "transform 0.5s ease",
      }}>
        <StarIcon size={isLarge ? 160 : 88} opacity={0.1} />
      </div>
    </div>
  );
}

export function BentoProjectCards() {
  return (
    <div className="pcard-grid">
      {cardData.map((c, i) => (
        <HCard key={i} {...c} />
      ))}
    </div>
  );
}
