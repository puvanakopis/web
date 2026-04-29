'use client';

import { useMemo, useState } from 'react';

import HeaderSection from '@/components/HeaderSection';

import {
    reportBatches,
    reportCourses,
    reportDepartments,
    reportSnapshots,
    type ReportFilters as ReportFilterState,
} from '@/data/report-data';
import ReportAnalyticsGrid from '@/app/reports/_components/ReportAnalyticsGrid';
import ReportExportSection from '@/app/reports/_components/ReportExportSection';
import ReportFilters from '@/app/reports/_components/ReportFilters';
import ReportFooterSummary from '@/app/reports/_components/ReportFooterSummary';

export default function Report() {
    const [departmentInput, setDepartmentInput] = useState('all');
    const [batchInput, setBatchInput] = useState('all');
    const [courseInput, setCourseInput] = useState('all');

    const [appliedFilters, setAppliedFilters] = useState<ReportFilterState>({
        department: 'all',
        batch: 'all',
        course: 'all',
    });

    const matchingSnapshots = useMemo(() => {
        return reportSnapshots.filter((snapshot) => {
            if (appliedFilters.department !== 'all' && snapshot.department !== appliedFilters.department) {
                return false;
            }
            if (appliedFilters.batch !== 'all' && snapshot.batch !== appliedFilters.batch) {
                return false;
            }
            if (appliedFilters.course !== 'all' && snapshot.course !== appliedFilters.course) {
                return false;
            }

            return true;
        });
    }, [appliedFilters]);

    const activeSnapshot = matchingSnapshots[0] ?? reportSnapshots[0];

    const applyFilters = () => {
        setAppliedFilters({
            department: departmentInput,
            batch: batchInput,
            course: courseInput,
        });
    };

    return (
        <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-24 md:pb-12">
            <HeaderSection
                title="Academic Reports"
                subtitle="Institutional Insights"
                right={
                    <>
                        <button className="bg-[#002366] text-white px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#00113a] transition-all duration-300 shadow-lg shadow-[#00113a]/10">
                            Download Summary
                        </button>
                        <button className="bg-white text-[#00113a] border border-[#c5c6d2]/30 px-6 py-2.5 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#eeeeee] transition-all duration-300">
                            Export Data
                        </button>
                    </>
                }
            />

            <ReportFilters
                departmentInput={departmentInput}
                onDepartmentInputChange={setDepartmentInput}
                batchInput={batchInput}
                onBatchInputChange={setBatchInput}
                courseInput={courseInput}
                onCourseInputChange={setCourseInput}
                departments={reportDepartments}
                batches={reportBatches}
                courses={reportCourses}
                onApplyFilters={applyFilters}
            />

            <ReportAnalyticsGrid snapshot={activeSnapshot} />
            <ReportExportSection />
            <ReportFooterSummary
                selectedDepartment={activeSnapshot.department}
                selectedBatch={activeSnapshot.batch}
                selectedCourse={activeSnapshot.course}
            />
        </main>
    );
}