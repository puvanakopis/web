'use client';

import type { Dispatch, FormEvent, SetStateAction } from 'react';

import type { UserRecord, UserRole, UserStatus } from '@/data/user-data';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    user: Partial<UserRecord>;
    setUser: Dispatch<SetStateAction<Partial<UserRecord>>>;
    departments: string[];
};

export default function UserAddModal({ isOpen, onClose, onSubmit, user, setUser, departments }: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-70 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <form onSubmit={onSubmit} className="relative z-10 w-full max-w-2xl bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-headline text-xl text-[#00113a]">Add New User</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required value={user.name} onChange={(event) => setUser((state) => ({ ...state, name: event.target.value }))} placeholder="Full name" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                    <input value={user.id} onChange={(event) => setUser((state) => ({ ...state, id: event.target.value }))} placeholder="ID (optional)" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                    <select value={String(user.role)} onChange={(event) => setUser((state) => ({ ...state, role: event.target.value as UserRole }))} className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer">
                        <option>Student</option>
                        <option>Lecturer</option>
                        <option>Administrator</option>
                    </select>
                    <select value={String(user.department)} onChange={(event) => setUser((state) => ({ ...state, department: event.target.value }))} className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer">
                        {departments.map((department) => (
                            <option key={department} value={department}>
                                {department}
                            </option>
                        ))}
                    </select>
                    <input type="email" value={user.email} onChange={(event) => setUser((state) => ({ ...state, email: event.target.value }))} placeholder="Email" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                    <input type="text" value={String(user.avatar)} onChange={(event) => setUser((state) => ({ ...state, avatar: event.target.value }))} placeholder="Avatar URL (optional)" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                    <select value={String(user.status)} onChange={(event) => setUser((state) => ({ ...state, status: event.target.value as UserStatus }))} className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer">
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Suspended</option>
                    </select>
                    <input type="number" value={Number(user.year)} onChange={(event) => setUser((state) => ({ ...state, year: Number(event.target.value) }))} placeholder="Year" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md bg-[#00113a] text-white">Add User</button>
                </div>
            </form>
        </div>
    );
}