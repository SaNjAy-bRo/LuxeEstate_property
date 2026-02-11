"use client";

import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from './Hero.module.css';
import { useNavigation } from '@/hooks/useNavigation';

export default function Hero() {
  const { handleNavigation } = useNavigation();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <Image 
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1920&q=80"
        alt="Luxury Real Estate Hero"
        fill
        priority
        className={styles.backgroundImage}
        style={{ objectFit: 'cover' }}
      />
      
      <Container className={styles.content}>
        <h1 className={styles.title}>
          Discover Your Dream <br />
          <span className={styles.accent}>Luxury Home</span>
        </h1>
        <p className={styles.subtitle}>
          Exclusive properties in the world's most desired locations.
          Experience the pinnacle of modern living.
        </p>
        <div className={styles.actions}>
          <Button 
            href="#properties" 
            variant="primary"
            onClick={(e) => handleNavigation(e, 'properties')}
          >
            View Properties
          </Button>
          <Button 
            href="#contact" 
            variant="outlineWhite"
            onClick={(e) => handleNavigation(e, 'contact')}
          >
            Contact Us
          </Button>
        </div>
        
        <div className={styles.partnersWrapper}>
          <p className={styles.partnersLabel}>Trusted by Industry Leaders</p>
          <div className={styles.partnersGrid}>
             {/* Original Set */}
             <span className={styles.partnerLogo}>Forbes</span>
             <span className={styles.partnerLogo}>Architectural Digest</span>
             <span className={styles.partnerLogo}>Bloomberg</span>
             <span className={styles.partnerLogo}>Realtor.com</span>
             <span className={styles.partnerLogo}>Vogue Living</span>
             <span className={styles.partnerLogo}>Wall Street Journal</span>
             
             {/* Duplicate Set for Seamless Loop */}
             <span className={styles.partnerLogo}>Forbes</span>
             <span className={styles.partnerLogo}>Architectural Digest</span>
             <span className={styles.partnerLogo}>Bloomberg</span>
             <span className={styles.partnerLogo}>Realtor.com</span>
             <span className={styles.partnerLogo}>Vogue Living</span>
             <span className={styles.partnerLogo}>Wall Street Journal</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
