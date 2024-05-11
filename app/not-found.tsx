import Image from 'next/image';
import Link from 'next/link';
import styles from '~/styles/error.module.css';

export default function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorMessage}>404 | Page Not Found</h2>
      <Image
        className={styles.gif}
        alt="error-gif"
        width={600}
        height={400}
        src={'/error.gif'}
      />
      <button className={styles.btn}>
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
}
