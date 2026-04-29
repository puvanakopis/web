'use client';

export type SettingsTab = 'general' | 'attendance' | 'security';

type Props = {
    activeTab: SettingsTab;
    onTabChange: (tab: SettingsTab) => void;
};

export default function SettingsTabs({ activeTab, onTabChange }: Props) {
    const tabs: Array<{ key: SettingsTab; label: string }> = [
        { key: 'general', label: 'General' },
        { key: 'attendance', label: 'Attendance Rules' },
        { key: 'security', label: 'Security' },
    ];

    return (
        <nav className="flex space-x-8 mb-10 overflow-x-auto no-scrollbar border-b border-[#e2e2e2]/30 pb-2">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.key;

                return (
                    <button
                        key={tab.key}
                        onClick={() => onTabChange(tab.key)}
                        className={`font-label uppercase tracking-widest text-xs whitespace-nowrap transition-colors pb-2 ${isActive
                            ? 'text-[#775a19] border-b-2 border-[#775a19] font-bold'
                            : 'text-[#757682]'
                            }`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </nav>
    );
}