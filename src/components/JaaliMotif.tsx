import React from 'react';

interface JaaliMotifProps {
  type?: 'latticework' | 'arch-corner' | 'mandala-accent' | 'stepwell-border';
  className?: string;
  opacity?: number;
  width?: number | string;
  height?: number | string;
}

export const JaaliMotif: React.FC<JaaliMotifProps> = ({
  type = 'latticework',
  className = '',
  opacity = 0.4,
  width = '100%',
  height = '100%',
}) => {
  if (type === 'arch-corner') {
    return (
      <svg
        viewBox="0 0 120 120"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ opacity }}
        aria-hidden="true"
      >
        <path
          d="M0 0 H120 C60 0 0 60 0 120 V0 Z"
          fill="url(#arch-gold-grad)"
          fillOpacity="0.08"
        />
        <path
          d="M0 0 C60 0 100 40 100 100"
          stroke="url(#arch-gold-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="20" cy="20" r="3" fill="#D4AF37" />
        <circle cx="45" cy="45" r="2" fill="#D4AF37" />
        <defs>
          <linearGradient id="arch-gold-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7D87C" />
            <stop offset="100%" stopColor="#997819" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === 'mandala-accent') {
    return (
      <svg
        viewBox="0 0 200 200"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ opacity }}
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="65" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="#D4AF37" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="16" stroke="#D4AF37" strokeWidth="1.2" />
        {/* Diamond array */}
        <polygon points="100,10 115,35 100,60 85,35" stroke="#D4AF37" strokeWidth="0.75" fill="none" />
        <polygon points="100,140 115,165 100,190 85,165" stroke="#D4AF37" strokeWidth="0.75" fill="none" />
        <polygon points="10,100 35,115 60,100 35,85" stroke="#D4AF37" strokeWidth="0.75" fill="none" />
        <polygon points="140,100 165,115 190,100 165,85" stroke="#D4AF37" strokeWidth="0.75" fill="none" />
        {/* Diagonal accents */}
        <line x1="36" y1="36" x2="164" y2="164" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="164" y1="36" x2="36" y2="164" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5" />
      </svg>
    );
  }

  // Default: jaali latticework pattern
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="jaali-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Diamond jaali unit */}
          <path
            d="M20 0 L40 20 L20 40 L0 20 Z"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.7"
            strokeOpacity="0.4"
          />
          <circle cx="20" cy="20" r="2" fill="#D4AF37" fillOpacity="0.5" />
          <path
            d="M20 10 L30 20 L20 30 L10 20 Z"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.5"
            strokeOpacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jaali-grid)" />
    </svg>
  );
};
