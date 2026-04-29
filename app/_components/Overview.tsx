"use client";

import { ChartNoAxesCombined, GraduationCap, TvMinimalPlay, Users } from 'lucide-react';

export default function Overview() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                    <GraduationCap className="text-[#775a19]" size={24} />
                    <span className="font-label text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">+4.2%</span>
                </div>
                <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Total Students</p>
                <h3 className="font-headline text-4xl text-[#00113a] font-bold">12,450</h3>
                <div className="mt-4 h-1 w-full bg-[#e8e8e8] overflow-hidden rounded-full">
                    <div className="h-full bg-[#002366] w-3/4" />
                </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <Users className="text-[#775a19]" size={24} />
                </div>
                <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Total Lecturers</p>
                <h3 className="font-headline text-4xl text-[#00113a] font-bold">842</h3>
                <p className="mt-4 font-label text-[10px] text-[#444650]/60">Currently active across all faculties</p>
            </div>

            <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <TvMinimalPlay className="text-[#775a19]" size={24} />
                    <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                </div>
                <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Active Sessions Today</p>
                <h3 className="font-headline text-4xl text-[#00113a] font-bold">156</h3>
                <div className="mt-4 flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300" />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-400" />
                    <span className="text-[9px] font-bold text-[#444650] self-center ml-4 uppercase tracking-tighter">+12 ongoing</span>
                </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <ChartNoAxesCombined className="text-[#775a19]" size={24} />
                </div>
                <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Overall Attendance</p>
                <h3 className="font-headline text-4xl text-[#00113a] font-bold">89.2%</h3>
                <div className="mt-4 flex items-end gap-1 h-8">
                    <div className="w-1 bg-[#775a19]/20 h-3 rounded-full" />
                    <div className="w-1 bg-[#775a19]/40 h-5 rounded-full" />
                    <div className="w-1 bg-[#775a19]/60 h-4 rounded-full" />
                    <div className="w-1 bg-[#775a19]/80 h-7 rounded-full" />
                    <div className="w-1 bg-[#775a19] h-6 rounded-full" />
                </div>
            </div>
        </section>
    );
}