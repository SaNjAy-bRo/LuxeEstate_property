"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Container from '../ui/Container';
import styles from './Footer.module.css';

export default function Footer({ settings }) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  // Fallback if settings are not loaded yet (though layout should pass them)
  const contact = settings || {
    contactAddress: "123 Luxury Lane, Beverly Hills, CA",
    contactPhone: "+1 (555) 123-4567",
    contactEmail: "info@luxeestate.com",
    creator: "Sanjay Kumar"
  };

  const handleNavigation = (e, targetId) => {
    // ... existing logic ...
    e.preventDefault();
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

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.column}>
            <a href="#" onClick={(e) => handleNavigation(e, 'top')} className={styles.logo}>
              Luxe<span className={styles.accent}>Estate</span>
            </a>
            <p className={styles.description}>
              {settings?.siteDescription || "Premium real estate services for the discerning buyer."}
            </p>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'top')}>Home</a></li>
              <li><a href="#properties" onClick={(e) => handleNavigation(e, 'properties')}>Properties</a></li>
              <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.contactInfo}>
              <li>{contact.contactAddress}</li>
              <li>{contact.contactPhone}</li>
              <li>{contact.contactEmail}</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear} LuxeEstate. All rights reserved.</p>
          <p className={styles.credit}>Created by <span className={styles.creator}>{contact.creator}</span></p>
        </div>
      </Container>
    </footer>
  );
}
