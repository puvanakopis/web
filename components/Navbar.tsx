'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineAccountBalance } from 'react-icons/md';
import {
    LayoutDashboard,
    BellRing,
    Users,
    FileText,
    Settings,
    Menu,
    X,
    UserCircle,
    LayoutList,
    NotebookText,
    ChevronDown,
} from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef<HTMLDivElement | null>(null);

    const navItems = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Users', href: '/users', icon: Users },
        { name: 'Reports', href: '/reports', icon: FileText },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    const notificationLinks = [
        { name: 'Create Notification', href: '/create-notification', icon: BellRing },
        { name: 'Notification Management', href: '/create-notification', icon: LayoutList },
        { name: 'Notification Templates', href: '/create-notification', icon: NotebookText },
    ];

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path || pathname?.startsWith(`${path}/`);
    };

    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (!profileMenuRef.current?.contains(event.target as Node)) {
                setIsProfileMenuOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
        };
    }, []);

    return (
        <>
            <header className="bg-white backdrop-blur-md fixed top-0 w-full z-50 shadow-sm shadow-blue-900/5 flex items-center justify-between px-8 py-4">
                <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-24">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#00113a] text-3xl"><MdOutlineAccountBalance /></span>
                            <h1 className="font-serif italic text-[#00113a] text-2xl tracking-tight">The Academic Curator</h1>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center justify-end gap-8 ml-auto relative">
                        <nav className="flex gap-8 items-center">
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`font-label text-xs uppercase tracking-widest transition-colors cursor-pointer ${active ? 'text-amber-700 font-bold' : 'text-slate-500 hover:text-amber-800'}`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div ref={profileMenuRef} className="relative">
                            <button
                                type="button"
                                aria-label="Open notification menu"
                                aria-expanded={isProfileMenuOpen}
                                onClick={() => setIsProfileMenuOpen((value) => !value)}
                                className="flex h-11 items-center gap-2 rounded-full border border-[#c5c6d2]/20 bg-white px-2 pl-2 pr-3 text-[#00113a] shadow-sm transition-all hover:border-[#775a19]/40 hover:shadow-md"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00113a] text-white">
                                    <UserCircle className="h-5 w-5" />
                                </span>
                                <ChevronDown className={`h-4 w-4 text-[#775a19] transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isProfileMenuOpen && (
                                <div className="absolute right-0 top-full mt-3 w-[22rem] rounded-xl border border-[#c5c6d2]/10 bg-white p-4 shadow-sm z-[60] glass-card">
                                    <div className="mb-4">
                                        <p className="font-label text-xs uppercase tracking-widest text-[#444650] mb-1 font-bold">
                                            Quick Actions
                                        </p>
                                        <p className="font-body text-xs text-[#444650]/80">
                                            Open notification tools from the profile menu.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3">
                                        {notificationLinks.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setIsProfileMenuOpen(false)}
                                                    className="group flex items-center gap-3 rounded-xl border border-[#c5c6d2]/10 bg-[#f9f9f9] px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md hover:bg-white"
                                                >
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00113a] text-white shadow-sm">
                                                        <Icon className="h-4 w-4" />
                                                    </span>
                                                    <span className="flex-1">
                                                        <span className="block font-label text-[10px] uppercase tracking-widest text-[#444650] font-bold">
                                                            {item.name}
                                                        </span>
                                                        <span className="block font-body text-[11px] text-[#444650]/70 mt-1">
                                                            Open this tool
                                                        </span>
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Bottom Navigation Bar (visible on mobile only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50">
                <div className="flex justify-around items-center h-20 px-4 pb-2 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,17,58,0.06)] rounded-t-xl">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`
                  flex flex-col items-center justify-center px-3 py-1 rounded-lg
                  transition-transform active:scale-90
                  ${active
                                        ? 'text-amber-700 bg-amber-50'
                                        : 'text-slate-400 hover:bg-slate-50'
                                    }
                `}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="font-sans text-[11px] uppercase tracking-wider font-medium mt-1">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile Slide-out Menu (for when bottom nav isn't enough) */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 pt-16">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    {/* Menu Panel */}
                    <div className="absolute right-0 top-16 w-64 h-auto bg-white rounded-l-xl shadow-xl p-4 border-l border-b border-slate-200">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${active
                                                ? 'bg-amber-50 text-amber-700'
                                                : 'text-slate-600 hover:bg-slate-50'
                                            }
                    `}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="font-serif italic">{item.name}</span>
                                    </Link>
                                );
                            })}
                            <div className="border-t border-slate-200 my-2" />
                            <div className="px-2 pb-2">
                                <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.18rem] font-bold text-slate-400">
                                    Quick Actions
                                </p>
                                {notificationLinks.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
                                        >
                                            <Icon className="h-5 w-5 text-[#00113a]" />
                                            <span className="font-sans italic text-sm">{item.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;