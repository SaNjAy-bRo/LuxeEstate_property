import Container from '../ui/Container';
import styles from './WhyChooseUs.module.css';

// Simple SVG Icons
const IconTrust = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const IconHome = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);
const IconSupport = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
);

const features = [
  {
    icon: <IconTrust />,
    title: "Trusted by Thousands",
    description: "We have established a reputation for integrity and results."
  },
  {
    icon: <IconHome />,
    title: "Wide Range of Properties",
    description: "Access to the most exclusive listings in the market."
  },
  {
    icon: <IconSupport />,
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>Why Choose Us</h2>
          <p className={styles.subheading}>We provide a service that makes a difference.</p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
