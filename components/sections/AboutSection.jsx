import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Interior" 
              width={600} 
              height={500}
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.experienceBox}>
              <span className={styles.years}>15+</span>
              <span className={styles.text}>Years of Experience</span>
            </div>
          </div>
          
          <div className={styles.content}>
            <h4 className={styles.subtitle}>About Us</h4>
            <h2 className={styles.title}>We Help You Find Your Dream Home</h2>
            <p className={styles.description}>
              At LuxeEstate, we believe that home is more than just a place to live. It's a sanctuary, a statement, and a legacy. 
              Our dedicated team of professionals understands that buying a luxury property is not just a transaction, but a lifestyle choice.
            </p>
            <p className={styles.description}>
              With an exclusive portfolio of properties and a commitment to personalized service, we are here to guide you through every step of your real estate journey.
            </p>
            <Button variant="primary" href="#contact">Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
