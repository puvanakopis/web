'use client';

type Props = {
    faceSensitivity: number;
    onFaceSensitivityChange: (value: number) => void;
    twoFactorAuth: boolean;
    onTwoFactorAuthChange: (value: boolean) => void;
};

export default function SettingsSecurityCard({
    faceSensitivity,
    onFaceSensitivityChange,
    twoFactorAuth,
    onTwoFactorAuthChange,
}: Props) {
    return (
        <section className="mb-12">
            <div className="bg-[#e8e8e8] p-6 rounded-xl border border-[#c5c6d2]/10">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-headline text-xl text-[#00113a]">Security</h3>
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#775a19]/60">
                        Protection
                    </span>
                </div>

                <div className="space-y-8">
                    <div>
                        <label className="block font-label text-[10px] uppercase tracking-widest text-[#444650] mb-4">
                            Face Recognition Sensitivity
                        </label>
                        <input
                            className="w-full h-1 bg-[#e2e2e2] rounded-lg appearance-none cursor-pointer accent-[#775a19]"
                            max="100"
                            min="1"
                            type="range"
                            value={faceSensitivity}
                            onChange={(event) => onFaceSensitivityChange(Number(event.target.value))}
                        />
                        <div className="flex justify-between mt-2 font-label text-[9px] text-[#757682] uppercase">
                            <span>Standard</span>
                            <span>High Precision</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 gap-6">
                        <div>
                            <label className="block font-label text-[10px] uppercase tracking-widest text-[#444650] mb-1">
                                Two-Factor Authentication
                            </label>
                            <span className="text-sm text-[#757682]">Mandatory for academic staff</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={twoFactorAuth}
                                onChange={(event) => onTwoFactorAuthChange(event.target.checked)}
                            />
                            <div className="w-12 h-6 bg-[#e2e2e2] rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#775a19]" />
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
}