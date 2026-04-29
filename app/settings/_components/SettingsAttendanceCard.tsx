'use client';

type Props = {
    gpsRange: number;
    onGpsRangeChange: (value: number) => void;
    timeLimit: number;
    onTimeLimitChange: (value: number) => void;
    qrValidity: number;
    onQrValidityChange: (value: number) => void;
};

function Field({
    label,
    value,
    onChange,
    icon,
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    icon: string;
}) {
    return (
        <div className="relative">
            <label className="block font-label text-[10px] uppercase tracking-widest text-[#444650] mb-2">
                {label}
            </label>
            <div className="flex items-end">
                <input
                    className="w-full underlined-input bg-transparent py-2 font-headline text-lg text-[#00113a] focus:outline-none focus:border-[#775a19] transition-colors"
                    type="number"
                    value={value}
                    onChange={(event) => onChange(Number(event.target.value))}
                />
                <span className="ml-2 text-[#757682]/50 text-sm pb-2">{icon}</span>
            </div>
        </div>
    );
}

export default function SettingsAttendanceCard({
    gpsRange,
    onGpsRangeChange,
    timeLimit,
    onTimeLimitChange,
    qrValidity,
    onQrValidityChange,
}: Props) {
    return (
        <section className="mb-8">
            <div className="bg-[#f3f3f3] p-6 rounded-xl border border-[#c5c6d2]/10">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-headline text-xl text-[#00113a]">Attendance Rules</h3>
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#775a19]/60">
                        Controls
                    </span>
                </div>

                <div className="space-y-8">
                    <Field label="GPS Range (meters)" value={gpsRange} onChange={onGpsRangeChange} icon="meters" />
                    <Field label="Time Limit (minutes)" value={timeLimit} onChange={onTimeLimitChange} icon="minutes" />
                    <Field label="QR Code Validity (seconds)" value={qrValidity} onChange={onQrValidityChange} icon="seconds" />
                </div>
            </div>
        </section>
    );
}