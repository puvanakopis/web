'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import LoginFooter from '@/components/LoginFooter';

export default function RouteFooter() {
    const pathname = usePathname();

    // Hide footer on the login page; show it elsewhere
    if (pathname?.startsWith('/login')) {
        return <LoginFooter />;
    }

    return <Footer />;
}
