import React from 'react';
import { STUDIO_METADATA } from '../data/appsData';
import { GithubIcon } from '../components/GithubIcon';
import { ArrowUpRight, Mail } from 'lucide-react';

interface AboutPageProps {
  navigate?: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="about-page">
      {/* ── ABOUT HERO ── */}
      <section className="about-hero-section">
        <div className="jaali-grid-bg" aria-hidden="true"></div>

        <div className="wf-container-narrow">
          <div className="section-header-center">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>ABOUT THE STUDIO</span>
            </div>
            <h1 className="section-title font-serif">
              Quiet tools for <em>focused</em> work.
            </h1>
            <p className="section-desc">
              Walking Files is an independent software brand dedicated to crafting useful,
              well-behaved desktop utilities for everyday macOS workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE STORY & ORIGIN ── */}
      <section className="about-story-section">
        <div className="wf-container-narrow">
          <div className="story-content arch-card">
            <h2 className="story-title font-serif">Why Walking Files?</h2>
            <div className="story-paragraphs">
              <p>
                Modern software has grown increasingly loud. Applications that used to be simple tools
                now require cloud accounts, monthly subscriptions, telemetry beacons, and relentless
                notifications. Even basic operations—like converting an image, combining receipts into
                a PDF, or checking an archive—often push users toward ad-laden web uploaders that compromise
                their privacy.
              </p>
              <p>
                <strong>Walking Files was created to reverse that trend.</strong>
              </p>
              <p>
                We build compact, single-purpose utilities that live locally on your Mac. They float
                when you need them, perform instant transformations with compiled native code, and disappear
                when you're finished. No accounts to create. No internet connection required. No files
                leaving your disk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIAN HERITAGE & DESIGN PHILOSOPHY ── */}
      <section className="about-heritage-section section-parchment">
        <div className="wf-container-narrow">
          <div className="section-header-center">
            <span className="eyebrow-badge" style={{ background: 'rgba(180, 140, 50, 0.15)', borderColor: 'rgba(180, 140, 50, 0.3)', color: '#997819' }}>
              <span className="dot" style={{ background: '#997819' }}></span>
              DESIGN PHILOSOPHY
            </span>
            <h2 className="section-title font-serif">
              Indian Craftsmanship & <em>Modern Software</em>
            </h2>
            <p className="section-desc">
              Drawing inspiration from historic Indian architecture, step-wells, and jaali latticework,
              we approach software engineering as an intentional craft.
            </p>
          </div>

          <div className="heritage-grid">
            <div className="heritage-card arch-card">
              <h3 className="heritage-card-title font-serif">Architectural Balance</h3>
              <p className="heritage-card-desc">
                Like the geometric harmony of Indian stone pavilions and arches, software interfaces
                should feel proportional, balanced, and timeless rather than fleetingly trendy.
              </p>
            </div>

            <div className="heritage-card arch-card">
              <h3 className="heritage-card-title font-serif">Warmth & Restraint</h3>
              <p className="heritage-card-desc">
                Instead of sterile neon startup tropes, our aesthetic pairs midnight indigo and deep ink
                with warm ivory, parchment, and antique gold accents.
              </p>
            </div>

            <div className="heritage-card arch-card">
              <h3 className="heritage-card-title font-serif">Durable Construction</h3>
              <p className="heritage-card-desc">
                We use Rust and Tauri v2 to ensure our desktop binaries are lightweight, robust,
                and respect system resources without consuming gigabytes of memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER & DEVELOPER PROFILE ── */}
      <section className="about-founder-section">
        <div className="wf-container-narrow">
          <div className="founder-card arch-card">
            <div className="founder-header">
              <div className="founder-avatar-box">
                <span className="avatar-monogram font-serif">CK</span>
              </div>
              <div>
                <h3 className="founder-name font-serif">{STUDIO_METADATA.founder}</h3>
                <p className="founder-title">{STUDIO_METADATA.founderTitle} · Greater London, UK</p>
              </div>
            </div>

            <p className="founder-bio">
              Chandra Kiran is a UK-based systems and cloud infrastructure engineer who also creates
              independent desktop tools. He oversees engineering, architecture, and design for Walking
              Files, focusing on local-first privacy and native performance.
            </p>

            <div className="founder-actions">
              <a
                href={STUDIO_METADATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                <span>Visit Personal Portfolio (chandrakiran.dev)</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={STUDIO_METADATA.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={`mailto:${STUDIO_METADATA.contactEmail}`}
                className="btn btn-ghost btn-sm"
              >
                <Mail size={14} />
                <span>{STUDIO_METADATA.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          padding-bottom: var(--space-4xl);
        }
        .about-hero-section {
          position: relative;
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-3xl);
        }
        .about-story-section {
          padding-bottom: var(--space-4xl);
        }
        .story-content {
          padding: 40px;
        }
        .story-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .story-paragraphs strong {
          color: var(--gold-light);
        }
        .about-heritage-section {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
        }
        .heritage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-lg);
          margin-top: var(--space-2xl);
        }
        .heritage-card {
          padding: 28px;
        }
        .heritage-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--parchment-ink);
          margin-bottom: 10px;
        }
        .heritage-card-desc {
          font-size: 0.92rem;
          color: var(--parchment-muted);
          line-height: 1.65;
        }
        .about-founder-section {
          padding-top: var(--space-4xl);
        }
        .founder-card {
          padding: 36px;
        }
        .founder-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 20px;
        }
        .founder-avatar-box {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-monogram {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--gold-light);
        }
        .founder-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }
        .founder-title {
          font-size: 0.88rem;
          color: var(--gold-primary);
        }
        .founder-bio {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .founder-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media (max-width: 600px) {
          .story-content, .founder-card {
            padding: 24px;
          }
          .founder-actions {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
};
