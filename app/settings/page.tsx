'use client';

import { useState } from 'react';

import HeaderSection from '@/components/HeaderSection';
import SettingsAttendanceCard from '@/app/settings/_components/SettingsAttendanceCard';
import SettingsGeneralCard from '@/app/settings/_components/SettingsGeneralCard';
import SettingsSecurityCard from '@/app/settings/_components/SettingsSecurityCard';
import SettingsTabs, { type SettingsTab } from '@/app/settings/_components/SettingsTabs';

export default function Settings() {
    const [institutionName, setInstitutionName] = useState('Sabaragamuwa University');
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [gpsRange, setGpsRange] = useState(50);
    const [timeLimit, setTimeLimit] = useState(15);
    const [qrValidity, setQrValidity] = useState(30);
    const [faceSensitivity, setFaceSensitivity] = useState(75);
    const [twoFactorAuth, setTwoFactorAuth] = useState(true);
    const [activeTab, setActiveTab] = useState<SettingsTab>('general');

    const handleSave = () => {
        console.log('Configuration saved:', {
            institutionName,
            maintenanceMode,
            gpsRange,
            timeLimit,
            qrValidity,
            faceSensitivity,
            twoFactorAuth,
        });
    };

    const handleReset = () => {
        setInstitutionName('Sabaragamuwa University');
        setMaintenanceMode(false);
        setGpsRange(50);
        setTimeLimit(15);
        setQrValidity(30);
        setFaceSensitivity(75);
        setTwoFactorAuth(true);
        setActiveTab('general');
    };

    return (
        <div className="min-h-screen bg-[#f9f9f9] font-body text-[#00113a] antialiased">
            <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-32 md:pb-12">
                <HeaderSection
                    title="System Configuration"
                    subtitle="Administrative Control"
                    right={
                        <>
                            <button
                                onClick={handleSave}
                                className="bg-[#002366] text-white px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#00113a] transition-all duration-300 shadow-lg shadow-[#00113a]/10"
                            >
                                Save Configuration
                            </button>
                            <button
                                onClick={handleReset}
                                className="bg-white text-[#00113a] border border-[#c5c6d2]/30 px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#eeeeee] transition-all duration-300"
                            >
                                Reset Defaults
                            </button>
                        </>
                    }
                />

                <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === 'general' && (
                    <SettingsGeneralCard
                        institutionName={institutionName}
                        onInstitutionNameChange={setInstitutionName}
                        maintenanceMode={maintenanceMode}
                        onMaintenanceModeChange={setMaintenanceMode}
                    />
                )}

                {activeTab === 'attendance' && (
                    <SettingsAttendanceCard
                        gpsRange={gpsRange}
                        onGpsRangeChange={setGpsRange}
                        timeLimit={timeLimit}
                        onTimeLimitChange={setTimeLimit}
                        qrValidity={qrValidity}
                        onQrValidityChange={setQrValidity}
                    />
                )}

                {activeTab === 'security' && (
                    <SettingsSecurityCard
                        faceSensitivity={faceSensitivity}
                        onFaceSensitivityChange={setFaceSensitivity}
                        twoFactorAuth={twoFactorAuth}
                        onTwoFactorAuthChange={setTwoFactorAuth}
                    />
                )}
            </main>
        </div>
    );
}