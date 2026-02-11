"use client";

import { usePathname, useRouter } from 'next/navigation';

export const useNavigation = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (e, targetId) => {
        if (e) e.preventDefault();

        if (pathname === '/') {
            // On homepage, scroll directly
            if (targetId === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // On other pages, navigate to homepage with query param
            if (targetId === 'top') {
                router.push('/');
            } else {
                router.push(`/?scrollTo=${targetId}`);
            }
        }
    };

    return { handleNavigation };
};
