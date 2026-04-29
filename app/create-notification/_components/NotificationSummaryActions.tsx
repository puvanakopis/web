'use client';

import { Bookmark, SendHorizontal } from 'lucide-react';

type Props = {
    onBroadcast: () => void;
    onSaveTemplate: () => void;
    disabled?: boolean;
    isBroadcasting?: boolean;
};

export default function NotificationSummaryActions({ onBroadcast, onSaveTemplate, disabled = false, isBroadcasting = false }: Props) {
    return (
        <div className="flex flex-col gap-4 pt-4">
            <button
                onClick={onBroadcast}
                disabled={disabled || isBroadcasting}
                className={`w-full py-5 rounded-md font-label text-[12px] uppercase tracking-[0.2rem] font-bold transition-all duration-300 active:scale-[0.98] ${disabled || isBroadcasting
                        ? 'bg-[#00113a]/10 text-[#00113a]/40 cursor-not-allowed border border-[#c5c6d2]/20'
                        : 'bg-[#002366] text-white shadow-lg shadow-[#00113a]/10 hover:bg-[#00113a]'
                    }`}
            >
                <span className="inline-flex items-center justify-center gap-2">
                    <SendHorizontal className="h-4 w-4" />
                    {isBroadcasting ? 'Broadcasting...' : 'Broadcast Notification'}
                </span>
            </button>
            <button
                onClick={onSaveTemplate}
                disabled={disabled}
                className={`w-full py-5 rounded-md font-label text-[12px] uppercase tracking-[0.2rem] font-bold transition-all duration-300 ${disabled ? 'bg-white text-[#00113a]/40 border border-[#c5c6d2]/20 cursor-not-allowed' : 'bg-white border border-[#c5c6d2]/30 text-[#00113a] hover:bg-[#eeeeee]'
                    }`}
            >
                <span className="inline-flex items-center justify-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    Save as Template
                </span>
            </button>
        </div>
    );
}