import React, { useState } from 'react';
import { APPS_DATA } from '../data/appsData';
import { AppCard } from '../components/AppCard';
import { Code } from 'lucide-react';

interface AppsPageProps {
  navigate: (route: string) => void;
}

export const AppsPage: React.FC<AppsPageProps> = ({ navigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'Desktop Utility', 'Productivity & Writing'];

  const filteredApps =
    activeFilter === 'all'
      ? APPS_DATA
      : APPS_DATA.filter((app) => app.category === activeFilter);

  return (
    <div className="apps-page">
      <section className="apps-hero-section">
        <div className="jaali-grid-bg" aria-hidden="true"></div>

        <div className="wf-container">
          <div className="section-header-center">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>SOFTWARE CATALOGUE</span>
            </div>
            <h1 className="section-title font-serif">
              Desktop <em>Applications</em>
            </h1>
            <p className="section-desc">
              Every application in our catalogue is built to stand independently. Zero cloud accounts,
              zero tracking, and full respect for your macOS environment.
            </p>

            {/* Category Filter Pills */}
            <div className="catalogue-filters" role="group" aria-label="Filter applications by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter-chip ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat === 'all' ? 'All Applications' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Apps Grid */}
          <div className="catalogue-grid">
            {filteredApps.map((app) => (
              <AppCard key={app.slug} app={app} navigate={navigate} />
            ))}
          </div>

          {/* Release & Developer Data Management Guide */}
          <div className="release-system-guide arch-card">
            <div className="guide-header">
              <Code size={20} className="text-gold" />
              <div>
                <h3 className="guide-title font-serif">How Our Release Pipeline Works</h3>
                <p className="guide-subtitle">
                  Data-driven application releases without backend complexity.
                </p>
              </div>
            </div>
            <p className="guide-explain">
              All application statuses on Walking Files are driven directly by <code>src/data/appsData.ts</code>.
              To preserve credibility and trustworthiness:
            </p>
            <div className="guide-steps-list">
              <div className="guide-step">
                <span className="step-tag">1. In-Development:</span>
                <span className="step-text">
                  Apps with active codebases but pending public DMG releases show <em>"macOS release coming soon"</em> alongside the verified GitHub source link.
                </span>
              </div>
              <div className="guide-step">
                <span className="step-tag">2. Verified Releases:</span>
                <span className="step-text">
                  Once a genuine release is published to GitHub Releases, setting <code>downloadUrl</code> to the verified asset URL unlocks the download button automatically.
                </span>
              </div>
              <div className="guide-step">
                <span className="step-tag">3. Adding New Apps:</span>
                <span className="step-text">
                  Add a new typed entry in <code>APPS_DATA</code> with its icon and specification. The catalogue, product routing, and metadata update seamlessly.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .apps-page {
          padding-top: var(--space-3xl);
          padding-bottom: var(--space-4xl);
        }
        .apps-hero-section {
          position: relative;
        }
        .catalogue-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .filter-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-chip:hover {
          color: var(--text-primary);
          border-color: var(--border-gold);
        }
        .filter-chip.active {
          background: var(--gold-primary);
          color: #070a12;
          font-weight: 700;
          border-color: var(--gold-primary);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
        }
        .catalogue-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: var(--space-xl);
          margin-top: var(--space-3xl);
          margin-bottom: var(--space-4xl);
        }
        .release-system-guide {
          padding: 32px;
          background: rgba(14, 21, 38, 0.9);
        }
        .guide-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 16px;
        }
        .guide-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
        }
        .guide-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .guide-explain {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .guide-explain code {
          font-family: var(--font-mono);
          color: var(--gold-light);
          background: rgba(212, 175, 55, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .guide-steps-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .guide-step {
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-size: 0.88rem;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
        }
        .step-tag {
          font-family: var(--font-serif);
          font-weight: 700;
          color: var(--gold-light);
          white-space: nowrap;
        }
        .step-text {
          color: var(--text-muted);
          line-height: 1.5;
        }
        .step-text em {
          font-style: normal;
          color: #fbbf24;
        }
        .step-text code {
          font-family: var(--font-mono);
          color: #93c5fd;
        }
        @media (max-width: 768px) {
          .guide-step {
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};
