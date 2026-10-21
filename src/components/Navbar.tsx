import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_METADATA } from '../data/appsData';
import { GithubIcon } from './GithubIcon';

interface NavbarProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, navigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (route: string) => {
    navigate(route);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="wf-navbar-wrapper">
      <div className="wf-container">
        <nav className="wf-navbar" aria-label="Main Navigation">
          {/* Brand Wordmark / Typographic Logo */}
          <button
            onClick={() => handleNav('/')}
            className="wf-nav-brand"
            aria-label="Walking Files — Home"
          >
            <div className="brand-symbol">
              <svg
                width="28"
                height="28"
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
            </div>
            <div className="brand-text">
              <span className="brand-title">Walking Files</span>
              <span className="brand-tag">DESKTOP STUDIO</span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="wf-nav-menu">
            <button
              onClick={() => handleNav('/')}
              className={`nav-link ${currentRoute === '/' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('/apps')}
              className={`nav-link ${currentRoute === '/apps' ? 'active' : ''}`}
            >
              Applications
            </button>
            <button
              onClick={() => handleNav('/orbit')}
              className={`nav-link nav-link-orbit ${currentRoute === '/orbit' ? 'active' : ''}`}
            >
              <span className="orbit-dot"></span>
              ORBIT
            </button>
            <button
              onClick={() => handleNav('/about')}
              className={`nav-link ${currentRoute === '/about' ? 'active' : ''}`}
            >
              About Studio
            </button>
          </div>

          {/* Right Actions: GitHub + Portfolio */}
          <div className="wf-nav-actions">
            <a
              href={STUDIO_METADATA.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="Walking Files GitHub Profile"
              title="Verified GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={STUDIO_METADATA.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-portfolio-pill"
              title="Visit Chandra Kiran's Personal Portfolio"
            >
              <span>chandrakiran.dev</span>
              <ArrowUpRight size={13} />
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="wf-mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-links">
            <button
              onClick={() => handleNav('/')}
              className={`mobile-link ${currentRoute === '/' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('/apps')}
              className={`mobile-link ${currentRoute === '/apps' ? 'active' : ''}`}
            >
              Applications Catalogue
            </button>
            <button
              onClick={() => handleNav('/orbit')}
              className={`mobile-link ${currentRoute === '/orbit' ? 'active' : ''}`}
            >
              ORBIT — Floating macOS Utility
            </button>
            <button
              onClick={() => handleNav('/about')}
              className={`mobile-link ${currentRoute === '/about' ? 'active' : ''}`}
            >
              About Walking Files
            </button>
            <hr className="mobile-divider" />
            <div className="mobile-external">
              <a
                href={STUDIO_METADATA.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-ext-link"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <GithubIcon size={18} />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={STUDIO_METADATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-ext-link"
              >
                <span>chandrakiran.dev (Portfolio)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .wf-navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background: rgba(7, 10, 18, 0.82);
          border-bottom: 1px solid var(--border-subtle);
          transition: border-color var(--transition-fast);
        }
        .wf-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .wf-nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .brand-symbol {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-smooth);
        }
        .wf-nav-brand:hover .brand-symbol {
          transform: rotate(4deg) scale(1.05);
        }
        .brand-text {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        .brand-tag {
          font-family: var(--font-serif);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--gold-primary);
          letter-spacing: 0.18em;
        }
        .wf-nav-menu {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-link.active {
          color: var(--gold-light);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.25);
        }
        .nav-link-orbit {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .orbit-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--saffron-vibrant);
          box-shadow: 0 0 8px var(--saffron-vibrant);
        }
        .wf-nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .nav-icon-link:hover {
          color: var(--gold-light);
          border-color: var(--border-gold);
          background: rgba(212, 175, 55, 0.1);
        }
        .nav-portfolio-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .nav-portfolio-pill:hover {
          color: var(--gold-light);
          border-color: var(--border-gold);
          background: rgba(212, 175, 55, 0.08);
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 7px;
          border-radius: var(--radius-sm);
          cursor: pointer;
        }
        .wf-mobile-drawer {
          display: flex;
          flex-direction: column;
          background: #0d1424;
          border-bottom: 1px solid var(--border-gold);
          padding: 20px;
          animation: slideDown 200ms ease;
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-link {
          background: none;
          border: none;
          text-align: left;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 12px 14px;
          border-radius: var(--radius-md);
          cursor: pointer;
        }
        .mobile-link.active {
          color: var(--gold-light);
          background: rgba(212, 175, 55, 0.12);
        }
        .mobile-divider {
          border: none;
          height: 1px;
          background: var(--border-subtle);
          margin: 12px 0;
        }
        .mobile-external {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-ext-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          color: var(--text-muted);
          text-decoration: none;
          background: rgba(255, 255, 255, 0.03);
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .wf-nav-menu, .nav-portfolio-pill {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
