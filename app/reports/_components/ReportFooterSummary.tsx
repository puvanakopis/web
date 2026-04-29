'use client';

type Props = {
    selectedDepartment: string;
    selectedBatch: string;
    selectedCourse: string;
};

export default function ReportFooterSummary({ selectedDepartment, selectedBatch, selectedCourse }: Props) {
    return (
        <footer className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-8 pt-8 border-t border-[#c5c6d2]/20">
            <span className="font-label text-[10px] uppercase tracking-widest text-[#444650]">
                Showing analytics for {selectedDepartment} - {selectedBatch}
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest text-[#775a19] font-semibold">
                Active Course: {selectedCourse}
            </span>
        </footer>
    );
}
