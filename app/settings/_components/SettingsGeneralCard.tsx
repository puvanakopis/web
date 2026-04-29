'use client';

type Props = {
    institutionName: string;
    onInstitutionNameChange: (value: string) => void;
    maintenanceMode: boolean;
    onMaintenanceModeChange: (value: boolean) => void;
};

export default function SettingsGeneralCard({
    institutionName,
    onInstitutionNameChange,
    maintenanceMode,
    onMaintenanceModeChange,
}: Props) {
    return (
        <section className="mb-8">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,17,58,0.03)] border border-[#c5c6d2]/10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="font-headline text-xl text-[#00113a]">General</h3>
                        <p className="text-[#444650] text-sm mt-1">Global university identifiers</p>
                    </div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#775a19]/60">
                        Settings
                    </span>
                </div>

                <div className="space-y-10">
                    <div className="relative">
                        <label className="block font-label text-[10px] uppercase tracking-widest text-[#444650] mb-2">
                            Institution Name
                        </label>
                        <input
                            className="w-full underlined-input bg-transparent py-2 font-headline text-lg text-[#00113a] placeholder:text-[#757682]/40 focus:outline-none focus:border-[#775a19] transition-colors"
                            type="text"
                            value={institutionName}
                            onChange={(event) => onInstitutionNameChange(event.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <label className="block font-label text-[10px] uppercase tracking-widest text-[#444650] mb-1">
                                Maintenance Mode
                            </label>
                            <span className="text-sm text-[#757682]">Restrict access for updates</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={maintenanceMode}
                                onChange={(event) => onMaintenanceModeChange(event.target.checked)}
                            />
                            <div className="w-12 h-6 bg-[#e2e2e2] rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#775a19]" />
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
}