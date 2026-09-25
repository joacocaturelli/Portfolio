import { useEffect, useState } from 'react';
import styles from './EcommercePreview.module.css';

const DEMO_URL = 'https://mitienditaonline.netlify.app';

export default function EcommercePreview() {
  const [showFallback, setShowFallback] = useState(false);
  const [liveLoaded, setLiveLoaded] = useState(false);

  const screenshot = `${import.meta.env.BASE_URL}projects/ecommerce-home.png`;

  useEffect(() => {
    if (liveLoaded) return undefined;

    const timer = window.setTimeout(() => {
      setShowFallback(true);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [liveLoaded]);

  const handleScreenshotError = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.nextElementSibling.style.display = 'flex';
  };

  return (
    <>
      <iframe
        className={`${styles.livePreview}${showFallback ? ` ${styles.livePreviewHidden}` : ''}`}
        title="Demo del e-commerce de Joaquín Caturelli"
        src={DEMO_URL}
        loading="lazy"
        onLoad={() => {
          setLiveLoaded(true);
          setShowFallback(false);
        }}
        onError={() => setShowFallback(true)}
      />

      <div className={`${styles.fallback}${showFallback ? ` ${styles.fallbackVisible}` : ''}`}>
        <img
          src={screenshot}
          alt="Screenshot de la página de inicio del e-commerce de Joaquín Caturelli"
          loading="lazy"
          onError={handleScreenshotError}
        />

        <div className={styles.fallbackPlaceholder}>
          <span>SCREENSHOT DEL PROYECTO</span>
          <strong>ecommerce-home.png</strong>
          <p>
            Colocá tu screenshot real en{' '}
            <code>public/projects/ecommerce-home.png</code>.
          </p>
        </div>
      </div>
    </>
  );
}
