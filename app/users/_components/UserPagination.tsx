'use client';

import type { UserRole } from '../../data/user-data';

type Props = {
    filteredCount: number;
    totalInTab: number;
    activeTab: UserRole;
};

export default function UserPagination({ filteredCount, totalInTab, activeTab }: Props) {
    return (
        <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t border-[#c5c6d2]/20">
            <span className="font-label text-[10px] uppercase tracking-widest text-[#444650]">
                Showing {filteredCount === 0 ? 0 : 1}-{filteredCount} of {totalInTab} {activeTab.toLowerCase()} records
            </span>
            <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-md bg-[#00113a] text-white font-label text-xs flex items-center justify-center">
                    1
                </button>
                <button className="w-8 h-8 rounded-md hover:bg-[#eeeeee] text-[#444650] font-label text-xs flex items-center justify-center">
                    2
                </button>
                <button className="w-8 h-8 rounded-md hover:bg-[#eeeeee] text-[#444650] font-label text-xs flex items-center justify-center">
                    3
                </button>
                <span className="text-[#444650] mx-1">...</span>
                <button className="w-8 h-8 rounded-md hover:bg-[#eeeeee] text-[#444650] font-label text-xs flex items-center justify-center">
                    45
                </button>
            </div>
        </footer>
    );
}