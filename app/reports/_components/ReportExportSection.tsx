'use client';

import { FileJson, FileSpreadsheet, FileText } from 'lucide-react';

export default function ReportExportSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative group cursor-pointer overflow-hidden rounded-xl h-48 flex items-center justify-center bg-[#00113a]">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-[#00113a] to-[#2a4386]" />
                </div>
                <div className="relative z-10 text-center">
                    <p className="font-headline text-4xl text-white mb-4">Download Visual Summary</p>
                    <button className="bg-[#775a19] text-white px-8 py-3 rounded font-label text-xs font-bold uppercase tracking-widest hover:bg-[#5d4201] transition-all">
                        Download Full Infographic
                    </button>
                </div>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl">
                <h4 className="font-headline text-3xl text-[#00113a] mb-6">Export Raw Data</h4>
                <div className="flex gap-4">
                    <button className="flex-1 flex flex-col items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all group">
                        <FileText size={24} className="text-red-700 group-hover:scale-110 transition-transform" />
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#444650]">PDF Report</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all group">
                        <FileSpreadsheet size={24} className="text-green-700 group-hover:scale-110 transition-transform" />
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#444650]">Excel File</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all group">
                        <FileJson size={24} className="text-blue-700 group-hover:scale-110 transition-transform" />
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#444650]">CSV Format</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
