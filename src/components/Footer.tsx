import React from 'react';
import { STUDIO_METADATA } from '../data/appsData';
import { JaaliMotif } from './JaaliMotif';
import { GithubIcon } from './GithubIcon';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  navigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="wf-footer" role="contentinfo">
      {/* Decorative Gold Jaali Border */}
      <div className="footer-jaali-border">
        <JaaliMotif type="stepwell-border" height={16} opacity={0.25} />
      </div>

      <div className="wf-container footer-content">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <svg
                width="32"
                height="32"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="64" height="64" rx="14" fill="#131C33" stroke="#D4AF37" strokeWidth="2.5" />
                <path
                  d="M18 46 L18 24 L28 24 L32 28 L46 28 L46 46 Z"
                  fill="none"
                  stroke="#F7D87C"
                  strokeWidth="3.2"
                  strokeLinejoin="round"
                />
                <polygon points="32,18 38,25 32,32 26,25" fill="#D4AF37" />
                <circle cx="32" cy="38" r="3.5" fill="#F7D87C" />
              </svg>
              <div>
                <span className="footer-title">Walking Files</span>
                <span className="footer-tagline">Independent Software Studio</span>
              </div>
            </div>
            <p className="footer-summary">
              Creating useful, thoughtfully designed desktop applications for macOS. Rooted in
              architectural symmetry, craft, and offline local privacy.
            </p>
            <div className="footer-privacy-badge">
              <ShieldCheck size={14} className="privacy-icon" />
              <span>Zero tracking. All files remain local.</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('/')} className="footer-link-btn">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/apps')} className="footer-link-btn">
                  Applications Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/orbit')} className="footer-link-btn footer-orbit-link">
                  <span className="gold-dot"></span>
                  ORBIT for macOS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="footer-link-btn">
                  About the Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Applications Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Applications</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('/orbit')} className="footer-link-btn">
                  ORBIT — Desktop Utility
                </button>
              </li>
              <li>
                <span className="footer-upcoming-label">FOLIO — Markdown Studio (Concept)</span>
              </li>
              <li>
                <a
                  href="https://github.com/chandrakiranmalkapuram/orbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  <GithubIcon size={14} />
                  <span>ORBIT GitHub Repo</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Developer Profile */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Developer</h4>
            <p className="footer-developer-note">
              Conceived and crafted by{' '}
              <a
                href={STUDIO_METADATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link"
              >
                Chandra Kiran Malkapuram
                <ArrowUpRight size={12} />
              </a>
              , UK-based systems and cloud infrastructure engineer.
            </p>
            <div className="footer-social-links">
              <a
                href={STUDIO_METADATA.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={`mailto:${STUDIO_METADATA.contactEmail}`}
                className="footer-contact-link"
                title="Send inquiry"
              >
                <span>{STUDIO_METADATA.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Indian Architectural Hairline & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {STUDIO_METADATA.year} {STUDIO_METADATA.name}. All rights reserved.
          </p>
          <p className="footer-attribution">
            Built with modern web standards and native Rust utilities. Inspired by Indian geometry and contemporary software design.
          </p>
        </div>
      </div>

      <style>{`
        .wf-footer {
          background: #05080f;
          border-top: 1px solid var(--border-gold);
          color: var(--text-muted);
          position: relative;
          margin-top: auto;
        }
        .footer-jaali-border {
          width: 100%;
          height: 16px;
          overflow: hidden;
          background: rgba(212, 175, 55, 0.05);
        }
        .footer-content {
          padding-top: var(--space-3xl);
          padding-bottom: var(--space-2xl);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: var(--space-2xl);
          margin-bottom: var(--space-3xl);
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .footer-title {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          display: block;
        }
        .footer-tagline {
          font-family: var(--font-serif);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--gold-primary);
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .footer-summary {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 360px;
          margin-bottom: 16px;
        }
        .footer-privacy-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #4ade80;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }
        .footer-col-heading {
          font-family: var(--font-serif);
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.88rem;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: color var(--transition-fast);
        }
        .footer-link-btn:hover {
          color: var(--gold-light);
        }
        .footer-orbit-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
        }
        .gold-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold-primary);
        }
        .footer-upcoming-label {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.35);
        }
        .footer-ext-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.85rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .footer-ext-link:hover {
          color: var(--gold-light);
        }
        .footer-developer-note {
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .developer-link {
          color: var(--gold-light);
          text-decoration: underline;
          text-underline-offset: 3px;
          display: inline-flex;
          align-items: center;
          gap: 2px;
          font-weight: 600;
        }
        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }
        .footer-icon-btn:hover {
          color: var(--gold-light);
          border-color: var(--border-gold);
        }
        .footer-contact-link {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
        }
        .footer-contact-link:hover {
          color: var(--gold-light);
        }
        .footer-bottom {
          padding-top: var(--space-xl);
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.8rem;
        }
        .footer-copy {
          color: var(--text-muted);
        }
        .footer-attribution {
          color: rgba(255, 255, 255, 0.4);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xl);
          }
          .footer-brand-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
