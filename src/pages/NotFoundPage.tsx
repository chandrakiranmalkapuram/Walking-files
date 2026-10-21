import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (route: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div className="not-found-page">
      <div className="wf-container-narrow">
        <div className="not-found-card arch-card">
          <span className="not-found-code font-serif">404</span>
          <h1 className="not-found-title font-serif">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for does not exist or has moved. Return to the home page to explore Walking Files desktop applications.
          </p>
          <button onClick={() => navigate('/')} className="btn btn-gold">
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </button>
        </div>
      </div>

      <style>{`
        .not-found-page {
          padding-top: var(--space-4xl);
          padding-bottom: var(--space-4xl);
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        .not-found-card {
          text-align: center;
          padding: 60px 30px;
        }
        .not-found-code {
          font-size: 5rem;
          font-weight: 800;
          color: var(--gold-primary);
          line-height: 1;
          display: block;
          margin-bottom: 12px;
          opacity: 0.8;
        }
        .not-found-title {
          font-size: 2rem;
          color: #ffffff;
          margin-bottom: 14px;
        }
        .not-found-desc {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto 28px auto;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
