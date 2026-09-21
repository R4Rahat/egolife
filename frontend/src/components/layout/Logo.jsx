

export default function Logo({ className = "h-10 w-auto" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wi-Fi Symbol (above the 'o'/'L') */}
      <g transform="translate(230, 10)">
        {/* Outer Arc */}
        <path
          d="M 10 30 Q 40 0 70 30"
          stroke="#00AEEF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle Arc */}
        <path
          d="M 22 42 Q 40 24 58 42"
          stroke="#00AEEF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner Arc */}
        <path
          d="M 34 54 Q 40 48 46 54"
          stroke="#00AEEF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Dot */}
        <circle cx="40" cy="65" r="5" fill="#00AEEF" />
      </g>

      {/* eGoLife Text */}
      <text
        x="10"
        y="95"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="76"
        fill="#00AEEF"
        letterSpacing="-0.02em"
      >
        eGoLife
      </text>
    </svg>
  );
}
