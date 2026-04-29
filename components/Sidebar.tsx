'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, FileText, LayoutDashboard, Settings, Users } from 'lucide-react';

const navItems = [
    { label: 'Dashboard', href: '/', icon: LayoutDashboard },
    { label: 'Create Notification', href: '/create-notification', icon: Bell },
    { label: 'Users', href: '/users', icon: Users },
    { label: 'Reports', href: '/reports', icon: FileText },
    { label: 'Settings', href: '/settings', icon: Settings },
];

export default function NotificationSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path || pathname?.startsWith(`${path}/`);
    };

    return (
        <aside className="fixed left-0 top-16 bottom-0 w-72 bg-white hidden lg:flex flex-col pt-8 space-y-6 border-r border-slate-200/60 shadow-[0_10px_30px_rgba(0,17,58,0.03)]">
            <div className="px-8 pb-4">
                <h2 className="font-sans uppercase tracking-widest text-[11px] font-bold text-slate-400">
                    Administrator Portal
                </h2>
            </div>

            <nav className="flex-1 space-y-1 px-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);

                    return (
                        <Link
                            key={item.label}
                            className={`flex items-center gap-4 rounded-lg mx-2 px-4 py-3 transition-all duration-300 ease-in-out ${active
                                ? 'bg-amber-100/50 text-amber-700 font-bold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-amber-800'
                                }`}
                            href={item.href}
                        >
                            <Icon className={`h-5 w-5 ${active ? 'text-amber-700' : 'text-[#00113a]'}`} />
                            <span className="font-label text-[11px] uppercase tracking-widest font-bold">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}