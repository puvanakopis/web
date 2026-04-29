"use client";

import { useMemo, useState } from 'react';
import { Plus } from 'lucide-react';

import HeaderSection from '@/components/HeaderSection';
import UserAddModal from '@/app/users/_components/UserAddModal';
import UserFilters from '@/app/users/_components/UserFilters';
import UserGrid from '@/app/users/_components/UserGrid';
import UserEditModal from '@/app/users/_components/UserEditModal';
import UserPagination from '@/app/users/_components/UserPagination';

import { userData, userDepartments, userTabs } from '@/data/user-data';
import type { UserRecord, UserRole, UserStatus } from '@/data/user-data';

export default function User() {
    const [activeTab, setActiveTab] = useState<UserRole>('Student');
    const [searchInput, setSearchInput] = useState('');
    const [departmentInput, setDepartmentInput] = useState('all');
    const [statusInput, setStatusInput] = useState('all');
    const [yearInput, setYearInput] = useState('all');
    const [appliedFilters, setAppliedFilters] = useState({
        search: '',
        department: 'all',
        status: 'all',
        year: 'all',
    });
    const [localUsers, setLocalUsers] = useState<UserRecord[]>(userData);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingUserId, setEditingUserId] = useState<string | null>(null);

    const [newUser, setNewUser] = useState<Partial<UserRecord>>({
        id: '',
        name: '',
        role: 'Student',
        department: userDepartments[0],
        registeredOn: '',
        year: new Date().getFullYear(),
        status: 'Active',
        email: '',
        avatar: '',
    });

    const departments = userDepartments;

    const years = useMemo(
        () => Array.from(new Set(localUsers.map((user) => user.year))).sort((a, b) => b - a),
        [localUsers],
    );

    const totalInTab = useMemo(
        () => localUsers.filter((user) => user.role === activeTab).length,
        [activeTab, localUsers],
    );

    const filteredUsers = useMemo(() => {
        const search = appliedFilters.search.toLowerCase().trim();

        return localUsers.filter((user) => {
            if (user.role !== activeTab) return false;
            if (appliedFilters.department !== 'all' && user.department !== appliedFilters.department) {
                return false;
            }
            if (appliedFilters.status !== 'all' && user.status !== appliedFilters.status) {
                return false;
            }
            if (appliedFilters.year !== 'all' && String(user.year) !== appliedFilters.year) {
                return false;
            }
            if (!search) return true;

            return (
                user.name.toLowerCase().includes(search) ||
                user.id.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search)
            );
        });
    }, [activeTab, appliedFilters, localUsers]);

    const openAddModal = () => setIsAddModalOpen(true);
    const openEditModal = (user: UserRecord) => {
        setEditingUserId(user.id);
        setNewUser(user);
        setIsEditModalOpen(true);
    };
    const closeModal = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setEditingUserId(null);
        setNewUser({
            id: '',
            name: '',
            role: 'Student',
            department: userDepartments[0],
            registeredOn: '',
            year: new Date().getFullYear(),
            status: 'Active',
            email: '',
            avatar: '',
        });
    };

    const submitNewUser = (e: React.FormEvent) => {
        e.preventDefault();

        const created: UserRecord = {
            id: newUser.id && newUser.id.trim() ? String(newUser.id) : `SUSL/NEW/${Date.now()}`,
            name: String(newUser.name || 'Unnamed User'),
            role: (newUser.role || 'Student') as UserRole,
            department: String(newUser.department || departments[0]),
            registeredOn: newUser.registeredOn || new Date().toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' }),
            year: Number(newUser.year || new Date().getFullYear()),
            status: (newUser.status || 'Active') as UserStatus,
            email: String(newUser.email || ''),
            avatar: String(newUser.avatar || 'https://i.pravatar.cc/200?img=1'),
        };

        setLocalUsers((prev) => [created, ...prev]);
        closeModal();
    };

    const submitEditedUser = (e: React.FormEvent) => {
        e.preventDefault();

        if (!editingUserId) return;

        const updated: UserRecord = {
            id: String(newUser.id || editingUserId),
            name: String(newUser.name || 'Unnamed User'),
            role: (newUser.role || 'Student') as UserRole,
            department: String(newUser.department || departments[0]),
            registeredOn: newUser.registeredOn || new Date().toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' }),
            year: Number(newUser.year || new Date().getFullYear()),
            status: (newUser.status || 'Active') as UserStatus,
            email: String(newUser.email || ''),
            avatar: String(newUser.avatar || 'https://i.pravatar.cc/200?img=1'),
        };

        setLocalUsers((prev) => prev.map((user) => (user.id === editingUserId ? updated : user)));
        closeModal();
    };

    const deleteUser = (userId: string) => {
        setLocalUsers((prev) => prev.filter((user) => user.id !== userId));
    };

    const applyFilters = () => {
        setAppliedFilters({
            search: searchInput,
            department: departmentInput,
            status: statusInput,
            year: yearInput,
        });
    };

    return (
        <>
            <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-24 md:pb-12">
                <HeaderSection
                    title="User Management"
                    subtitle="Sabaragamuwa University of Sri Lanka"
                    right={
                        <>
                            <button className="bg-[#002366] text-white px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#00113a] transition-all duration-300 shadow-lg shadow-[#00113a]/10">
                                Import CSV
                            </button>
                            <button className="bg-white text-[#00113a] border border-[#c5c6d2]/30 px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#eeeeee] transition-all duration-300">
                                Export
                            </button>
                        </>
                    }
                />

                <UserFilters
                    searchInput={searchInput}
                    onSearchInputChange={setSearchInput}
                    departmentInput={departmentInput}
                    onDepartmentInputChange={setDepartmentInput}
                    statusInput={statusInput}
                    onStatusInputChange={setStatusInput}
                    yearInput={yearInput}
                    onYearInputChange={setYearInput}
                    departments={departments}
                    years={years}
                    onApplyFilters={applyFilters}
                />

                <div className="mb-8 flex border-b border-[#c5c6d2]/20 overflow-x-auto whitespace-nowrap">
                    {userTabs.map((tab) => {
                        const isActive = activeTab === tab;

                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-4 font-label text-xs uppercase tracking-widest transition-colors ${isActive
                                    ? 'text-[#00113a] border-b-2 border-[#775a19] font-bold'
                                    : 'text-[#444650] hover:text-[#00113a]'
                                    }`}
                            >
                                {tab === 'Student' ? 'Students' : tab === 'Lecturer' ? 'Lecturers' : 'Administrators'}
                            </button>
                        );
                    })}
                </div>

                <UserGrid filteredUsers={filteredUsers} onEditUser={openEditModal} onDeleteUser={deleteUser} />
                <UserPagination filteredCount={filteredUsers.length} totalInTab={totalInTab} activeTab={activeTab} />
            </main>

            <button onClick={openAddModal} className="fixed bottom-24 md:bottom-10 right-6 md:right-10 w-14 h-14 bg-[#002366] text-white rounded-xl shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-[60] group">
                <Plus size={24} />
                <span className="absolute right-full mr-4 bg-[#00113a] text-white px-4 py-2 rounded-lg font-label text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Add New User
                </span>
            </button>

            <UserAddModal
                isOpen={isAddModalOpen}
                onClose={closeModal}
                onSubmit={submitNewUser}
                user={newUser}
                setUser={setNewUser}
                departments={departments}
            />
            <UserEditModal
                isOpen={isEditModalOpen}
                onClose={closeModal}
                onSubmit={submitEditedUser}
                user={newUser}
                setUser={setNewUser}
                departments={departments}
            />
        </>
    );
}
