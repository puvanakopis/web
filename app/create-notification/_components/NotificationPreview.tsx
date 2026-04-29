'use client';

import { Megaphone, Users } from 'lucide-react';

type Props = {
    title: string;
    content: string;
    audience: string;
    priorityLabel: string;
    priority: string;
    schedulingMode?: string;
    scheduledDate?: string;
    scheduledTime?: string;
};

export default function NotificationPreview({ title, content, audience, priorityLabel, priority, schedulingMode, scheduledDate, scheduledTime }: Props) {
    return (
        <section className="mt-20 glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00113a] text-white shadow-sm">
                    <Megaphone className="h-4 w-4" />
                </span>
                <span className="font-label text-[11px] uppercase font-bold tracking-widest text-[#444650]/60">
                    Live Preview
                </span>
                <div className="flex-1 h-px bg-[#c5c6d2]/20" />
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#c5c6d2]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#775a19]/5 rounded-full -mr-16 -mt-16" />
                <div className="flex items-start gap-6 mb-8">
                    <div className="w-14 h-14 bg-[#f9f9f9] rounded-xl flex items-center justify-center border border-[#c5c6d2]/10">
                        <span className="text-[#00113a] text-2xl">🎓</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#775a19] inline-flex items-center gap-2">
                                <Users className="h-3.5 w-3.5" />
                                Academic Affairs
                            </span>
                            <span className="text-[10px] text-[#444650]/60 font-bold uppercase tracking-widest">
                                Just Now
                            </span>
                        </div>
                        <h3 className="font-headline text-3xl text-[#00113a] leading-tight">{title}</h3>
                    </div>
                </div>

                <p className="font-body text-[#444650] leading-relaxed mb-8 max-w-2xl text-sm md:text-base">{content}</p>

                <div className="flex items-center gap-4">
                    <div
                        className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${priority === 'low'
                                ? 'bg-green-100 text-green-900 border-green-200'
                                : priority === 'medium'
                                    ? 'bg-amber-100 text-amber-900 border-amber-200'
                                    : priority === 'high'
                                        ? 'bg-red-100 text-red-900 border-red-200'
                                        : 'bg-gray-100 text-gray-900 border-gray-200'
                            }`}
                    >
                        {priorityLabel}
                    </div>

                    <div className="px-3 py-1 rounded-full bg-[#f9f9f9] text-[#444650] text-[9px] font-bold uppercase tracking-wider border border-[#c5c6d2]/20">
                        {audience}
                    </div>
                </div>

                {schedulingMode === 'automated' && (
                    <div className="mt-4 text-sm text-[#444650]">
                        Scheduled for <span className="font-bold text-[#00113a]">{scheduledDate}</span> at <span className="font-bold text-[#00113a]">{scheduledTime}</span>
                    </div>
                )}
            </div>
        </section>
    );
}