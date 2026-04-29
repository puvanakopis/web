import { GraduationCap, Users, TvMinimalPlay, ChartNoAxesCombined, History, Database, Gauge, EthernetPort, LibraryBig, Megaphone, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (

    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-24 md:pb-12">
        {/* Archival Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-[#775a19]"></div>
            <p className="font-label text-sm uppercase tracking-[0.15rem] text-[#775a19] font-semibold mb-1">Sabaragamuwa University of Sri Lanka</p>
            <h2 className="font-headline text-5xl md:text-6xl text-[#00113a] font-medium tracking-tight">Institutional Dashboard</h2>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#002366] text-white px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#00113a] transition-all duration-300 shadow-lg shadow-[#00113a]/10">Export Report</button>
            <button className="bg-white text-[#00113a] border border-[#c5c6d2]/30 px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#eeeeee] transition-all duration-300">Archive Log</button>
          </div>
        </div>

        {/* Overview Statistics: Bento Grid Style */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Total Students */}
          <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <GraduationCap className="text-[#775a19]" size={24} />
              <span className="font-label text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">+4.2%</span>
            </div>
            <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Total Students</p>
            <h3 className="font-headline text-4xl text-[#00113a] font-bold">12,450</h3>
            <div className="mt-4 h-1 w-full bg-[#e8e8e8] overflow-hidden rounded-full">
              <div className="h-full bg-[#002366] w-3/4"></div>
            </div>
          </div>

          {/* Total Lecturers */}
          <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <Users className="text-[#775a19]" size={24} />
            </div>
            <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Total Lecturers</p>
            <h3 className="font-headline text-4xl text-[#00113a] font-bold">842</h3>
            <p className="mt-4 font-label text-[10px] text-[#444650]/60">Currently active across all faculties</p>
          </div>

          {/* Active Sessions */}
          <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <TvMinimalPlay className="text-[#775a19]" size={24} />
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            </div>
            <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Active Sessions Today</p>
            <h3 className="font-headline text-4xl text-[#00113a] font-bold">156</h3>
            <div className="mt-4 flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-400"></div>
              <span className="text-[9px] font-bold text-[#444650] self-center ml-4 uppercase tracking-tighter">+12 ongoing</span>
            </div>
          </div>

          {/* Overall Attendance */}
          <div className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <ChartNoAxesCombined className="text-[#775a19]" size={24} />
            </div>
            <p className="font-label text-xs uppercase tracking-wider text-[#444650] mb-1">Overall Attendance</p>
            <h3 className="font-headline text-4xl text-[#00113a] font-bold">89.2%</h3>
            <div className="mt-4 flex items-end gap-1 h-8">
              <div className="w-1 bg-[#775a19]/20 h-3 rounded-full"></div>
              <div className="w-1 bg-[#775a19]/40 h-5 rounded-full"></div>
              <div className="w-1 bg-[#775a19]/60 h-4 rounded-full"></div>
              <div className="w-1 bg-[#775a19]/80 h-7 rounded-full"></div>
              <div className="w-1 bg-[#775a19] h-6 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Attendance Trend Graph */}
          <div className="lg:col-span-2 glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-headline text-2xl text-[#00113a] italic">Institutional Attendance Trend</h4>
              <select className="bg-transparent border-none font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 cursor-pointer">
                <option>Last 30 Days</option>
                <option>Last 6 Months</option>
              </select>
            </div>
            {/* Visual Mockup of a Smooth Line Chart */}
            <div className="relative h-64 w-full mt-4 flex items-end justify-between px-2">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-px bg-[#e8e8e8]/30"></div>
                <div className="w-full h-px bg-[#e8e8e8]/30"></div>
                <div className="w-full h-px bg-[#e8e8e8]/30"></div>
                <div className="w-full h-px bg-[#e8e8e8]/30"></div>
              </div>
              {/* Simplified Visual Graph Points (SVG) */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0 80 Q 20 70, 40 40 T 80 20 T 100 10" fill="none" stroke="#00113a" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                <path d="M0 80 Q 20 70, 40 40 T 80 20 T 100 10 L 100 100 L 0 100 Z" fill="url(#grad)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#00113a" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="#00113a" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              {/* Day Labels */}
              <div className="absolute -bottom-8 left-0 w-full flex justify-between font-label text-[10px] uppercase tracking-tighter text-[#444650]/40">
                <span>Day 01</span>
                <span>Day 10</span>
                <span>Day 20</span>
                <span>Day 30</span>
              </div>
            </div>
          </div>

          {/* Departmental Performance */}
          <div className="glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
            <h4 className="font-headline text-2xl text-[#00113a] italic mb-8">Faculty Analytics</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                  <span>Science</span>
                  <span className="text-[#00113a] font-bold">94%</span>
                </div>
                <div className="h-1.5 w-full bg-[#eeeeee] rounded-full">
                  <div className="h-full bg-[#775a19] w-[94%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                  <span>Arts</span>
                  <span className="text-[#00113a] font-bold">88%</span>
                </div>
                <div className="h-1.5 w-full bg-[#eeeeee] rounded-full">
                  <div className="h-full bg-[#002366] w-[88%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                  <span>Management</span>
                  <span className="text-[#00113a] font-bold">91%</span>
                </div>
                <div className="h-1.5 w-full bg-[#eeeeee] rounded-full">
                  <div className="h-full bg-[#775a19] w-[91%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                  <span>Medicine</span>
                  <span className="text-[#00113a] font-bold">98%</span>
                </div>
                <div className="h-1.5 w-full bg-[#eeeeee] rounded-full">
                  <div className="h-full bg-[#002366] w-[98%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label text-[11px] uppercase tracking-wider mb-2">
                  <span>Agri</span>
                  <span className="text-[#00113a] font-bold">85%</span>
                </div>
                <div className="h-1.5 w-full bg-[#eeeeee] rounded-full">
                  <div className="h-full bg-[#775a19]/60 w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 text-center font-label text-[10px] uppercase tracking-[0.2rem] text-[#00113a] hover:text-[#775a19] transition-colors">View All Departments</button>
          </div>
        </section>

        {/* Lower Panel: Activity, Health, Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-1 glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-8">
              <History className="text-[#00113a] text-xl" size={24} />
              <h4 className="font-headline text-2xl text-[#00113a] italic">Recent Activity</h4>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-[#c5c6d2]/20"></div>
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00113a] ring-4 ring-white"></div>
                <p className="font-label text-[10px] uppercase tracking-wider text-[#775a19] mb-1">10:45 AM Today</p>
                <h5 className="font-body text-sm font-semibold text-[#00113a]">New Session Started</h5>
                <p className="font-body text-xs text-[#444650]">Lec. Kumara started CSC3202 in Hall 04</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#e9c176] ring-4 ring-white"></div>
                <p className="font-label text-[10px] uppercase tracking-wider text-[#775a19] mb-1">09:15 AM Today</p>
                <h5 className="font-body text-sm font-semibold text-[#00113a]">Report Exported by Admin</h5>
                <p className="font-body text-xs text-[#444650]">Monthly faculty audit generated</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#c5c6d2] ring-4 ring-white"></div>
                <p className="font-label text-[10px] uppercase tracking-wider text-[#775a19] mb-1">Yesterday</p>
                <h5 className="font-body text-sm font-semibold text-[#00113a]">System Update</h5>
                <p className="font-body text-xs text-[#444650]">Database optimization completed</p>
              </div>
            </div>
          </div>

          {/* System Health & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Health Card */}
            <div className="bg-[#00113a] text-white p-10 rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
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

            {/* Quick Actions Panel */}
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
      </main>
    </>
  );
}