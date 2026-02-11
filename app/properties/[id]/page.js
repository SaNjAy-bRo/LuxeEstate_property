import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPropertyById } from '@/lib/api';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const property = await getPropertyById(params.id);

    if (!property) {
        return { title: 'Property Not Found' };
    }

    return {
        title: `${property.title} | LuxeEstate`,
        description: property.description,
    };
}

export default async function PropertyPage({ params }) {
    const property = await getPropertyById(params.id);

    if (!property) {
        notFound();
    }

    return (
        <article className={styles.article}>
            <div className={styles.heroWrapper}>
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    priority
                    className={styles.heroImage}
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay}></div>
                <Container className={styles.heroContent}>
                    <h1 className={styles.title}>{property.title}</h1>
                    <p className={styles.location}>{property.location}</p>
                </Container>
            </div>

            <Container className={styles.contentContainer}>
                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{property.bedrooms}</span>
                                <span className={styles.statLabel}>Bedrooms</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{property.bathrooms}</span>
                                <span className={styles.statLabel}>Bathrooms</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{property.area}</span>
                                <span className={styles.statLabel}>Area</span>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <h2 className={styles.sectionTitle}>Description</h2>
                            <p>{property.description}</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className={styles.features}>
                            <h2 className={styles.sectionTitle}>Features</h2>
                            <ul className={styles.featureList}>
                                <li>Air Conditioning</li>
                                <li>Swimming Pool</li>
                                <li>Central Heating</li>
                                <li>Laundry Room</li>
                                <li>Gym</li>
                                <li>Alarm</li>
                                <li>Window Covering</li>
                            </ul>
                        </div>

                        <div className={styles.backLink}>
                            <Link href="/properties">← Back to Properties</Link>
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.price}>{property.price}</h3>
                            <p className={styles.priceLabel}>Listing Price</p>

                            <div className={styles.divider}></div>

                            <Button href="/#contact" variant="primary" className={styles.inquiryBtn}>
                                Schedule Viewing
                            </Button>
                            <Button href="/#contact" variant="outline" className={styles.inquiryBtn}>
                                Request Info
                            </Button>
                        </div>
                    </aside>
                </div>
            </Container>
        </article>
    );
}
