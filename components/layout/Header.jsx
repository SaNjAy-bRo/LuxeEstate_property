"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import styles from './Header.module.css';

import { usePathname, useRouter } from 'next/navigation';

export default function Header({ siteName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const params = new URLSearchParams(window.location.search);
    const scrollToId = params.get('scrollTo');

    if (scrollToId && pathname === '/') {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, '', '/');
        }, 100);
      }
    }
  }, [pathname]);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close menu on click
    
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
      if (targetId === 'top') {
        router.push('/');
      } else {
        router.push(`/?scrollTo=${targetId}`);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.navContainer}>
        <a href="#" onClick={(e) => handleNavigation(e, 'top')} className={styles.logo}>
          {siteName ? (
            siteName
          ) : (
            <>Luxe<span className={styles.accent}>Estate</span></>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <a href="#" onClick={(e) => handleNavigation(e, 'top')} className={styles.link}>Home</a>
          <a href="#properties" onClick={(e) => handleNavigation(e, 'properties')} className={styles.link}>Properties</a>
          <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className={styles.link}>About</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className={styles.link}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
        >
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Mobile Overlay */}
        <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.visible : ''}`}>
            <nav className={styles.mobileNav}>
                <a href="#" onClick={(e) => handleNavigation(e, 'top')} className={styles.mobileLink}>Home</a>
                <a href="#properties" onClick={(e) => handleNavigation(e, 'properties')} className={styles.mobileLink}>Properties</a>
                <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className={styles.mobileLink}>About</a>
                <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className={styles.mobileLink}>Contact</a>
            </nav>
        </div>

      </Container>
    </header>
  );
}
