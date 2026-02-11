import Link from 'next/link';
import Image from 'next/image';
import styles from './PropertyCard.module.css';

export default function PropertyCard({ property }) {
  const { id, title, price, location, image, bedrooms, bathrooms, area } = property;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.priceTag}>{price}</div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/properties/${id}`}>{title}</Link>
        </h3>
        <p className={styles.location}>{location}</p>
        
        <div className={styles.features}>
          <span className={styles.feature}>{bedrooms} Beds</span>
          <span className={styles.feature}>{bathrooms} Baths</span>
          <span className={styles.feature}>{area}</span>
        </div>
        
        <Link href={`/properties/${id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
}
