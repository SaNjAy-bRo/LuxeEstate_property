import Container from '../ui/Container';
import PropertyCard from '../property/PropertyCard';
import styles from './FeaturedProperties.module.css';

// This component expects data to be passed to it, or it can fetch it.
// Following the instruction "Components only handle UI rendering", we should pass data.
// However, standard Next.js RSC pattern often fetches in section wrappers if they are server components.
// We will modify the Page to fetch and pass data. 
// For now, let's assume props.

export default function FeaturedProperties({ properties }) {
  return (
    <section id="properties" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>Featured Properties</h2>
          <p className={styles.subheading}>Hand-picked selections of our finest residences.</p>
        </div>
        
        <div className={styles.grid}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
