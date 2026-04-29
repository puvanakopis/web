'use client';

import type { ReportSnapshot } from '@/data/report-data';

type Props = {
    snapshot: ReportSnapshot;
};

export default function ReportAnalyticsGrid({ snapshot }: Props) {
    const weekLabels = ['Week 01', 'Week 02', 'Week 03', 'Week 04', 'Week 05', 'Week 06'];

    return (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,17,58,0.06)] relative overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-headline text-3xl text-[#00113a]">Attendance Trend</h3>
                    <span className="text-[#775a19] font-label text-[10px] uppercase tracking-widest font-bold bg-[#ffdea5]/30 px-3 py-1 rounded-full">
                        {snapshot.trendDelta}
                    </span>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                    {snapshot.weeklyTrend.map((height, idx) => (
                        <div key={idx} className="w-full bg-[#dbe1ff]/20 rounded-t-sm relative group">
                            <div
                                className="absolute inset-x-0 bottom-0 bg-[#00113a] group-hover:bg-[#775a19] transition-all rounded-t-sm"
                                style={{ height: `${height}%` }}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 font-label text-[10px] text-[#444650] uppercase tracking-widest">
                    {weekLabels.map((week) => (
                        <span key={week}>{week}</span>
                    ))}
                </div>
            </div>

            <div className="md:col-span-4 bg-[#eeeeee] p-8 rounded-xl">
                <h3 className="font-headline text-3xl text-[#00113a] mb-8">At-Risk Students</h3>
                <div className="space-y-6">
                    {snapshot.atRiskStudents.map((student) => (
                        <div key={student.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-white flex items-center justify-center font-bold text-[#00113a] shadow-sm text-xs">
                                    {student.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-[#00113a]">{student.name}</p>
                                    <p className="font-label text-[10px] text-[#444650] uppercase tracking-widest">
                                        {student.batch}
                                    </p>
                                </div>
                            </div>
                            <span className="text-[#ba1a1a] font-bold text-sm">{student.attendance}%</span>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-10 text-[#00113a] font-label text-[11px] font-bold uppercase tracking-widest border border-[#00113a]/20 py-3 rounded hover:bg-[#00113a] hover:text-white transition-all">
                    View All Alerts
                </button>
            </div>

            <div className="md:col-span-6 bg-[#f3f3f3] p-8 rounded-xl">
                <h3 className="font-headline text-3xl text-[#00113a] mb-10">Subject Performance</h3>
                <div className="space-y-8">
                    {snapshot.subjectPerformance.map((subject) => (
                        <div key={subject.name}>
                            <div className="flex justify-between font-label text-[10px] font-bold uppercase tracking-widest mb-2 text-[#444650]">
                                <span>{subject.name}</span>
                                <span className="text-[#00113a]">{subject.percentage}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${subject.color === 'primary' ? 'bg-[#00113a]' : 'bg-[#775a19]'}`}
                                    style={{ width: `${subject.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:col-span-6 bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,17,58,0.06)]">
                <h3 className="font-headline text-3xl text-[#00113a] mb-8">Peak Attendance Hours</h3>
                <div className="grid grid-cols-7 gap-1">
                    {snapshot.heatmapData.map((intensity, idx) => {
                        const opacityClass =
                            intensity <= 20
                                ? 'bg-[#00113a]/5'
                                : intensity <= 40
                                    ? 'bg-[#00113a]/20'
                                    : intensity <= 60
                                        ? 'bg-[#00113a]/40'
                                        : intensity <= 80
                                            ? 'bg-[#00113a]/60'
                                            : intensity <= 95
                                                ? 'bg-[#00113a]/80'
                                                : 'bg-[#00113a]';

                        return <div key={idx} className={`h-8 ${opacityClass} rounded-sm`} />;
                    })}
                </div>
                <div className="flex justify-between mt-6 font-label text-[9px] text-[#444650] font-bold uppercase tracking-widest">
                    <span>08:00</span>
                    <span>10:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>16:00</span>
                    <span>18:00</span>
                    <span>20:00</span>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                    <span className="font-label text-[9px] font-bold text-[#444650] uppercase tracking-widest">Intensity:</span>
                    <div className="flex gap-0.5">
                        <div className="w-3 h-3 bg-[#00113a]/10 rounded-xs" />
                        <div className="w-3 h-3 bg-[#00113a]/40 rounded-xs" />
                        <div className="w-3 h-3 bg-[#00113a]/70 rounded-xs" />
                        <div className="w-3 h-3 bg-[#00113a] rounded-xs" />
                    </div>
                </div>
            </div>
        </section>
    );
}
