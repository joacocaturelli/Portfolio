import { useState } from 'react';
import ArrowUpRight from '../ArrowUpRight/ArrowUpRight';
import styles from './CopyEmail.module.css';

const EMAIL = 'joacocatu@gmail.com';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
    }
  };

  return (
    <button
      className={`${styles.contactCopy}${copied ? ` ${styles.isCopied}` : ''}`}
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Email copiado' : 'Copiar email'}
    >
      <span>{copied ? 'Copiado al portapapeles' : 'Email'}</span>
      <span aria-hidden="true">{copied ? '✓' : <ArrowUpRight />}</span>
    </button>
  );
}
