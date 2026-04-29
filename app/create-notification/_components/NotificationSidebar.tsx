'use client';

// Compatibility wrapper: re-export the global Sidebar component
import Sidebar from '@/components/Sidebar';

export default function NotificationSidebar() {
    return <Sidebar />;
}
