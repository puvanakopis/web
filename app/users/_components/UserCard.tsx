'use client';

import { UserRoundPen, UserX } from 'lucide-react';

import type { UserRecord } from '../../data/user-data';

type Props = {
    user: UserRecord;
    onEdit: (user: UserRecord) => void;
    onDelete: (userId: string) => void;
};

export default function UserCard({ user, onEdit, onDelete }: Props) {
    const active = user.status === 'Active';

    return (
        <article className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#775a19]/20">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <span
                    className={`px-3 py-1 font-label text-[10px] uppercase tracking-widest font-bold rounded ${active
                        ? 'bg-green-50 text-green-700'
                        : 'bg-amber-50 text-amber-700'
                        }`}
                >
                    {user.status}
                </span>
            </div>

            <h3 className="font-headline text-3xl text-[#00113a] leading-tight mb-1">
                {user.name}
            </h3>
            <p className="font-label text-xs text-[#444650] uppercase tracking-wider mb-6">
                {user.id} • {user.role}
            </p>

            <p className="font-body text-xs text-[#444650] mb-6">{user.email}</p>

            <div className="space-y-2 mb-8 text-xs text-[#444650]">
                <div className="flex justify-between">
                    <span>Registered</span>
                    <span className="text-[#00113a] font-semibold">{user.registeredOn}</span>
                </div>
                <div className="flex justify-between">
                    <span>Department</span>
                    <span className="text-[#00113a] font-semibold">{user.department}</span>
                </div>
            </div>

            <div className="mt-auto pt-6 border-t border-[#c5c6d2]/20 flex items-center justify-between">
                <div className="flex gap-2">
                    <button onClick={() => onEdit(user)} className="h-9 w-9 rounded-md border border-[#c5c6d2]/40 text-[#00113a] hover:bg-[#eeeeee] transition-colors inline-flex items-center justify-center">
                        <UserRoundPen size={16} />
                    </button>
                    <button onClick={() => onDelete(user.id)} className="h-9 w-9 rounded-md border border-[#c5c6d2]/40 text-[#444650] hover:text-[#ba1a1a] hover:bg-[#ffdad6]/40 transition-colors inline-flex items-center justify-center">
                        <UserX size={16} />
                    </button>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-[#444650]">
                    {active ? 'Enabled' : 'Suspended'}
                </span>
            </div>
        </article>
    );
}