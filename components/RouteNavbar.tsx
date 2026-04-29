'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import LoginNavbar from './LoginNavbar';

export default function RouteNavbar() {
    const pathname = usePathname();

    if (pathname?.startsWith('/login')) {
        return <LoginNavbar />;
    }

    return <Navbar />;
}
