'use client';

import { useState } from 'react';
import { BellRing, Sparkles } from 'lucide-react';

import HeaderSection from '@/components/HeaderSection';
import NotificationComposer from '@/app/create-notification/_components/NotificationComposer';
import NotificationPreview from '@/app/create-notification/_components/NotificationPreview';
import Sidebar from '@/components/Sidebar';
import NotificationSummaryActions from '@/app/create-notification/_components/NotificationSummaryActions';

export default function CreateNotification() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [audience, setAudience] = useState('All University Members');
    const [priority, setPriority] = useState('high');
    const [schedulingMode, setSchedulingMode] = useState('manual');
    const [scheduledDate, setScheduledDate] = useState('2024-05-20');
    const [scheduledTime, setScheduledTime] = useState('09:00');
    const [isBroadcasting, setIsBroadcasting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const previewTitle = title || 'Semester Examination Schedule: Updates for 2024 Final Year Cohort';
    const previewContent = content || 'Please be advised that the final semester examination schedule for the Faculty of Management Studies has been revised to accommodate the upcoming National Research Symposium. Revised dates and venue allocations are now available for review...';

    const getPriorityConfig = () => {
        switch (priority) {
            case 'low':
                return { color: 'blue', label: 'Low Priority' };
            case 'medium':
                return { color: 'amber', label: 'Medium Priority' };
            case 'high':
                return { color: 'primary', label: 'High Priority' };
            case 'critical':
                return { color: 'red', label: 'Critical Priority' };
            default:
                return { color: 'primary', label: 'High Priority' };
        }
    };

    const handleBroadcast = () => {
        if (!title.trim() || !content.trim()) {
            setStatusMessage('Title and content are required to broadcast.');
            return;
        }

        setIsBroadcasting(true);
        setStatusMessage('');

        // Simulate API call
        setTimeout(() => {
            setIsBroadcasting(false);
            setStatusMessage('Notification broadcast scheduled/sent successfully.');
            console.log('Broadcasted notification:', {
                title,
                content,
                audience,
                priority,
                schedulingMode,
                scheduledDate: schedulingMode === 'automated' ? scheduledDate : null,
                scheduledTime: schedulingMode === 'automated' ? scheduledTime : null,
            });
        }, 900);
    };

    const handleSaveTemplate = () => {
        if (!title.trim() && !content.trim()) {
            setStatusMessage('Provide a title or content to save a template.');
            return;
        }

        // Simulate save
        setTimeout(() => {
            setStatusMessage('Template saved.');
            console.log('Saved template:', {
                title,
                content,
                audience,
                priority,
            });
        }, 300);
    };

    const priorityConfig = getPriorityConfig();

    return (
        <main className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-body selection:bg-[#e9c176] selection:text-[#261900]">
            <div className="mx-auto flex w-full max-w-[1440px]">
                <Sidebar />

                <div className="flex-1 px-6 md:px-12 lg:px-20 pt-24 pb-32 lg:pl-80">
                    <div className="max-w-[1440px] mx-auto">
                        <HeaderSection
                            className="mb-10"
                            subtitle="Dispatch Center"
                            title="Create Notification"
                            right={
                                <div className="flex items-center gap-3 rounded-full border border-[#c5c6d2]/20 bg-white px-4 py-2 shadow-sm">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00113a] text-white">
                                        <BellRing className="h-4 w-4" />
                                    </span>
                                    <span className="font-label text-[10px] uppercase tracking-widest text-[#444650]">
                                        Broadcast Center
                                    </span>
                                    <Sparkles className="h-4 w-4 text-[#775a19]" />
                                </div>
                            }
                        />

                        <div className="mb-16 flex items-center gap-4 max-w-xs">
                            <div className="flex-1 h-[2px] bg-[#00113a]" />
                            <div className="flex-1 h-[2px] bg-[#c5c6d2]/30" />
                            <div className="flex-1 h-[2px] bg-[#c5c6d2]/30" />
                            <span className="font-label text-[10px] uppercase font-bold text-[#00113a] tracking-widest whitespace-nowrap ml-2">
                                Drafting Phase
                            </span>
                        </div>

                        <NotificationComposer
                            title={title}
                            onTitleChange={setTitle}
                            content={content}
                            onContentChange={setContent}
                            audience={audience}
                            onAudienceChange={setAudience}
                            priority={priority}
                            onPriorityChange={setPriority}
                            schedulingMode={schedulingMode}
                            onSchedulingModeChange={setSchedulingMode}
                            scheduledDate={scheduledDate}
                            onScheduledDateChange={setScheduledDate}
                            scheduledTime={scheduledTime}
                            onScheduledTimeChange={setScheduledTime}
                        />

                        <div className="mt-6">
                            <NotificationSummaryActions
                                onBroadcast={handleBroadcast}
                                onSaveTemplate={handleSaveTemplate}
                                disabled={!title.trim() || !content.trim() || (schedulingMode === 'automated' && (!scheduledDate || !scheduledTime))}
                                isBroadcasting={isBroadcasting}
                            />
                            {statusMessage && (
                                <div className="mt-3 text-sm text-[#00113a] font-medium">{statusMessage}</div>
                            )}
                        </div>

                        <NotificationPreview
                            title={previewTitle}
                            content={previewContent}
                            audience={audience}
                            priorityLabel={priorityConfig.label}
                            priority={priority}
                            schedulingMode={schedulingMode}
                            scheduledDate={scheduledDate}
                            scheduledTime={scheduledTime}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
