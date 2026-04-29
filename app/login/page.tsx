'use client';

import { useState } from 'react';
import { MdHelpOutline, MdOutlineAccountBalance } from "react-icons/md";
import { IoArrowForward, IoShareSocialOutline } from "react-icons/io5";
import { IoMdCheckmark } from 'react-icons/io';

export default function Login() {
    const [keepSession, setKeepSession] = useState(false);
    const [showRecovery, setShowRecovery] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Authenticating as: admin');
    };

    const handleShowRecovery = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowRecovery(true);
    };

    const handleRecoverySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // wire this up to your recovery flow
        console.log('Recovery requested');
    };

    return (
        <>
            {/* Top Navigation / Shell */}
            <header className="bg-white backdrop-blur-md fixed top-0 w-full z-50 shadow-sm shadow-blue-900/5 flex items-center justify-between px-8 py-4">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#00113a] text-3xl"><MdOutlineAccountBalance /></span>
                    <h1 className="font-serif italic text-[#00113a] text-2xl tracking-tight">The Academic Curator</h1>
                </div>
                <div className="hidden md:flex gap-8">
                    <span className="text-slate-500 font-label text-xs uppercase tracking-widest hover:text-amber-800 transition-colors cursor-pointer">Archive</span>
                    <span className="text-slate-500 font-label text-xs uppercase tracking-widest hover:text-amber-800 transition-colors cursor-pointer">Curations</span>
                    <span className="text-amber-700 font-bold font-label text-xs uppercase tracking-widest cursor-pointer">Authenticate</span>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-12">
                <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-[0_10px_40px_rgba(0,17,58,0.06)] relative overflow-hidden">
                    {/* Decorative Accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#775a19]"></div>
                    <div className="space-y-8">
                        {/* Header Section */}
                        <div className="text-center space-y-2">
                            <p className="font-label text-xs uppercase tracking-[0.2em] text-[#775a19]">Gatekeeping Excellence</p>
                            <h2 className="font-headline text-4xl text-[#00113a] leading-tight">Attendance Management System</h2>
                            <p className="font-body text-[#444650] text-sm max-w-xs mx-auto">Please select your persona to begin the authentication process.</p>
                        </div>

                        {/* Admin Label */}
                        <div className="flex justify-center p-1 bg-[#eeeeee] rounded-lg">
                            <div className="py-2 text-sm font-label uppercase tracking-widest font-bold text-[#00113a]">Admin</div>
                        </div>

                        {/* Auth Form */}
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            {!showRecovery ? (
                                <>
                                    <div className="space-y-8" id="form-fields">
                                        {/* Admin View */}
                                        <div className="space-y-8" id="admin-inputs">
                                            <div className="relative input-container">
                                                <input
                                                    className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-[#c5c6d2] py-3 px-0 focus:ring-0 text-[#00113a] font-body transition-all"
                                                    id="admin-username"
                                                    placeholder=" "
                                                    type="text"
                                                />
                                                <label
                                                    className="absolute left-0 top-3 text-[#444650] font-label text-sm pointer-events-none transition-all duration-200 origin-left"
                                                    htmlFor="admin-username"
                                                >
                                                    Admin Username
                                                </label>
                                            </div>
                                            <div className="relative input-container">
                                                <input
                                                    className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-[#c5c6d2] py-3 px-0 focus:ring-0 text-[#00113a] font-body transition-all"
                                                    id="admin-pass"
                                                    placeholder=" "
                                                    type="password"
                                                />
                                                <label
                                                    className="absolute left-0 top-3 text-[#444650] font-label text-sm pointer-events-none transition-all duration-200 origin-left"
                                                    htmlFor="admin-pass"
                                                >
                                                    Admin Password
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Utilities */}
                                    <div className="flex items-center justify-between text-xs font-label uppercase tracking-wider">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <div className="w-4 h-4 border border-[#c5c6d2] rounded-sm flex items-center justify-center group-hover:border-[#775a19] transition-colors">
                                                <input
                                                    className="hidden peer"
                                                    type="checkbox"
                                                    checked={keepSession}
                                                    onChange={() => setKeepSession(prev => !prev)}
                                                />
                                                <span className="material-symbols-outlined text-[12px] opacity-0 peer-checked:opacity-100 text-[#775a19]"><IoMdCheckmark /></span>
                                            </div>
                                            <span className="text-[#444650] group-hover:text-[#1a1c1c]">Keep Session</span>
                                        </label>
                                        <a
                                            className="text-[#775a19] hover:text-[#00113a] transition-colors underline decoration-[#775a19]/30 underline-offset-4 cursor-pointer"
                                            href="#"
                                            onClick={handleShowRecovery}
                                        >
                                            Credential Recovery
                                        </a>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        className={`w-full bg-[#002366] text-white py-4 font-label uppercase tracking-widest text-sm hover:bg-[#00113a] transition-all duration-300 group flex items-center justify-center gap-2`}
                                        id="main-cta"
                                        type="submit"
                                    >
                                        <span>Authenticate</span>
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"><IoArrowForward /></span>
                                    </button>
                                </>
                            ) : (
                                <div className="space-y-6" id="recovery-panel">
                                    <div className="text-center space-y-2">
                                        <h3 className="font-headline text-xl text-[#00113a]">Credential Recovery</h3>
                                        <p className="text-sm text-[#444650]">Enter your admin email to receive password reset instructions.</p>
                                    </div>
                                    <div className="relative input-container">
                                        <input
                                            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-[#c5c6d2] py-3 px-0 focus:ring-0 text-[#00113a] font-body transition-all"
                                            id="recovery-email"
                                            placeholder=" "
                                            type="email"
                                        />
                                        <label
                                            className="absolute left-0 top-3 text-[#444650] font-label text-sm pointer-events-none transition-all duration-200 origin-left"
                                            htmlFor="recovery-email"
                                        >
                                            Admin Email
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="px-4 py-2 text-sm bg-transparent border border-slate-200 rounded text-[#444650] hover:bg-slate-50"
                                            onClick={(e) => { e.preventDefault(); setShowRecovery(false); }}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="px-4 py-2 text-sm bg-[#002366] text-white rounded hover:bg-[#00113a]"
                                            onClick={handleRecoverySubmit}
                                        >
                                            Send Reset Link
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </main>

            {/* Visual Element: Background Content */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#775a19]/5 to-transparent blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#00113a]/5 to-transparent blur-3xl"></div>
            </div>

            {/* Footaer */}
            <footer className="bg-slate-50 w-full py-12 border-t border-slate-200/15">
                <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="font-serif text-lg text-[#00113a]">University Archive</span>
                        <p className="font-sans text-xs uppercase tracking-widest text-slate-500">© 2024 University Archive. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <a className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:underline decoration-amber-500 underline-offset-4 transition-opacity" href="#">
                            Institutional Access
                        </a>
                        <a className="font-sans text-xs uppercase tracking-widest text-amber-600 font-bold hover:underline decoration-amber-500 underline-offset-4 transition-opacity" href="#">
                            Register as Student
                        </a>
                    </div>
                    <div className="flex gap-4 opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#00113a] cursor-pointer">
                            <IoShareSocialOutline size={24} />
                        </span>

                        <span className="text-[#00113a] cursor-pointer">
                            <MdHelpOutline size={24} />
                        </span>                    </div>
                </div>
            </footer>

        </>
    );
}