"use client";

import { Database, EthernetPort, Gauge, History, LayoutDashboard, LibraryBig, Megaphone } from 'lucide-react';

export default function LowerPanels() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm h-full">
                <div className="flex items-center gap-2 mb-8">
                    <History className="text-[#00113a] text-xl" size={24} />
                    <h4 className="font-headline text-2xl text-[#00113a] italic">Recent Activity</h4>
                </div>
                <div className="space-y-8 relative">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-[#c5c6d2]/20" />
                    <div className="relative pl-10">
                        <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00113a] ring-4 ring-white" />
                        <p className="font-label text-[10px] uppercase tracking-wider text-[#775a19] mb-1">10:45 AM Today</p>
                        <h5 className="font-body text-sm font-semibold text-[#00113a]">New Session Started</h5>
                        <p className="font-body text-xs text-[#444650]">Lec. Kumara started CSC3202 in Hall 04</p>
                    </div>
                    <div className="relative pl-10">
                        <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#e9c176] ring-4 ring-white" />
                        <p className="font-label text-[10px] uppercase tracking-wider text-[#775a19] mb-1">09:15 AM Today</p>
                        <h5 className="font-body text-sm font-semibold text-[#00113a]">Report Exported by Admin</h5>
                        <p className="font-body text-xs text-[#444650]">Monthly faculty audit generated</p>
                    </div>
                    <div className="relative pl-10">
                        <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#c5c6d2] ring-4 ring-white" />
                        <p className="font-label text-[10px] uppercase tracking-wider text-[#775a19] mb-1">Yesterday</p>
                        <h5 className="font-body text-sm font-semibold text-[#00113a]">System Update</h5>
                        <p className="font-body text-xs text-[#444650]">Database optimization completed</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#00113a] text-white p-10 rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20" />
                    <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
                        <h4 className="font-headline text-2xl italic text-white/90 mb-4">Core Integrity</h4>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <Database size={16} className="text-green-400" />
                                <div>
                                    <p className="font-label text-[9px] uppercase tracking-widest text-white/50">Database</p>
                                    <p className="font-label text-xs font-bold uppercase tracking-widest">Online</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Gauge size={16} className="text-green-400" />
                                <div>
                                    <p className="font-label text-[9px] uppercase tracking-widest text-white/50">Server Load</p>
                                    <p className="font-label text-xs font-bold uppercase tracking-widest">Optimal</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <EthernetPort size={16} className="text-amber-400" />
                                <div>
                                    <p className="font-label text-[9px] uppercase tracking-widest text-white/50">API Latency</p>
                                    <p className="font-label text-xs font-bold uppercase tracking-widest">24ms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full border-4 border-white/10 flex items-center justify-center">
                            <span className="font-headline text-2xl font-bold">100%</span>
                        </div>
                        <p className="font-label text-[9px] uppercase tracking-widest text-white/50 mt-2">Uptime 30d</p>
                    </div>
                </div>

                <div className="glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                    <h4 className="font-headline text-2xl text-[#00113a] italic mb-8">Archival Actions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <button className="flex flex-col items-center justify-center p-6 rounded-lg bg-white hover:bg-[#eeeeee] transition-all border border-[#c5c6d2]/5 group">
                            <LayoutDashboard className="text-3xl text-[#00113a] group-hover:text-[#775a19] transition-colors mb-4" size={28} />
                            <span className="font-label text-[10px] font-bold uppercase tracking-wider text-[#1a1c1c]">System Audit</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-6 rounded-lg bg-white hover:bg-[#eeeeee] transition-all border border-[#c5c6d2]/5 group">
                            <LibraryBig className="text-3xl text-[#00113a] group-hover:text-[#775a19] transition-colors mb-4" size={28} />
                            <span className="font-label text-[10px] font-bold uppercase tracking-wider text-[#1a1c1c]">Batch Registration</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-6 rounded-lg bg-white hover:bg-[#eeeeee] transition-all border border-[#c5c6d2]/5 group">
                            <Megaphone className="text-3xl text-[#00113a] group-hover:text-[#775a19] transition-colors mb-4" size={28} />
                            <span className="font-label text-[10px] font-bold uppercase tracking-wider text-[#1a1c1c]">Global Broadcast</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}