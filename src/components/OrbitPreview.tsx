import React, { useState } from 'react';
import { ShieldCheck, Pin, Sparkles, Image, FileText, Archive, Sun, Moon } from 'lucide-react';

export const OrbitPreview: React.FC = () => {
  const [activeAction, setActiveAction] = useState<string>('pdf');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isPinned, setIsPinned] = useState<boolean>(true);

  const actions = [
    {
      id: 'format',
      label: 'PNG ↔ WebP',
      category: 'Image Conversion',
      icon: <Image size={16} />,
      detail: 'Convert between PNG, JPEG, and WebP instantly with zero compression artifacts.',
      sampleOutput: 'photo-optimized.webp (Saved beside original)',
    },
    {
      id: 'pdf',
      label: 'Combine to PDF',
      category: 'Multi-Page Synthesis',
      icon: <FileText size={16} />,
      detail: 'Merge multiple dragged photos into a single crisp, high-resolution PDF document.',
      sampleOutput: 'Documents (Combined).pdf (Ready in 0.4s)',
    },
    {
      id: 'archive',
      label: 'Safe Unzip',
      category: 'Archive Peek',
      icon: <Archive size={16} />,
      detail: 'Extract compressed ZIP files safely without overwriting or deleting source files.',
      sampleOutput: 'Archive_extracted/ (Protected naming collision)',
    },
    {
      id: 'privacy',
      label: 'Strip EXIF Data',
      category: 'Privacy Sanitizer',
      icon: <ShieldCheck size={16} />,
      detail: 'Remove hidden GPS coordinates, camera models, and timestamps from photos.',
      sampleOutput: 'Photo_clean.jpg (EXIF metadata removed)',
    },
  ];

  const current = actions.find((a) => a.id === activeAction) || actions[0];

  return (
    <div className="orbit-preview-container">
      {/* Outer Floating Window Mockup */}
      <div className={`orbit-window-frame ${isDark ? 'dark-theme' : 'light-theme'}`}>
        {/* Window Top Control Bar */}
        <div className="orbit-window-topbar">
          <div className="topbar-left">
            <span className="window-dot dot-close" title="Close ORBIT"></span>
            <span className="window-dot dot-min"></span>
            <span className="window-dot dot-max"></span>
            <span className="window-badge">macOS Floating Window</span>
          </div>
          <div className="topbar-center">
            <span className="topbar-title">ORBIT</span>
            <span className="topbar-pill">820 × 820</span>
          </div>
          <div className="topbar-right">
            <button
              onClick={() => setIsPinned(!isPinned)}
              className={`topbar-btn ${isPinned ? 'active' : ''}`}
              title={isPinned ? 'Always on Top (Active)' : 'Pin on Top'}
              aria-label="Pin window on top"
            >
              <Pin size={13} />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="topbar-btn"
              title="Toggle Light / Dark mode"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={13} /> : <Moon size={13} />}
            </button>
          </div>
        </div>

        {/* Floating Orb Centerpiece & Radial Interface */}
        <div className="orbit-orb-stage">
          {/* Subtle Jaali Orbit Rings */}
          <div className="orbit-ring ring-outer"></div>
          <div className="orbit-ring ring-middle"></div>
          <div className="orbit-ring ring-inner"></div>

          {/* Central Radiant Surya Orb */}
          <div className="orbit-center-orb">
            <div className="orb-radiance-glow"></div>
            <div className="orb-body">
              <img
                src="/orbit-icon.svg"
                alt="ORBIT Authentic Icon"
                className="orb-logo-img"
                width="84"
                height="84"
              />
            </div>
            <div className="orb-drop-label">
              <span className="drop-icon">✦</span>
              <span className="drop-text">Drag files here</span>
              <span className="drop-sub">or click an action below</span>
            </div>
          </div>

          {/* Orbital Action Chips */}
          <div className="orbit-action-selector">
            {actions.map((act) => (
              <button
                key={act.id}
                onClick={() => setActiveAction(act.id)}
                className={`action-chip ${activeAction === act.id ? 'active' : ''}`}
                aria-pressed={activeAction === act.id}
              >
                <span className="chip-icon">{act.icon}</span>
                <span className="chip-label">{act.label}</span>
              </button>
            ))}
          </div>

          {/* Real-Time Simulated Action Panel */}
          <div className="orbit-feedback-card">
            <div className="feedback-header">
              <div className="feedback-meta">
                <span className="category-tag">{current.category}</span>
                <span className="status-indicator">
                  <span className="pulse-dot"></span>
                  Local Engine Active
                </span>
              </div>
              <span className="timing-badge">~12ms</span>
            </div>
            <p className="feedback-detail">{current.detail}</p>
            <div className="feedback-output">
              <span className="output-label">Output:</span>
              <code className="output-path">{current.sampleOutput}</code>
            </div>
          </div>
        </div>

        {/* Window Footer Status */}
        <div className="orbit-window-footer">
          <div className="footer-status-pill">
            <ShieldCheck size={13} className="text-emerald" />
            <span>100% Offline · Zero Data Leaves Your Mac</span>
          </div>
          <span className="footer-engine-tag">Powered by Rust & Tauri v2</span>
        </div>
      </div>

      <p className="preview-caption">
        <Sparkles size={14} className="caption-star" />
        Interactive UI Preview — Built from the exact <code>tauri.conf.json</code> specification (820×820, borderless floating window, offline execution).
      </p>

      <style>{`
        .orbit-preview-container {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
        }
        .orbit-window-frame {
          position: relative;
          border-radius: 24px;
          border: 1px solid var(--border-gold);
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(212, 175, 55, 0.12);
          overflow: hidden;
          transition: all var(--transition-smooth);
        }
        .orbit-window-frame.dark-theme {
          background: rgba(13, 20, 36, 0.94);
          color: #f8fafc;
        }
        .orbit-window-frame.light-theme {
          background: rgba(248, 246, 240, 0.96);
          color: #141722;
          border-color: rgba(180, 140, 50, 0.35);
        }
        .orbit-window-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.2);
        }
        .light-theme .orbit-window-topbar {
          background: rgba(0, 0, 0, 0.04);
          border-bottom-color: rgba(0, 0, 0, 0.08);
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .window-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .dot-close { background: #ff5f56; }
        .dot-min { background: #ffbd2e; }
        .dot-max { background: #27c93f; }
        .window-badge {
          margin-left: 8px;
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .topbar-center {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .topbar-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.1em;
          color: var(--gold-primary);
        }
        .topbar-pill {
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.12);
          color: var(--gold-light);
          font-family: var(--font-mono);
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .topbar-btn {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .topbar-btn.active, .topbar-btn:hover {
          color: var(--gold-light);
          border-color: var(--border-gold);
          background: rgba(212, 175, 55, 0.15);
        }
        .orbit-orb-stage {
          position: relative;
          padding: 36px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 420px;
          overflow: hidden;
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(212, 175, 55, 0.15);
          pointer-events: none;
        }
        .ring-outer { width: 440px; height: 440px; top: -10px; }
        .ring-middle { width: 330px; height: 330px; top: 45px; border-style: dotted; }
        .ring-inner { width: 220px; height: 220px; top: 100px; border-color: rgba(255, 122, 0, 0.18); }
        .orbit-center-orb {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          margin-bottom: 24px;
        }
        .orb-radiance-glow {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 122, 0, 0.45) 0%, rgba(212, 175, 55, 0.2) 60%, transparent 80%);
          filter: blur(14px);
          animation: orbPulse 4s ease-in-out infinite alternate;
        }
        .orb-body {
          position: relative;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 35% 35%, #1e2942 0%, #0d1424 100%);
          border: 2px solid var(--border-gold);
          box-shadow: 0 0 30px rgba(255, 122, 0, 0.35);
          transition: transform var(--transition-smooth);
        }
        .orbit-center-orb:hover .orb-body {
          transform: scale(1.06);
        }
        .orb-logo-img {
          filter: drop-shadow(0 4px 12px rgba(255, 122, 0, 0.5));
        }
        .orb-drop-label {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .drop-icon {
          color: var(--gold-primary);
          font-size: 0.8rem;
          margin-bottom: 2px;
        }
        .drop-text {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .light-theme .drop-text { color: #141722; }
        .drop-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .orbit-action-selector {
          position: relative;
          z-index: 3;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        .action-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .light-theme .action-chip {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.1);
          color: #334155;
        }
        .action-chip:hover {
          border-color: var(--border-gold);
          color: var(--gold-light);
          background: rgba(212, 175, 55, 0.1);
        }
        .action-chip.active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.22), rgba(255, 122, 0, 0.15));
          border-color: var(--gold-primary);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(212, 175, 55, 0.2);
        }
        .light-theme .action-chip.active {
          color: #141722;
          background: rgba(212, 175, 55, 0.2);
        }
        .chip-icon {
          display: flex;
          align-items: center;
          color: var(--gold-primary);
        }
        .orbit-feedback-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          background: rgba(18, 26, 46, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .light-theme .orbit-feedback-card {
          background: #ffffff;
          border-color: rgba(180, 140, 50, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }
        .feedback-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .feedback-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .category-tag {
          font-family: var(--font-serif);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--gold-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .light-theme .category-tag { color: #997819; }
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: #4ade80;
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
        }
        .timing-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .feedback-detail {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
          line-height: 1.45;
        }
        .light-theme .feedback-detail { color: #475569; }
        .feedback-output {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          padding-top: 8px;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
        }
        .light-theme .feedback-output {
          border-top-color: rgba(0, 0, 0, 0.08);
        }
        .output-label {
          color: var(--text-muted);
          font-weight: 600;
        }
        .output-path {
          font-family: var(--font-mono);
          color: #93c5fd;
          word-break: break-all;
        }
        .light-theme .output-path { color: #1d4ed8; }
        .orbit-window-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(0, 0, 0, 0.25);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.78rem;
        }
        .light-theme .orbit-window-footer {
          background: rgba(0, 0, 0, 0.03);
          border-top-color: rgba(0, 0, 0, 0.06);
        }
        .footer-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #4ade80;
        }
        .footer-engine-tag {
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .preview-caption {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
        }
        .preview-caption code {
          color: var(--gold-light);
          font-family: var(--font-mono);
        }
        .caption-star {
          color: var(--gold-primary);
        }
        @keyframes orbPulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          100% { transform: scale(1.1); opacity: 0.85; }
        }
        @media (max-width: 600px) {
          .topbar-pill, .window-badge {
            display: none;
          }
          .orbit-action-selector {
            gap: 6px;
          }
          .action-chip {
            font-size: 0.75rem;
            padding: 6px 10px;
          }
        }
      `}</style>
    </div>
  );
};
