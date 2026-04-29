'use client';

import { Filter, Search } from 'lucide-react';

type Props = {
    searchInput: string;
    onSearchInputChange: (value: string) => void;
    departmentInput: string;
    onDepartmentInputChange: (value: string) => void;
    statusInput: string;
    onStatusInputChange: (value: string) => void;
    yearInput: string;
    onYearInputChange: (value: string) => void;
    departments: string[];
    years: number[];
    onApplyFilters: () => void;
};

export default function UserFilters({
    searchInput,
    onSearchInputChange,
    departmentInput,
    onDepartmentInputChange,
    statusInput,
    onStatusInputChange,
    yearInput,
    onYearInputChange,
    departments,
    years,
    onApplyFilters,
}: Props) {
    return (
        <section className="glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm mb-8">
            <div className="grid grid-cols-1 xl:grid-cols-6 gap-4">
                <div className="xl:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444650]" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, ID or email"
                        value={searchInput}
                        onChange={(event) => onSearchInputChange(event.target.value)}
                        className="w-full bg-white border border-[#c5c6d2]/40 py-3 pl-10 pr-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19] cursor-text"
                    />
                </div>
                <select
                    value={departmentInput}
                    onChange={(event) => onDepartmentInputChange(event.target.value)}
                    className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                >
                    <option value="all">All Departments</option>
                    {departments.map((department) => (
                        <option key={department} value={department}>
                            {department}
                        </option>
                    ))}
                </select>
                <select
                    value={statusInput}
                    onChange={(event) => onStatusInputChange(event.target.value)}
                    className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                >
                    <option value="all">Status: All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Suspended">Suspended</option>
                </select>
                <select
                    value={yearInput}
                    onChange={(event) => onYearInputChange(event.target.value)}
                    className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                >
                    <option value="all">Year: All</option>
                    {years.map((year) => (
                        <option key={year} value={String(year)}>
                            Year: {year}
                        </option>
                    ))}
                </select>
                <button
                    onClick={onApplyFilters}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#00113a] text-white py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#002366] transition-colors"
                >
                    <Filter size={14} /> Apply Filters
                </button>
            </div>
        </section>
    );
}