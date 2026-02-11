import PropertyCard from './PropertyCard';
import styles from './PropertyList.module.css';

export default function PropertyList({ properties }) {
  if (!properties || properties.length === 0) {
    return <p className={styles.empty}>No properties found.</p>;
  }

  return (
    <div className={styles.grid}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
