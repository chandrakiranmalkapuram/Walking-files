import React from 'react';
import type { ReleaseStatus } from '../data/appsData';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ReleaseBadgeProps {
  status: ReleaseStatus;
  version?: string;
  className?: string;
}

export const ReleaseBadge: React.FC<ReleaseBadgeProps> = ({
  status,
  version,
  className = '',
}) => {
  if (status === 'available') {
    return (
      <span className={`status-pill status-available ${className}`}>
        <CheckCircle2 size={13} aria-hidden="true" />
        <span>v{version || '1.0.0'} · Available</span>
      </span>
    );
  }

  if (status === 'in-development') {
    return (
      <span className={`status-pill status-development ${className}`}>
        <Clock size={13} aria-hidden="true" />
        <span>{version ? `v${version} · ` : ''}In Active Development</span>
      </span>
    );
  }

  return (
    <span className={`status-pill status-upcoming ${className}`}>
      <Sparkles size={13} aria-hidden="true" />
      <span>Concept in Roadmap</span>
    </span>
  );
};
