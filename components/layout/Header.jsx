"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import styles from './Header.module.css';

import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll on initial load (cross-page navigation)
  useEffect(() => {
    // We use window.location instead of useSearchParams to avoid Suspense requirement in Layout
    const params = new URLSearchParams(window.location.search);
    const scrollToId = params.get('scrollTo');

    if (scrollToId && pathname === '/') {
      const element = document.getElementById(scrollToId);
      if (element) {
        // Small timeout to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clean up the URL
          window.history.replaceState({}, '', '/');
        }, 100);
      }
    }
  }, [pathname]);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    
    // If we are on the homepage, scroll smoothly
    if (pathname === '/') {
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // If not on homepage, navigate to home with query param
      if (targetId === 'top') {
        router.push('/');
      } else {
        router.push(`/?scrollTo=${targetId}`);
      }
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.navContainer}>
        <a href="#" onClick={(e) => handleNavigation(e, 'top')} className={styles.logo}>
          Luxe<span className={styles.accent}>Estate</span>
        </a>

        <nav className={styles.nav}>
          <a href="#" onClick={(e) => handleNavigation(e, 'top')} className={styles.link}>Home</a>
          <a href="#properties" onClick={(e) => handleNavigation(e, 'properties')} className={styles.link}>Properties</a>
          <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className={styles.link}>About</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className={styles.link}>Contact</a>
        </nav>
      </Container>
    </header>
  );
}
