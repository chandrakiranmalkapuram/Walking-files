import React, { useState } from 'react';
import { APPS_DATA } from '../data/appsData';
import { OrbitPreview } from '../components/OrbitPreview';
import { GithubIcon } from '../components/GithubIcon';
import {
  ShieldCheck,
  Clock,
  Terminal,
  Cpu,
  CheckCircle2,
  FileText,
  Lock,
  Archive,
  Image as ImageIcon,
  Copy,
  Check,
} from 'lucide-react';

interface OrbitProductPageProps {
  navigate: (route: string) => void;
}

export const OrbitProductPage: React.FC<OrbitProductPageProps> = ({ navigate }) => {
  const orbit = APPS_DATA.find((a) => a.slug === 'orbit')!;
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="orbit-product-page">
      {/* ── HEADER / HERO ── */}
      <section className="orbit-hero-section">
        <div className="jaali-grid-bg" aria-hidden="true"></div>

        <div className="wf-container orbit-hero-container">
          <div className="orbit-hero-header">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>{orbit.eyebrow}</span>
            </div>

            <div className="orbit-title-group">
              <img
                src={orbit.icon}
                alt="ORBIT Application Icon"
                width="72"
                height="72"
                className="orbit-main-icon"
              />
              <div>
                <h1 className="orbit-page-title font-serif">{orbit.name}</h1>
                <p className="orbit-page-tagline">{orbit.tagline}</p>
              </div>
            </div>

            <p className="orbit-hero-desc">{orbit.fullDescription}</p>

            {/* Release Status & Action */}
            <div className="orbit-release-action-card arch-card">
              <div className="release-status-row">
                <div className="release-status-left">
                  <div className="status-indicator-badge">
                    <Clock size={16} className="text-amber" />
                    <span className="status-strong">Version {orbit.version} · Active Development</span>
                  </div>
                  <p className="release-status-explain">
                    The native macOS build pipeline is being prepared for signed universal DMG releases.
                    Source code is available and buildable today via GitHub.
                  </p>
                </div>

                <div className="release-actions-right">
                  <div className="coming-soon-pill">
                    <Clock size={14} />
                    <span>ORBIT for macOS — release coming soon</span>
                  </div>
                  {orbit.githubUrl && (
                    <a
                      href={orbit.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <GithubIcon size={15} />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive ORBIT Preview */}
          <div className="orbit-preview-stage">
            <OrbitPreview />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: 1, 2, 3 ── */}
      <section className="orbit-workflow-section section-parchment" aria-labelledby="workflow-heading">
        <div className="wf-container">
          <div className="section-header-center">
            <span className="eyebrow-badge" style={{ background: 'rgba(180, 140, 50, 0.15)', borderColor: 'rgba(180, 140, 50, 0.3)', color: '#997819' }}>
              <span className="dot" style={{ background: '#997819' }}></span>
              EFFORTLESS DESKTOP FLOW
            </span>
            <h2 id="workflow-heading" className="section-title font-serif">
              Drop it. Pick an action. <em>Done.</em>
            </h2>
            <p className="section-desc">
              Three instinctive steps. No modal dialogues, no file selector trees, and no waiting.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-step-card arch-card">
              <div className="step-num font-serif">01</div>
              <h3 className="step-title font-serif">Drag & Drop</h3>
              <p className="step-desc">
                Drag photos, PDFs, or archives directly onto the floating orb, or click to pick files
                from Finder.
              </p>
              <div className="step-visual">
                <span className="visual-file">Photo_1.png</span>
                <span className="visual-arrow">➔</span>
                <span className="visual-orb-mini">🪐</span>
              </div>
            </div>

            <div className="workflow-step-card arch-card">
              <div className="step-num font-serif">02</div>
              <h3 className="step-title font-serif">Choose Action</h3>
              <p className="step-desc">
                Orbital buttons automatically illuminate based on your file types — image conversion,
                PDF merge, or archive peek.
              </p>
              <div className="step-visual">
                <span className="action-pill-demo active">[ Combine to PDF ]</span>
                <span className="action-pill-demo">[ to WebP ]</span>
              </div>
            </div>

            <div className="workflow-step-card arch-card">
              <div className="step-num font-serif">03</div>
              <h3 className="step-title font-serif">Saved Beside Original</h3>
              <p className="step-desc">
                Processed outputs appear immediately in the same folder. Original files are never
                overwritten or removed.
              </p>
              <div className="step-visual">
                <span className="visual-output">Document (Combined).pdf</span>
                <span className="visual-check">✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY ENGINE FEATURES (VERIFIED) ── */}
      <section className="orbit-features-section" aria-labelledby="features-heading">
        <div className="wf-container">
          <div className="section-header-center">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>ENGINE ARCHITECTURE</span>
            </div>
            <h2 id="features-heading" className="section-title">
              What You Can Do with <em>ORBIT</em>
            </h2>
            <p className="section-desc">
              Every engine is compiled into the native macOS binary with Rust 2021 for maximum speed and safety.
            </p>
          </div>

          <div className="features-grid">
            {orbit.features.map((feat, idx) => (
              <div key={idx} className="feature-card arch-card">
                <div className="feature-card-header">
                  <div className="feature-icon-box">
                    {feat.title.includes('Image') || feat.title.includes('Transform') ? (
                      <ImageIcon size={20} />
                    ) : feat.title.includes('PDF') ? (
                      <FileText size={20} />
                    ) : feat.title.includes('Metadata') ? (
                      <Lock size={20} />
                    ) : (
                      <Archive size={20} />
                    )}
                  </div>
                  <span className="feature-engine-label">{feat.engine}</span>
                </div>
                <h3 className="feature-title font-serif">{feat.title}</h3>
                <p className="feature-desc">{feat.description}</p>
                {feat.formats && (
                  <div className="feature-format-tags">
                    {feat.formats.map((fmt, i) => (
                      <span key={i} className="format-tag">
                        {fmt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM REQUIREMENTS & PRIVACY SPECIFICATION ── */}
      <section className="orbit-specs-section">
        <div className="wf-container">
          <div className="specs-layout-grid">
            {/* System Requirements */}
            <div className="specs-card arch-card">
              <div className="specs-card-header">
                <Cpu size={22} className="text-gold" />
                <h3 className="specs-card-title font-serif">System Requirements</h3>
              </div>
              <ul className="specs-list">
                <li>
                  <span className="spec-label">Operating System:</span>
                  <span className="spec-val">{orbit.requirements.os}</span>
                </li>
                <li>
                  <span className="spec-label">Processor:</span>
                  <span className="spec-val">{orbit.requirements.chipset}</span>
                </li>
                <li>
                  <span className="spec-label">Memory:</span>
                  <span className="spec-val">{orbit.requirements.ram}</span>
                </li>
                <li>
                  <span className="spec-label">Disk Footprint:</span>
                  <span className="spec-val">{orbit.requirements.storage}</span>
                </li>
                <li>
                  <span className="spec-label">Network Dependency:</span>
                  <span className="spec-val">{orbit.requirements.network}</span>
                </li>
              </ul>
            </div>

            {/* Offline Privacy Contract */}
            <div className="specs-card arch-card">
              <div className="specs-card-header">
                <ShieldCheck size={22} className="text-emerald" />
                <h3 className="specs-card-title font-serif">Privacy by Architecture</h3>
              </div>
              <div className="privacy-pledge-content">
                <p className="privacy-summary-text">{orbit.privacyPledge.summary}</p>
                <div className="privacy-points-list">
                  <div className="privacy-point">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Works offline: Disconnect your Wi-Fi and ORBIT runs identically.</span>
                  </div>
                  <div className="privacy-point">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>No telemetry: Zero tracking pixels, analytics pings, or diagnostic uploads.</span>
                  </div>
                  <div className="privacy-point">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Safe outputs: Original files are never modified, overwritten, or deleted.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTALLATION & DEVELOPER INSTRUCTIONS ── */}
      <section className="orbit-install-section">
        <div className="wf-container-narrow">
          <div className="install-card arch-card">
            <div className="install-header">
              <Terminal size={22} className="text-gold" />
              <div>
                <h3 className="install-title font-serif">Developer Run & Build Instructions</h3>
                <p className="install-subtitle">
                  ORBIT is open-source. You can clone the repository and run live development mode on your Mac.
                </p>
              </div>
            </div>

            <div className="terminal-box">
              <div className="terminal-top">
                <div className="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="terminal-title">zsh — Terminal</span>
                <button
                  onClick={() => handleCopy(orbit.installationGuide.liveDev.join('\n'))}
                  className="terminal-copy-btn"
                  title="Copy Commands"
                >
                  {copiedCmd ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCmd ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="terminal-code">
                <code>
                  {orbit.installationGuide.liveDev.map((line, idx) => (
                    <div key={idx} className="terminal-line">
                      <span className="prompt-symbol">$</span> {line}
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            <div className="install-footer">
              <a
                href={orbit.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <GithubIcon size={16} />
                <span>Clone from GitHub (chandrakiranmalkapuram/orbit)</span>
              </a>
              <button onClick={() => navigate('/apps')} className="btn btn-outline">
                <span>Back to Catalogue</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .orbit-product-page {
          padding-bottom: var(--space-4xl);
        }
        .orbit-hero-section {
          position: relative;
          padding-top: var(--space-3xl);
          padding-bottom: var(--space-4xl);
        }
        .orbit-hero-container {
          position: relative;
          z-index: 2;
        }
        .orbit-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: var(--space-3xl);
        }
        .orbit-title-group {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 18px;
          margin-bottom: 16px;
        }
        .orbit-main-icon {
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(255, 122, 0, 0.4);
        }
        .orbit-page-title {
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.02em;
          text-align: left;
        }
        .orbit-page-tagline {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--gold-primary);
          text-align: left;
        }
        .orbit-hero-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 680px;
          margin-bottom: 28px;
        }
        .orbit-release-action-card {
          width: 100%;
          max-width: 820px;
          padding: 24px 28px;
          text-align: left;
        }
        .release-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .release-status-left {
          flex: 1;
          min-width: 300px;
        }
        .status-indicator-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .text-amber { color: #fbbf24; }
        .text-emerald { color: #4ade80; }
        .text-gold { color: var(--gold-light); }
        .status-strong {
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
        }
        .release-status-explain {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .release-actions-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .coming-soon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          color: #fbbf24;
        }
        .orbit-preview-stage {
          margin-top: 20px;
        }

        /* Workflow Section */
        .orbit-workflow-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
        }
        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-lg);
        }
        .workflow-step-card {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
        }
        .step-num {
          font-size: 2.4rem;
          font-weight: 800;
          color: #997819;
          margin-bottom: 12px;
          opacity: 0.85;
        }
        .step-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--parchment-ink);
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 0.9rem;
          color: var(--parchment-muted);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }
        .step-visual {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          padding: 10px;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 8px;
        }
        .visual-file {
          font-family: var(--font-mono);
          color: #1e293b;
        }
        .visual-arrow { color: #997819; }
        .visual-orb-mini { font-size: 1.2rem; }
        .action-pill-demo {
          font-size: 0.75rem;
          padding: 4px 8px;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.05);
          color: #475569;
        }
        .action-pill-demo.active {
          background: rgba(180, 140, 50, 0.2);
          color: #997819;
          font-weight: 600;
        }
        .visual-output {
          font-family: var(--font-mono);
          color: #15803d;
          font-weight: 600;
        }
        .visual-check {
          color: #15803d;
          font-weight: 700;
        }

        /* Features Section */
        .orbit-features-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: var(--space-lg);
        }
        .feature-card {
          padding: 28px;
        }
        .feature-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .feature-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--border-gold);
          color: var(--gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-engine-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .feature-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .feature-format-tags {
          display: flex;
          gap: 6px;
        }
        .format-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(212, 175, 55, 0.08);
          color: var(--gold-light);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        /* Specs Section */
        .orbit-specs-section {
          padding-top: var(--space-3xl);
          padding-bottom: var(--space-3xl);
        }
        .specs-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
        }
        .specs-card {
          padding: 32px;
        }
        .specs-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .specs-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
        }
        .specs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .specs-list li {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          padding-bottom: 8px;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
        }
        .spec-label {
          color: var(--text-muted);
          font-weight: 500;
        }
        .spec-val {
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 600;
          text-align: right;
        }
        .privacy-summary-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .privacy-points-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .privacy-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Install Section */
        .orbit-install-section {
          padding-top: var(--space-3xl);
          padding-bottom: var(--space-3xl);
        }
        .install-card {
          padding: 36px;
        }
        .install-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        .install-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .install-subtitle {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .terminal-box {
          border-radius: 12px;
          background: #050811;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          margin-bottom: 24px;
        }
        .terminal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .terminal-dots {
          display: flex;
          gap: 6px;
        }
        .terminal-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        .terminal-title {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .terminal-copy-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 3px 8px;
          border-radius: 4px;
          cursor: pointer;
        }
        .terminal-copy-btn:hover {
          color: var(--gold-light);
          border-color: var(--border-gold);
        }
        .terminal-code {
          padding: 18px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #93c5fd;
          line-height: 1.8;
          overflow-x: auto;
        }
        .prompt-symbol {
          color: var(--gold-primary);
          user-select: none;
        }
        .install-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .workflow-grid, .specs-layout-grid {
            grid-template-columns: 1fr;
          }
          .release-status-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .release-actions-right {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};
