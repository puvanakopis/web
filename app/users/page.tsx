"use client";

import { useMemo, useState } from 'react';
import {
    Download,
    Filter,
    Plus,
    Search,
    Upload,
    UserRoundPen,
    UserX,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

/* eslint-disable @next/next/no-img-element */

type UserRole = 'Student' | 'Lecturer' | 'Administrator';
type UserStatus = 'Active' | 'Inactive' | 'Suspended';

type UserRecord = {
    id: string;
    name: string;
    role: UserRole;
    department: string;
    registeredOn: string;
    year: number;
    status: UserStatus;
    email: string;
    avatar: string;
};

const users: UserRecord[] = [
    {
        id: 'SUSL/COM/2021/042',
        name: 'Kasun Kalhara Perera',
        role: 'Student',
        department: 'Department of Computing & Information Systems',
        registeredOn: 'Oct 12, 2021',
        year: 2021,
        status: 'Active',
        email: 'kasun.perera@students.susl.edu.lk',
        avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBvWE1aSHuj6FaYtuiNnK6SnHrJJEfB5c8NpOay0knuC8uqp16TffgQpVkoCg7gUXC09x0qtM78as0X9Oh8Bcz5QS85we5fxEgdHofo6F2w7yN0lwT5B8UdgfSCHuvR37VIJEupLAZCFC2O61Bqgxwk2e8rOktznmxVNsq7t_8ak75wOcg4NICGHwbiWcE_OxPPMMwu6Cv538XtKY16ExK9NK2DKxzGe4bT-PKPMiI8-432lqItCTcVGSfDK65W3i5ppv89Z0SJ_mQ',
    },
    {
        id: 'SUSL/ADM/2019/115',
        name: 'Amara Kumara Silva',
        role: 'Student',
        department: 'Department of Software Engineering',
        registeredOn: 'Jan 05, 2019',
        year: 2019,
        status: 'Suspended',
        email: 'amara.silva@students.susl.edu.lk',
        avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCJuRCK_LWuwqOB2QUNLPEr5PcGHsUasIajbFlkfKfF2b-LPRcqkNaczuGAtWMkAhzN6LHcc_Eyq6LD-XhE3PNTTeS_fY3eASaino6rlsunnSNvYlM76LhtoPzT1jVuowuYEMLaha5mNLKr9JbFKbr3orLEs1h2Hyu-hunLKp7fu65PiDmCYIUlTCbB6P2FqWWC61FkAJ3IYqIJgCmpUxtmju-DlpbQDmNFtK4py1eTrZC7f11nghxD0Ba9rGXNI2od2G71RFcDGvg',
    },
    {
        id: 'SUSL/MGT/2022/008',
        name: 'Nethmi Jayani Fernando',
        role: 'Student',
        department: 'Department of Software Engineering',
        registeredOn: 'May 21, 2022',
        year: 2022,
        status: 'Active',
        email: 'nethmi.fernando@students.susl.edu.lk',
        avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCzeGGhawKDWxauCnr35gbfEwHe4WJHt4JubGyfrvzn6rH8r61FeQomBbY4kT2h7XxSqEgC_BPjt8Gy61qZHop3sSPwf1EtIHJlE1rBGD4KmJUr_HQPTvQTfCeJdvLYWXkBUioC4fKA7pxmwUXj1sSi5n536UIHGxjsL-J1GGIWrnsMl7Nawl9wgGNKP1zcr8F7fVvbpUtMG0zzB8Xecf8deeVqMp1D-100MiQbhUFl16kybXsdmZhpg6T0lVpzpeZTjHHZWZRm89Q',
    },
    {
        id: 'SUSL/SCI/2020/177',
        name: 'Hiruni Madushika',
        role: 'Student',
        department: 'Department of Software Engineering',
        registeredOn: 'Aug 14, 2020',
        year: 2020,
        status: 'Inactive',
        email: 'hiruni.madushika@students.susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=47',
    },
    {
        id: 'SUSL/MED/2023/031',
        name: 'Ravindu Jayasena',
        role: 'Student',
        department: 'Department of Software Engineering',
        registeredOn: 'Feb 10, 2023',
        year: 2023,
        status: 'Active',
        email: 'ravindu.jayasena@students.susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=12',
    },
    {
        id: 'SUSL/AGR/2024/019',
        name: 'Pamodi Wickramage',
        role: 'Student',
        department: 'Department of Software Engineering',
        registeredOn: 'Mar 03, 2024',
        year: 2024,
        status: 'Active',
        email: 'pamodi.wickramage@students.susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=5',
    },
    {
        id: 'SUSL/LEC/2016/014',
        name: 'Dr. Sanduni Rajapaksha',
        role: 'Lecturer',
        department: 'Department of Computing & Information Systems',
        registeredOn: 'Jun 11, 2016',
        year: 2016,
        status: 'Active',
        email: 'sanduni.rajapaksha@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=32',
    },
    {
        id: 'SUSL/LEC/2018/072',
        name: 'Prof. Mahesh Kulathunga',
        role: 'Lecturer',
        department: 'Department of Software Engineering',
        registeredOn: 'Nov 27, 2018',
        year: 2018,
        status: 'Active',
        email: 'mahesh.kulathunga@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=18',
    },
    {
        id: 'SUSL/LEC/2020/044',
        name: 'Ms. Dilki Amarasinghe',
        role: 'Lecturer',
        department: 'Department of Software Engineering',
        registeredOn: 'Jul 09, 2020',
        year: 2020,
        status: 'Inactive',
        email: 'dilki.amarasinghe@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=35',
    },
    {
        id: 'SUSL/LEC/2015/009',
        name: 'Dr. Nimal Peris',
        role: 'Lecturer',
        department: 'Department of Software Engineering',
        registeredOn: 'Apr 22, 2015',
        year: 2015,
        status: 'Active',
        email: 'nimal.peris@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=60',
    },
    {
        id: 'SUSL/LEC/2017/038',
        name: 'Mr. Asanka Hettiarachchi',
        role: 'Lecturer',
        department: 'Department of Software Engineering',
        registeredOn: 'Sep 15, 2017',
        year: 2017,
        status: 'Suspended',
        email: 'asanka.hettiarachchi@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=53',
    },
    {
        id: 'SUSL/LEC/2021/089',
        name: 'Ms. Thejani Seneviratne',
        role: 'Lecturer',
        department: 'Department of Software Engineering',
        registeredOn: 'Dec 01, 2021',
        year: 2021,
        status: 'Active',
        email: 'thejani.seneviratne@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=25',
    },
    {
        id: 'SUSL/ADM/2014/003',
        name: 'Mr. Pradeep Gunawardena',
        role: 'Administrator',
        department: 'Department of Data Science',
        registeredOn: 'Feb 13, 2014',
        year: 2014,
        status: 'Active',
        email: 'pradeep.gunawardena@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=68',
    },
    {
        id: 'SUSL/ADM/2019/041',
        name: 'Ms. Harshi Kularathne',
        role: 'Administrator',
        department: 'Department of Data Science',
        registeredOn: 'May 06, 2019',
        year: 2019,
        status: 'Active',
        email: 'harshi.kularathne@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=44',
    },
    {
        id: 'SUSL/ADM/2022/067',
        name: 'Mr. Chathura Edirisinghe',
        role: 'Administrator',
        department: 'Department of Computing & Information Systems',
        registeredOn: 'Oct 18, 2022',
        year: 2022,
        status: 'Inactive',
        email: 'chathura.edirisinghe@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=64',
    },
    {
        id: 'SUSL/ADM/2016/025',
        name: 'Ms. Ishara Nisansala',
        role: 'Administrator',
        department: 'Department of Data Science',
        registeredOn: 'Jan 29, 2016',
        year: 2016,
        status: 'Suspended',
        email: 'ishara.nisansala@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=37',
    },
    {
        id: 'SUSL/ADM/2020/058',
        name: 'Mr. Dinuka Abeyratne',
        role: 'Administrator',
        department: 'Department of Software Engineering',
        registeredOn: 'Aug 20, 2020',
        year: 2020,
        status: 'Active',
        email: 'dinuka.abeyratne@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=15',
    },
    {
        id: 'SUSL/ADM/2023/091',
        name: 'Ms. Shenali Wijewardena',
        role: 'Administrator',
        department: 'Department of Data Science',
        registeredOn: 'Nov 08, 2023',
        year: 2023,
        status: 'Active',
        email: 'shenali.wijewardena@susl.edu.lk',
        avatar: 'https://i.pravatar.cc/200?img=10',
    },
];

const tabs: UserRole[] = ['Student', 'Lecturer', 'Administrator'];

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
    const [localUsers, setLocalUsers] = useState<UserRecord[]>(users);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newUser, setNewUser] = useState<Partial<UserRecord>>({
        id: '',
        name: '',
        role: 'Student',
        department: 'Department of Computing & Information Systems',
        registeredOn: '',
        year: new Date().getFullYear(),
        status: 'Active',
        email: '',
        avatar: '',
    });

    const departments = [
        'Department of Computing & Information Systems',
        'Department of Software Engineering',
        'Department of Data Science',
    ];

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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setNewUser({
            id: '',
            name: '',
            role: 'Student',
            department: departments[0],
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
        // optionally reset filters to show newly added in current tab
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
            <Navbar />

            <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-24 md:pb-12">
                <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="relative pl-6">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-[#775a19]" />
                        <p className="font-label text-sm uppercase tracking-[0.15rem] text-[#775a19] font-semibold mb-1">
                            Sabaragamuwa University of Sri Lanka
                        </p>
                        <h2 className="font-headline text-5xl md:text-6xl text-[#00113a] font-medium tracking-tight">
                            User Registry
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-[#002366] text-white px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#00113a] transition-all duration-300 shadow-lg shadow-[#00113a]/10">
                            <Upload size={14} /> Import CSV
                        </button>
                        <button className="flex items-center gap-2 bg-white text-[#00113a] border border-[#c5c6d2]/30 px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#eeeeee] transition-all duration-300">
                            <Download size={14} /> Export
                        </button>
                    </div>
                </header>

                <section className="glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm mb-8">
                    <div className="grid grid-cols-1 xl:grid-cols-6 gap-4">
                        <div className="xl:col-span-2 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444650]" size={18} />
                            <input
                                type="text"
                                placeholder="Search by name, ID or email"
                                value={searchInput}
                                onChange={(event) => setSearchInput(event.target.value)}
                                className="w-full bg-white border border-[#c5c6d2]/40 py-3 pl-10 pr-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19] cursor-text"
                            />
                        </div>
                        <select
                            value={departmentInput}
                            onChange={(event) => setDepartmentInput(event.target.value)}
                            className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                        >
                            <option value="all">All Departments</option>
                            {departments.map((department) => (
                                <option key={department} value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                        <select
                            value={statusInput}
                            onChange={(event) => setStatusInput(event.target.value)}
                            className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                        >
                            <option value="all">Status: All</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Suspended">Suspended</option>
                        </select>
                        <select
                            value={yearInput}
                            onChange={(event) => setYearInput(event.target.value)}
                            className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                        >
                            <option value="all">Year: All</option>
                            {years.map((year) => (
                                <option key={year} value={String(year)}>
                                    Year: {year}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={applyFilters}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#00113a] text-white py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#002366] transition-colors"
                        >
                            <Filter size={14} /> Apply Filters
                        </button>
                    </div>
                </section>

                <div className="mb-8 flex border-b border-[#c5c6d2]/20 overflow-x-auto whitespace-nowrap">
                    {tabs.map((tab) => {
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

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
                    {filteredUsers.map((user) => {
                        const active = user.status === 'Active';

                        return (
                            <article
                                key={user.id}
                                className="glass-card p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
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
                                        <button className="h-9 w-9 rounded-md border border-[#c5c6d2]/40 text-[#00113a] hover:bg-[#eeeeee] transition-colors inline-flex items-center justify-center">
                                            <UserRoundPen size={16} />
                                        </button>
                                        <button className="h-9 w-9 rounded-md border border-[#c5c6d2]/40 text-[#444650] hover:text-[#ba1a1a] hover:bg-[#ffdad6]/40 transition-colors inline-flex items-center justify-center">
                                            <UserX size={16} />
                                        </button>
                                    </div>
                                    <span className="font-label text-[10px] uppercase tracking-wider text-[#444650]">
                                        {active ? 'Enabled' : 'Suspended'}
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </section>

                {filteredUsers.length === 0 && (
                    <div className="glass-card p-10 rounded-xl border border-[#c5c6d2]/10 shadow-sm text-center mb-10">
                        <h3 className="font-headline text-3xl text-[#00113a] mb-2">No Matching Records</h3>
                        <p className="font-body text-sm text-[#444650]">
                            Adjust your search terms or filters, then apply again.
                        </p>
                    </div>
                )}

                <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t border-[#c5c6d2]/20">
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#444650]">
                        Showing {filteredUsers.length === 0 ? 0 : 1}-{filteredUsers.length} of {totalInTab} {activeTab.toLowerCase()} records
                    </span>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-md bg-[#00113a] text-white font-label text-xs flex items-center justify-center">
                            1
                        </button>
                        <button className="w-8 h-8 rounded-md hover:bg-[#eeeeee] text-[#444650] font-label text-xs flex items-center justify-center">
                            2
                        </button>
                        <button className="w-8 h-8 rounded-md hover:bg-[#eeeeee] text-[#444650] font-label text-xs flex items-center justify-center">
                            3
                        </button>
                        <span className="text-[#444650] mx-1">...</span>
                        <button className="w-8 h-8 rounded-md hover:bg-[#eeeeee] text-[#444650] font-label text-xs flex items-center justify-center">
                            45
                        </button>
                    </div>
                </footer>
            </main>

            <button onClick={openModal} className="fixed bottom-24 md:bottom-10 right-6 md:right-10 w-14 h-14 bg-[#002366] text-white rounded-xl shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-[60] group">
                <Plus size={24} />
                <span className="absolute right-full mr-4 bg-[#00113a] text-white px-4 py-2 rounded-lg font-label text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Add New User
                </span>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-70 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
                    <form onSubmit={submitNewUser} className="relative z-10 w-full max-w-2xl bg-white rounded-xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-headline text-xl text-[#00113a]">Add New User</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input required value={newUser.name} onChange={(e) => setNewUser((s) => ({ ...s, name: e.target.value }))} placeholder="Full name" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                            <input value={newUser.id} onChange={(e) => setNewUser((s) => ({ ...s, id: e.target.value }))} placeholder="ID (optional)" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                            <select value={String(newUser.role)} onChange={(e) => setNewUser((s) => ({ ...s, role: e.target.value as UserRole }))} className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer">
                                <option>Student</option>
                                <option>Lecturer</option>
                                <option>Administrator</option>
                            </select>
                            <select value={String(newUser.department)} onChange={(e) => setNewUser((s) => ({ ...s, department: e.target.value }))} className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer">
                                {departments.map((d) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                            <input type="email" value={newUser.email} onChange={(e) => setNewUser((s) => ({ ...s, email: e.target.value }))} placeholder="Email" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                            <input type="text" value={String(newUser.avatar)} onChange={(e) => setNewUser((s) => ({ ...s, avatar: e.target.value }))} placeholder="Avatar URL (optional)" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                            <select value={String(newUser.status)} onChange={(e) => setNewUser((s) => ({ ...s, status: e.target.value as UserStatus }))} className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer">
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Suspended</option>
                            </select>
                            <input type="number" value={Number(newUser.year)} onChange={(e) => setNewUser((s) => ({ ...s, year: Number(e.target.value) }))} placeholder="Year" className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] placeholder:text-[#444650]/60 focus:ring-0 focus:border-[#775a19]" />
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                            <button type="button" onClick={closeModal} className="px-4 py-2 rounded-md border">Cancel</button>
                            <button type="submit" className="px-4 py-2 rounded-md bg-[#00113a] text-white">Add User</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
