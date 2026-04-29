import { MdOutlineAccountBalance } from 'react-icons/md';

export default function LoginNavbar() {
    return (
        <header className="bg-white backdrop-blur-md fixed top-0 w-full z-50 shadow-sm shadow-blue-900/5 flex items-center justify-between px-8 py-4">
            <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-24">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#00113a] text-3xl"><MdOutlineAccountBalance /></span>
                    <h1 className="font-serif italic text-[#00113a] text-2xl tracking-tight">The Academic Curator</h1>
                </div>
                <div className="hidden md:flex gap-8">
                    <span className="text-slate-500 font-label text-xs uppercase tracking-widest hover:text-amber-800 transition-colors cursor-pointer">Archive</span>
                    <span className="text-slate-500 font-label text-xs uppercase tracking-widest hover:text-amber-800 transition-colors cursor-pointer">Curations</span>
                    <span className="text-amber-700 font-bold font-label text-xs uppercase tracking-widest cursor-pointer">Authenticate</span>
                </div>
            </div>
        </header>
    );
}