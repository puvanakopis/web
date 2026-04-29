import { MdHelpOutline } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';

export default function LoginFooter() {
    return (
        <footer className="bg-slate-50 w-full py-12 border-t border-slate-200/15">
            <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-serif text-lg text-[#00113a]">University Archive</span>
                    <p className="font-sans text-xs uppercase tracking-widest text-slate-500">© 2024 University Archive. All rights reserved.</p>
                </div>
                <div className="flex gap-4 opacity-80 hover:opacity-100 transition-opacity">
                    <span className="text-[#00113a] cursor-pointer">
                        <IoShareSocialOutline size={24} />
                    </span>
                    <span className="text-[#00113a] cursor-pointer">
                        <MdHelpOutline size={24} />
                    </span>
                </div>
            </div>
        </footer>
    );
}