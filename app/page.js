import { getFeaturedProperties, getTestimonials } from '@/lib/api';
import Hero from '@/components/sections/Hero';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';

export default async function Home() {
    // Fetch data in parallel
    const [featuredProperties, testimonials] = await Promise.all([
        getFeaturedProperties(),
        getTestimonials()
    ]);

    return (
        <main>
            <Hero />
            <FeaturedProperties properties={featuredProperties} />
            <AboutSection />
            <WhyChooseUs />
            <Testimonials testimonials={testimonials} />
            <ContactSection />
        </main>
    );
}
