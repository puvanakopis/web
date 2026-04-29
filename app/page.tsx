"use client";

import HeaderSection from '../components/HeaderSection';
import Overview from './_components/Overview';
import Analytics from './_components/Analytics';
import LowerPanels from './_components/LowerPanels';

export default function Dashboard() {
    return (
        <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-24 md:pb-12">
            <HeaderSection
                title="Dashboard"
                subtitle="Sabaragamuwa University of Sri Lanka"
                right={
                    <>
                        <button className="bg-[#002366] text-white px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#00113a] transition-all duration-300 shadow-lg shadow-[#00113a]/10">
                            Export Report
                        </button>
                        <button className="bg-white text-[#00113a] border border-[#c5c6d2]/30 px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#eeeeee] transition-all duration-300">
                            Archive Log
                        </button>
                    </>
                }
            />
            <Overview />
            <Analytics />
            <LowerPanels />
        </main>
    );
}