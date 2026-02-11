import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteSettings } from '@/lib/api';
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-heading' });

export async function generateMetadata() {
    const settings = await getSiteSettings();
    return {
        title: settings.seo.title,
        description: settings.seo.description,
        keywords: settings.seo.keywords,
        openGraph: {
            title: settings.seo.title,
            description: settings.seo.description,
            images: [
                {
                    url: settings.seo.ogImage,
                    width: 1200,
                    height: 630,
                    alt: settings.siteName,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: settings.seo.title,
            description: settings.seo.description,
            images: [settings.seo.ogImage],
        },
        icons: {
            icon: '/favicon.svg',
        }
    };
}

export default async function RootLayout({ children }) {
    const settings = await getSiteSettings();

    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable}`}>
                <Header siteName={settings.siteName} />
                {children}
                <Footer settings={settings} />
            </body>
        </html>
    );
}
