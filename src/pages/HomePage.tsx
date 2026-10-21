import React from 'react';
import { APPS_DATA, STUDIO_METADATA } from '../data/appsData';
import { AppCard } from '../components/AppCard';
import { OrbitPreview } from '../components/OrbitPreview';
import { JaaliMotif } from '../components/JaaliMotif';
import { ArrowRight, Shield, Cpu, Layers, EyeOff } from 'lucide-react';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="home-page">
      {/* ── HERO SECTION ── */}
      <section className="wf-hero-section" aria-labelledby="hero-headline">
        <div className="jaali-grid-bg" aria-hidden="true"></div>

        {/* Subtle Decorative Jaali Motifs in Corners */}
        <div className="hero-jaali-corner top-left" aria-hidden="true">
          <JaaliMotif type="arch-corner" width={140} height={140} opacity={0.3} />
        </div>
        <div className="hero-jaali-corner bottom-right" aria-hidden="true">
          <JaaliMotif type="arch-corner" width={140} height={140} opacity={0.3} className="rotate-180" />
        </div>

        <div className="wf-container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>INDEPENDENT SOFTWARE STUDIO</span>
            </div>

            <h1 id="hero-headline" className="hero-headline font-serif">
              Thoughtfully made tools. <em>Ready for your everyday.</em>
            </h1>

            <p className="hero-subtext">
              Walking Files creates useful desktop applications designed to make everyday
              digital work simpler, more focused, and genuinely enjoyable. Always private,
              completely offline, and crafted with precision.
            </p>

            <div className="hero-cta-group">
              <button
                onClick={() => {
                  const el = document.getElementById('catalogue');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/apps');
                }}
                className="btn btn-gold"
              >
                <span>Explore Applications</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate('/orbit')}
                className="btn btn-outline"
              >
                <span className="gold-sparkle">✦</span>
                <span>Discover ORBIT for macOS</span>
              </button>
            </div>

            {/* Quick Metrics / Verified Badges */}
            <div className="hero-credentials">
              <div className="credential-item">
                <span className="cred-val font-serif">100%</span>
                <span className="cred-lbl">Offline Execution</span>
              </div>
              <div className="credential-sep"></div>
              <div className="credential-item">
                <span className="cred-val font-serif">macOS</span>
                <span className="cred-lbl">Universal Architecture</span>
              </div>
              <div className="credential-sep"></div>
              <div className="credential-item">
                <span className="cred-val font-serif">Rust</span>
                <span className="cred-lbl">High-Performance Core</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition: Layered Indian Geometry + ORBIT Teaser */}
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="card-jaali-layer">
                <JaaliMotif type="mandala-accent" width={280} height={280} opacity={0.2} />
              </div>
              <div className="hero-orb-preview">
                <div className="hero-badge-pill">
                  <span className="pulse-indicator"></span>
                  <span>FLAGSHIP APPLICATION</span>
                </div>
                <div className="hero-icon-display">
                  <img
                    src="/orbit-icon.svg"
                    alt="ORBIT Application Icon"
                    width="100"
                    height="100"
                    className="hero-orbit-icon"
                  />
                </div>
                <h2 className="hero-app-name font-serif">ORBIT</h2>
                <p className="hero-app-tag">Drop it. Transform it. Done.</p>
                <div className="hero-app-actions">
                  <span className="tag-pill">Format Conversion</span>
                  <span className="tag-pill">PDF Synthesis</span>
                  <span className="tag-pill">Safe Archive</span>
                </div>
                <button
                  onClick={() => navigate('/orbit')}
                  className="btn btn-outline btn-hero-preview"
                >
                  <span>Experience Interactive Demo</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED APPLICATION SPOTLIGHT (ORBIT) ── */}
      <section className="wf-featured-section" aria-labelledby="featured-heading">
        <div className="wf-container">
          <div className="section-header-center">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>FEATURED APPLICATION</span>
            </div>
            <h2 id="featured-heading" className="section-title">
              Meet <em>ORBIT</em> for Mac
            </h2>
            <p className="section-desc">
              A floating desktop orb that stays quietly on top of your work. When you need to
              convert photos, synthesize multi-page PDFs, or unpack archives, drop them on the orb.
            </p>
          </div>

          <div className="featured-interactive-stage">
            <OrbitPreview />
          </div>

          <div className="featured-details-grid">
            <div className="feature-mini-card arch-card">
              <div className="feature-mini-icon">
                <Layers size={20} />
              </div>
              <h3 className="feature-mini-title">Minimal Always-on-Top Orb</h3>
              <p className="feature-mini-desc">
                Float ORBIT over your active Finder windows, Figma canvas, or browser. Pin or unpin
                at will with zero distraction.
              </p>
            </div>

            <div className="feature-mini-card arch-card">
              <div className="feature-mini-icon">
                <Cpu size={20} />
              </div>
              <h3 className="feature-mini-title">Native Rust Performance</h3>
              <p className="feature-mini-desc">
                Built on Tauri v2 with compiled Rust engines. Instantaneous sub-second conversions
                with modest CPU and memory consumption.
              </p>
            </div>

            <div className="feature-mini-card arch-card">
              <div className="feature-mini-icon">
                <EyeOff size={20} />
              </div>
              <h3 className="feature-mini-title">Complete Local Privacy</h3>
              <p className="feature-mini-desc">
                No telemetry. No remote servers. No file uploads. Original source files remain safe
                and uncorrupted on your local disk.
              </p>
            </div>
          </div>

          <div className="featured-action-bar">
            <button onClick={() => navigate('/orbit')} className="btn btn-gold">
              <span>View Full ORBIT Specification</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="https://github.com/chandrakiranmalkapuram/orbit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS CATALOGUE PREVIEW ── */}
      <section id="catalogue" className="wf-catalogue-section" aria-labelledby="catalogue-heading">
        <div className="wf-container">
          <div className="section-header-split">
            <div>
              <div className="eyebrow-badge">
                <span className="dot"></span>
                <span>SOFTWARE CATALOGUE</span>
              </div>
              <h2 id="catalogue-heading" className="section-title">
                Handcrafted <em>Applications</em>
              </h2>
            </div>
            <p className="section-desc">
              Every tool in our catalogue adheres to the same standard: single-purpose clarity,
              local offline operation, and respect for your workspace.
            </p>
          </div>

          <div className="apps-grid">
            {APPS_DATA.map((app) => (
              <AppCard key={app.slug} app={app} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO PHILOSOPHY (WARM IVORY / PARCHMENT SECTION) ── */}
      <section className="section-parchment wf-philosophy-section" aria-labelledby="philosophy-heading">
        <div className="wf-container">
          <div className="section-header-center">
            <span className="eyebrow-badge" style={{ background: 'rgba(180, 140, 50, 0.15)', borderColor: 'rgba(180, 140, 50, 0.3)', color: '#997819' }}>
              <span className="dot" style={{ background: '#997819' }}></span>
              THE STUDIO'S APPROACH
            </span>
            <h2 id="philosophy-heading" className="section-title font-serif">
              Built on <em>Principle</em> & Craft
            </h2>
            <p className="section-desc">
              We do not build software to capture attention or hoard data. We build software to
              perform discrete tasks with elegance and get out of your way.
            </p>
          </div>

          <div className="philosophy-grid">
            {STUDIO_METADATA.principles.map((pr) => (
              <div key={pr.number} className="arch-card philosophy-card">
                <div className="principle-number font-serif">{pr.number}</div>
                <h3 className="principle-title font-serif">{pr.title}</h3>
                <p className="principle-summary">{pr.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESTRAINED PRIVACY & QUALITY STATEMENT ── */}
      <section className="wf-privacy-statement-section">
        <div className="wf-container-narrow">
          <div className="privacy-card arch-card">
            <div className="privacy-badge-icon">
              <Shield size={28} />
            </div>
            <h3 className="privacy-title font-serif">
              Our Privacy & Quality Guarantee
            </h3>
            <p className="privacy-text">
              Walking Files applications operate under a strict offline contract. We do not require
              user accounts, we embed no tracking scripts or telemetry SDKs, and we never transmit
              your documents, images, or archives across the internet. Every transformation is performed
              directly by native binaries on your Mac.
            </p>
            <div className="privacy-bullet-row">
              <span className="privacy-item">✓ Zero analytics</span>
              <span className="privacy-item">✓ Zero server uploads</span>
              <span className="privacy-item">✓ Original files preserved</span>
              <span className="privacy-item">✓ Open-source auditable</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .wf-hero-section {
          position: relative;
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
          overflow: hidden;
        }
        .hero-jaali-corner {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }
        .hero-jaali-corner.top-left { top: 0; left: 0; }
        .hero-jaali-corner.bottom-right { bottom: 0; right: 0; }
        .rotate-180 { transform: rotate(180deg); }
        .hero-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: var(--space-3xl);
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-headline {
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin-top: 18px;
          margin-bottom: 22px;
          letter-spacing: -0.02em;
        }
        .hero-subtext {
          font-size: 1.12rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 580px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .gold-sparkle {
          color: var(--gold-light);
        }
        .hero-credentials {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }
        .credential-item {
          display: flex;
          flex-direction: column;
        }
        .cred-val {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--gold-light);
        }
        .cred-lbl {
          font-size: 0.76rem;
          color: var(--text-muted);
        }
        .credential-sep {
          width: 1px;
          height: 32px;
          background: var(--border-subtle);
        }
        /* Hero Visual Card */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero-visual-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: rgba(14, 21, 38, 0.85);
          border: 1px solid var(--border-gold);
          border-radius: 28px;
          padding: 36px 28px;
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.1);
          overflow: hidden;
          text-align: center;
        }
        .card-jaali-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }
        .hero-orb-preview {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-family: var(--font-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--gold-light);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--border-gold);
          margin-bottom: 20px;
        }
        .pulse-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--saffron-vibrant);
          box-shadow: 0 0 8px var(--saffron-vibrant);
        }
        .hero-icon-display {
          margin-bottom: 16px;
          filter: drop-shadow(0 10px 25px rgba(255, 122, 0, 0.45));
          transition: transform var(--transition-smooth);
        }
        .hero-visual-card:hover .hero-icon-display {
          transform: scale(1.05) rotate(3deg);
        }
        .hero-app-name {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .hero-app-tag {
          font-size: 0.88rem;
          color: var(--gold-primary);
          font-weight: 600;
          margin-bottom: 18px;
        }
        .hero-app-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin-bottom: 24px;
        }
        .tag-pill {
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }
        .btn-hero-preview {
          width: 100%;
          font-size: 0.85rem;
          padding: 10px 18px;
        }

        /* Featured Section */
        .wf-featured-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
          position: relative;
        }
        .section-header-center {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-bottom: var(--space-3xl);
        }
        .featured-interactive-stage {
          margin-bottom: var(--space-3xl);
        }
        .featured-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
        }
        .feature-mini-card {
          padding: 24px;
        }
        .feature-mini-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--border-gold);
          color: var(--gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .feature-mini-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .feature-mini-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .featured-action-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Catalogue Section */
        .wf-catalogue-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
          border-top: 1px solid var(--border-subtle);
        }
        .section-header-split {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--space-xl);
          margin-bottom: var(--space-3xl);
          flex-wrap: wrap;
        }
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: var(--space-xl);
        }

        /* Philosophy Section */
        .wf-philosophy-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
        }
        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-lg);
        }
        .philosophy-card {
          padding: 28px;
        }
        .principle-number {
          font-size: 2rem;
          font-weight: 700;
          color: #997819;
          margin-bottom: 12px;
          opacity: 0.8;
        }
        .principle-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--parchment-ink);
          margin-bottom: 10px;
        }
        .principle-summary {
          font-size: 0.9rem;
          color: var(--parchment-muted);
          line-height: 1.6;
        }

        /* Privacy Statement Section */
        .wf-privacy-statement-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
        }
        .privacy-card {
          text-align: center;
          padding: 40px;
          border-color: rgba(212, 175, 55, 0.35);
        }
        .privacy-badge-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
        }
        .privacy-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
        }
        .privacy-text {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .privacy-bullet-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
          font-size: 0.85rem;
          color: var(--gold-light);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-credentials {
            justify-content: center;
          }
          .featured-details-grid {
            grid-template-columns: 1fr;
          }
          .apps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
