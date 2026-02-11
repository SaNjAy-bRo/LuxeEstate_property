import { getProperties } from '@/lib/api';
import Container from '@/components/ui/Container';
import PropertyList from '@/components/property/PropertyList';
import styles from './page.module.css';

export const metadata = {
    title: "All Properties | LuxeEstate",
    description: "Browse our exclusive collection of luxury properties.",
};

export default async function PropertiesPage() {
    const properties = await getProperties();

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Container>
                    <h1 className={styles.title}>Our Collection</h1>
                    <p className={styles.subtitle}>Explore the finest real estate opportunities available.</p>
                </Container>
            </div>

            <Container>
                <PropertyList properties={properties} />
            </Container>
        </main>
    );
}
