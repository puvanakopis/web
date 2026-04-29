'use client';

import { CalendarClock, Clock3, FileText, Target, TriangleAlert } from 'lucide-react';

type Props = {
    title: string;
    onTitleChange: (value: string) => void;
    content: string;
    onContentChange: (value: string) => void;
    audience: string;
    onAudienceChange: (value: string) => void;
    priority: string;
    onPriorityChange: (value: string) => void;
    schedulingMode: string;
    onSchedulingModeChange: (value: string) => void;
    scheduledDate: string;
    onScheduledDateChange: (value: string) => void;
    scheduledTime: string;
    onScheduledTimeChange: (value: string) => void;
};

export default function NotificationComposer({
    title,
    onTitleChange,
    content,
    onContentChange,
    audience,
    onAudienceChange,
    priority,
    onPriorityChange,
    schedulingMode,
    onSchedulingModeChange,
    scheduledDate,
    onScheduledDateChange,
    scheduledTime,
    onScheduledTimeChange,
}: Props) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-7 glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm space-y-12">
                <div className="flex items-start justify-between gap-6 mb-2">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00113a] text-white shadow-sm">
                                <FileText className="h-4 w-4" />
                            </span>
                            <h3 className="font-headline text-3xl text-[#00113a] leading-tight">Message Draft</h3>
                        </div>
                        <p className="font-body text-sm text-[#444650] mt-1">Compose the notification content and audience.</p>
                    </div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#775a19] bg-[#ffdea5]/30 px-3 py-1 rounded-full">
                        Draft
                    </span>
                </div>

                <div className="group">
                    <label className="block font-label text-[11px] uppercase tracking-wider text-[#444650] mb-2 font-bold">
                        <span className="inline-flex items-center gap-2">
                            <TriangleAlert className="h-3.5 w-3.5 text-[#775a19]" />
                            Notification Title
                        </span>
                    </label>
                    <input
                        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-[#e2e2e2] focus:border-[#775a19] focus:ring-0 transition-all duration-300 font-headline text-2xl py-4 px-0 placeholder:text-slate-300 text-[#00113a] outline-none"
                        placeholder="Enter a descriptive headline..."
                        type="text"
                        value={title}
                        onChange={(event) => onTitleChange(event.target.value)}
                    />
                </div>

                <div className="group">
                    <label className="block font-label text-[11px] uppercase tracking-wider text-[#444650] mb-2 font-bold">
                        <span className="inline-flex items-center gap-2">
                            <FileText className="h-3.5 w-3.5 text-[#775a19]" />
                            Broadcast Content
                        </span>
                    </label>
                    <textarea
                        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-[#e2e2e2] focus:border-[#775a19] focus:ring-0 transition-all duration-300 font-body text-lg py-4 px-0 placeholder:text-slate-300 text-[#1a1c1c] resize-none outline-none"
                        placeholder="Draft your detailed message here..."
                        rows={6}
                        value={content}
                        onChange={(event) => onContentChange(event.target.value)}
                    />
                    <div className="mt-2 text-[12px] text-[#444650]">
                        <span className={`font-mono ${content.length > 500 ? 'text-red-600' : 'text-[#444650]'}`}>
                            {content.length}
                        </span>
                        <span className="ml-2">/ 500 characters</span>
                    </div>
                </div>

                <div className="group">
                    <label className="block font-label text-[11px] uppercase tracking-wider text-[#444650] mb-4 font-bold">
                        <span className="inline-flex items-center gap-2">
                            <Target className="h-3.5 w-3.5 text-[#775a19]" />
                            Target Audience
                        </span>
                    </label>
                    <div className="relative">
                        <select
                            className="w-full appearance-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-[#e2e2e2] focus:border-[#775a19] focus:ring-0 font-body py-4 px-0 text-[#00113a] cursor-pointer outline-none"
                            value={audience}
                            onChange={(event) => onAudienceChange(event.target.value)}
                        >
                            <option>All University Members</option>
                            <option>Undergraduate Students</option>
                            <option>Faculty & Lecturers</option>
                            <option>Postgraduate Researchers</option>
                            <option>Specific Batch (2024/2025)</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#444650]">
                            ▼
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
                <div className="glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00113a] text-white shadow-sm">
                                <TriangleAlert className="h-4 w-4" />
                            </span>
                            <h3 className="font-headline text-3xl text-[#00113a]">Priority Status</h3>
                        </div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-[#444650]">Routing</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => onPriorityChange('low')}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md border transition-all duration-300 ${priority === 'low'
                                    ? 'border-[#00113a] bg-[#dbe1ff] text-[#00113a] shadow-sm'
                                    : 'border border-[#c5c6d2]/20 bg-white text-[#444650] hover:border-blue-200 hover:bg-[#f9f9f9]'
                                } text-[11px] uppercase tracking-widest font-bold`}
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            Low
                        </button>
                        <button
                            onClick={() => onPriorityChange('medium')}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md border transition-all duration-300 ${priority === 'medium'
                                    ? 'border-[#00113a] bg-[#dbe1ff] text-[#00113a] shadow-sm'
                                    : 'border border-[#c5c6d2]/20 bg-white text-[#444650] hover:border-amber-200 hover:bg-[#f9f9f9]'
                                } text-[11px] uppercase tracking-widest font-bold`}
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            Medium
                        </button>
                        <button
                            onClick={() => onPriorityChange('high')}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md border transition-all duration-300 ${priority === 'high'
                                    ? 'border-[#00113a] bg-[#dbe1ff] text-[#00113a] shadow-sm'
                                    : 'border border-[#c5c6d2]/20 bg-white text-[#444650] hover:border-amber-200 hover:bg-[#f9f9f9]'
                                } text-[11px] uppercase tracking-widest font-bold`}
                        >
                            <span className={`w-2 h-2 rounded-full ${priority === 'high' ? 'bg-[#00113a] animate-pulse' : 'bg-amber-400'}`} />
                            High
                        </button>
                        <button
                            onClick={() => onPriorityChange('critical')}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md border transition-all duration-300 ${priority === 'critical'
                                    ? 'border-[#00113a] bg-[#dbe1ff] text-[#00113a] shadow-sm'
                                    : 'border border-[#c5c6d2]/20 bg-white text-[#444650] hover:border-red-200 hover:bg-[#f9f9f9]'
                                } text-[11px] uppercase tracking-widest font-bold`}
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            Critical
                        </button>
                    </div>
                </div>

                <div className="glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm space-y-6">
                    <div className="flex items-center justify-between">
                        <label className="font-label text-[11px] uppercase tracking-wider text-[#444650] font-bold inline-flex items-center gap-2">
                            <Clock3 className="h-3.5 w-3.5 text-[#775a19]" />
                            Scheduling
                        </label>
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] uppercase font-bold ${schedulingMode === 'manual' ? 'text-[#00113a]' : 'text-[#444650]/40'}`}>
                                Manual
                            </span>
                            <button
                                onClick={() => onSchedulingModeChange(schedulingMode === 'manual' ? 'automated' : 'manual')}
                                className="w-10 h-5 bg-[#002366] rounded-full relative flex items-center px-1 transition-all duration-300"
                            >
                                <div className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${schedulingMode === 'automated' ? 'ml-auto' : ''}`} />
                            </button>
                            <span className={`text-[10px] uppercase font-bold ${schedulingMode === 'automated' ? 'text-[#00113a]' : 'text-[#444650]/40'}`}>
                                Automated
                            </span>
                        </div>
                    </div>

                    {schedulingMode === 'automated' && (
                        <div className="bg-[#f9f9f9] p-6 rounded-xl space-y-4 border border-[#c5c6d2]/10">
                            <div className="flex items-center gap-4 text-[#00113a]">
                                <CalendarClock className="h-4 w-4 text-[#775a19]" />
                                <input
                                    className="bg-transparent border-none p-0 focus:ring-0 font-body text-sm w-full outline-none text-[#00113a]"
                                    type="date"
                                    value={scheduledDate}
                                    onChange={(event) => onScheduledDateChange(event.target.value)}
                                />
                            </div>
                            <div className="h-px bg-[#c5c6d2]/20" />
                            <div className="flex items-center gap-4 text-[#00113a]">
                                <Clock3 className="h-4 w-4 text-[#775a19]" />
                                <input
                                    className="bg-transparent border-none p-0 focus:ring-0 font-body text-sm w-full outline-none text-[#00113a]"
                                    type="time"
                                    value={scheduledTime}
                                    onChange={(event) => onScheduledTimeChange(event.target.value)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}