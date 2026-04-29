'use client';

import { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { IoMdCheckmark } from 'react-icons/io';

export default function LoginMainSection() {
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

    const handleRecoverySubmit = () => {
        console.log('Recovery requested');
    };

    return (
        <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-12">
            <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-[0_10px_40px_rgba(0,17,58,0.06)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#775a19]"></div>
                <div className="space-y-8">
                    <div className="text-center space-y-2">
                        <p className="font-label text-xs uppercase tracking-[0.2em] text-[#775a19]">Gatekeeping Excellence</p>
                        <h2 className="font-headline text-4xl text-[#00113a] leading-tight">Attendance Management System</h2>
                        <p className="font-body text-[#444650] text-sm max-w-xs mx-auto">Please select your persona to begin the authentication process.</p>
                    </div>

                    <div className="flex justify-center p-1 bg-[#eeeeee] rounded-lg">
                        <div className="py-2 text-sm font-label uppercase tracking-widest font-bold text-[#00113a]">Admin</div>
                    </div>

                    <form className="space-y-10" onSubmit={handleSubmit}>
                        {!showRecovery ? (
                            <>
                                <div className="space-y-8" id="form-fields">
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

                                <button
                                    className="w-full bg-[#002366] text-white py-4 font-label uppercase tracking-widest text-sm hover:bg-[#00113a] transition-all duration-300 group flex items-center justify-center gap-2"
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
                                        type="button"
                                        onClick={() => setShowRecovery(false)}
                                    >
                                        Back
                                    </button>
                                    <button
                                        className="px-4 py-2 text-sm bg-[#002366] text-white rounded hover:bg-[#00113a]"
                                        type="button"
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
    );
}