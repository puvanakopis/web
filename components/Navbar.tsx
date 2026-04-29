'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineAccountBalance } from 'react-icons/md';
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    Menu,
    X,
    UserCircle,
} from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Users', href: '/users', icon: Users },
        { name: 'Reports', href: '/reports', icon: FileText },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path || pathname?.startsWith(`${path}/`);
    };

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

                    <nav className="hidden md:flex gap-8 items-center">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-slate-500 font-label text-xs uppercase tracking-widest hover:text-amber-800 transition-colors cursor-pointer ${active ? 'text-amber-700 font-bold' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

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
                            <div className="flex items-center gap-3 px-4 py-3">
                                <UserCircle className="h-5 w-5 text-slate-400" />
                                <span className="text-sm text-slate-600">Admin Profile</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;