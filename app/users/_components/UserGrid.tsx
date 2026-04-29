'use client';

import type { UserRecord } from '../../data/user-data';

import UserCard from './UserCard';

type Props = {
    filteredUsers: UserRecord[];
    onEditUser: (user: UserRecord) => void;
    onDeleteUser: (userId: string) => void;
};

export default function UserGrid({ filteredUsers, onEditUser, onDeleteUser }: Props) {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
                {filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} onEdit={onEditUser} onDelete={onDeleteUser} />
                ))}
            </section>

            {filteredUsers.length === 0 && (
                <div className="glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm text-center mb-10">
                    <h3 className="font-headline text-3xl text-[#00113a] mb-2">No Matching Records</h3>
                    <p className="font-body text-sm text-[#444650]">
                        Adjust your search terms or filters, then apply again.
                    </p>
                </div>
            )}
        </>
    );
}