import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AppsPage } from './pages/AppsPage';
import { OrbitProductPage } from './pages/OrbitProductPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './styles/global.css';

export const App: React.FC = () => {
  const getInitialRoute = () => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    return path;
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);

  const navigate = (to: string) => {
    const cleanRoute = to.toLowerCase().replace(/\/$/, '') || '/';
    setCurrentRoute(cleanRoute);
    window.history.pushState({}, '', cleanRoute);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic Page Title & Meta Updates for SEO
  useEffect(() => {
    let title = 'Walking Files — Thoughtfully Made Desktop Tools';
    let description =
      'Independent software studio creating useful, private macOS applications. Discover ORBIT, our floating desktop file companion.';

    if (currentRoute === '/orbit') {
      title = 'ORBIT for macOS — Floating Desktop File Utility · Walking Files';
      description =
        'Transform, convert, and manage files through a minimal always-on-top orb on your Mac. 100% offline, zero telemetry.';
    } else if (currentRoute === '/apps') {
      title = 'Applications Catalogue — Walking Files Desktop Studio';
      description =
        'Explore our catalogue of thoughtfully crafted macOS applications built with Rust and modern web standards.';
    } else if (currentRoute === '/about') {
      title = 'About Walking Files — Independent Software Studio & Craft';
      description =
        'Learn about Walking Files, our local-first philosophy, and how Indian architectural symmetry inspires our software craft.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentRoute]);

  const renderContent = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/apps':
        return <AppsPage navigate={navigate} />;
      case '/orbit':
        return <OrbitProductPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className="wf-app-root">
      <Navbar currentRoute={currentRoute} navigate={navigate} />
      <main id="main-content" role="main">
        {renderContent()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
