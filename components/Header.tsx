'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import styles from '~/styles/Header.module.css';
import Context from '~/utils/context';

function Header() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Header component must be used within a ContextProvider');
  }

  const { activeIndex, isOpenDrawer, toggleDrawer } = context;

  return (
    <div className={styles.header}>
      <Link
        style={{
          visibility: isOpenDrawer || activeIndex > 0 ? 'hidden' : 'visible',
        }}
        href={'/'}
        className={styles.headshot}
      >
        <Image
          priority
          src={'/photo1.png'}
          alt="head-shot"
          width={70}
          height={70}
        />
        <h3 className={styles.name}>MK</h3>
      </Link>
      <button onClick={() => toggleDrawer()} className={styles.hamburger}>
        {isOpenDrawer ? (
          <span style={{ fontWeight: 600 }}>&#x2715;</span>
        ) : (
          <CgMenuLeft size={24} />
        )}
      </button>
    </div>
  );
}

export default Header;
