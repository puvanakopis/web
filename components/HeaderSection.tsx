'use client';

import React from 'react';

type Props = {
    title: string;
    subtitle?: string;
    right?: React.ReactNode;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
};

export default function HeaderSection({ title, subtitle, right, className, titleClassName, subtitleClassName }: Props) {
    return (
        <header className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 ${className ?? ''}`}>
            <div className="relative pl-6">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-[#775a19]" />
                {subtitle && (
                    <p className={`font-label text-sm uppercase tracking-[0.15rem] text-[#775a19] font-semibold mb-1 ${subtitleClassName ?? ''}`}>
                        {subtitle}
                    </p>
                )}
                <h2 className={`font-headline text-5xl md:text-6xl text-[#00113a] font-medium tracking-tight ${titleClassName ?? ''}`}>
                    {title}
                </h2>
            </div>
            <div className="flex gap-3">{right}</div>
        </header>
    );
}