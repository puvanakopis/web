"use client";

export default function Analytics() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h4 className="font-headline text-2xl text-[#00113a] italic">Institutional Attendance Trend</h4>
                    <select className="bg-transparent border-none font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 cursor-pointer">
                        <option>Last 30 Days</option>
                        <option>Last 6 Months</option>
                    </select>
                </div>
                <div className="relative h-64 w-full mt-4 flex items-end justify-between px-2">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div className="w-full h-px bg-[#e8e8e8]/30" />
                        <div className="w-full h-px bg-[#e8e8e8]/30" />
                        <div className="w-full h-px bg-[#e8e8e8]/30" />
                        <div className="w-full h-px bg-[#e8e8e8]/30" />
                    </div>
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0 80 Q 20 70, 40 40 T 80 20 T 100 10" fill="none" stroke="#00113a" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        <path d="M0 80 Q 20 70, 40 40 T 80 20 T 100 10 L 100 100 L 0 100 Z" fill="url(#grad)" opacity="0.1" />
                        <defs>
                            <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#00113a" stopOpacity="1" />
                                <stop offset="100%" stopColor="#00113a" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute -bottom-8 left-0 w-full flex justify-between font-label text-[10px] uppercase tracking-tighter text-[#444650]/40">
                        <span>Day 01</span>
                        <span>Day 10</span>
                        <span>Day 20</span>
                        <span>Day 30</span>
                    </div>
                </div>
            </div>

            <div className="glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                <h4 className="font-headline text-2xl text-[#00113a] italic mb-8">Faculty Analytics</h4>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                            <span>Science</span>
                            <span className="text-[#00113a] font-bold">94%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#eeeeee] rounded-full"><div className="h-full bg-[#775a19] w-[94%] rounded-full" /></div>
                    </div>
                    <div>
                        <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                            <span>Arts</span>
                            <span className="text-[#00113a] font-bold">88%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#eeeeee] rounded-full"><div className="h-full bg-[#002366] w-[88%] rounded-full" /></div>
                    </div>
                    <div>
                        <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                            <span>Management</span>
                            <span className="text-[#00113a] font-bold">91%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#eeeeee] rounded-full"><div className="h-full bg-[#775a19] w-[91%] rounded-full" /></div>
                    </div>
                    <div>
                        <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                            <span>Medicine</span>
                            <span className="text-[#00113a] font-bold">98%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#eeeeee] rounded-full"><div className="h-full bg-[#002366] w-[98%] rounded-full" /></div>
                    </div>
                    <div>
                        <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                            <span>Agri</span>
                            <span className="text-[#00113a] font-bold">85%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#eeeeee] rounded-full"><div className="h-full bg-[#775a19]/60 w-[85%] rounded-full" /></div>
                    </div>
                </div>
                <button className="w-full mt-10 text-center font-label text-[10px] uppercase tracking-[0.2rem] text-[#00113a] hover:text-[#775a19] transition-colors">
                    View All Departments
                </button>
            </div>
        </section>
    );
}