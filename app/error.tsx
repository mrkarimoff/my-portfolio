'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '~/styles/error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorMessage}>Something went wrong! 🙃</h2>
      <Image
        className={styles.gif}
        alt="error-gif"
        width={600}
        height={400}
        src={'/error.gif'}
      />
      <div className={styles.btnWrapper}>
        <Link className={styles.btn} href="#" onClick={() => reset()}>
          Try again
        </Link>
        <Link className={styles.btn} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
