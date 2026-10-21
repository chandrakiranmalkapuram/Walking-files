import React from 'react';
import type { AppRelease } from '../data/appsData';
import { ReleaseBadge } from './ReleaseBadge';
import { GithubIcon } from './GithubIcon';
import { ArrowRight, Clock, Download, Sparkles, Laptop } from 'lucide-react';

interface AppCardProps {
  app: AppRelease;
  navigate: (route: string) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, navigate }) => {
  const isAvailableWithAsset = app.status === 'available' && Boolean(app.downloadUrl);

  return (
    <article className="app-card arch-card" aria-label={`Application ${app.name}`}>
      {/* Card Header: Icon + Category + Status */}
      <div className="app-card-top">
        <div className="app-icon-wrapper">
          <img src={app.icon} alt={`${app.name} icon`} className="app-card-icon" width="48" height="48" />
        </div>
        <div className="app-meta">
          <span className="app-category">{app.category}</span>
          <ReleaseBadge status={app.status} version={app.version} />
        </div>
      </div>

      {/* App Identity */}
      <div className="app-card-body">
        <h3 className="app-card-title">{app.name}</h3>
        <p className="app-card-tagline">{app.tagline}</p>
        <p className="app-card-desc">{app.shortDescription}</p>

        {/* Platform & System */}
        <div className="app-platform-strip">
          <Laptop size={14} className="platform-icon" />
          <span>{app.platforms.join(', ')}</span>
          {app.minimumOS && <span className="os-badge">· {app.minimumOS}</span>}
        </div>

        {/* Feature Tags / Highlights */}
        {app.features && app.features.length > 0 && (
          <div className="app-feature-pills">
            {app.features.slice(0, 3).map((f, i) => (
              <span key={i} className="feature-pill">
                {f.title}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Actions: Honest Release Logic */}
      <div className="app-card-footer">
        <div className="primary-actions">
          {isAvailableWithAsset ? (
            <a
              href={app.downloadUrl}
              className="btn btn-gold btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={14} />
              <span>Download {app.packageType || 'macOS'}</span>
            </a>
          ) : app.status === 'in-development' ? (
            <div className="status-notice-pill">
              <Clock size={14} className="notice-icon" />
              <span>{app.statusMessage || 'macOS release coming soon'}</span>
            </div>
          ) : (
            <div className="status-notice-pill notice-upcoming">
              <Sparkles size={14} className="notice-icon" />
              <span>In Studio Conception</span>
            </div>
          )}

          <button
            onClick={() => navigate(`/${app.slug}`)}
            className="btn btn-outline btn-sm learn-more-btn"
          >
            <span>Product Page</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Verified GitHub Link */}
        {app.githubUrl && (
          <div className="secondary-actions">
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-github-link"
              title={`View ${app.name} source code on GitHub`}
            >
              <GithubIcon size={14} />
              <span>Source Repository</span>
            </a>
          </div>
        )}
      </div>

      <style>{`
        .app-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .app-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }
        .app-icon-wrapper {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }
        .app-card-icon {
          border-radius: 10px;
        }
        .app-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .app-category {
          font-family: var(--font-serif);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--gold-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .app-card-body {
          flex: 1;
          margin-bottom: 24px;
        }
        .app-card-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .app-card-tagline {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--gold-primary);
          margin-bottom: 12px;
        }
        .app-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .app-platform-strip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .platform-icon {
          color: var(--gold-light);
        }
        .os-badge {
          color: var(--text-muted);
        }
        .app-feature-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .feature-pill {
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .app-card-footer {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
        }
        .primary-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn-sm {
          padding: 8px 14px;
          font-size: 0.85rem;
        }
        .status-notice-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          font-weight: 500;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #fbbf24;
        }
        .notice-upcoming {
          background: rgba(148, 163, 184, 0.08);
          border-color: rgba(148, 163, 184, 0.2);
          color: var(--text-muted);
        }
        .notice-icon {
          color: currentColor;
        }
        .secondary-actions {
          display: flex;
          align-items: center;
        }
        .card-github-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .card-github-link:hover {
          color: var(--gold-light);
        }
      `}</style>
    </article>
  );
};
