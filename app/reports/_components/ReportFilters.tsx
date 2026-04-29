'use client';

import { Filter } from 'lucide-react';

type Props = {
    departmentInput: string;
    onDepartmentInputChange: (value: string) => void;
    batchInput: string;
    onBatchInputChange: (value: string) => void;
    courseInput: string;
    onCourseInputChange: (value: string) => void;
    departments: string[];
    batches: string[];
    courses: string[];
    onApplyFilters: () => void;
};

export default function ReportFilters({
    departmentInput,
    onDepartmentInputChange,
    batchInput,
    onBatchInputChange,
    courseInput,
    onCourseInputChange,
    departments,
    batches,
    courses,
    onApplyFilters,
}: Props) {
    return (
        <section className="glass-card p-6 md:p-8 rounded-xl border border-[#c5c6d2]/10 shadow-sm mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                    value={departmentInput}
                    onChange={(event) => onDepartmentInputChange(event.target.value)}
                    className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                >
                    <option value="all">All Departments</option>
                    {departments.map((department) => (
                        <option key={department} value={department}>
                            {department}
                        </option>
                    ))}
                </select>

                <select
                    value={batchInput}
                    onChange={(event) => onBatchInputChange(event.target.value)}
                    className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                >
                    <option value="all">All Batches</option>
                    {batches.map((batch) => (
                        <option key={batch} value={batch}>
                            {batch}
                        </option>
                    ))}
                </select>

                <select
                    value={courseInput}
                    onChange={(event) => onCourseInputChange(event.target.value)}
                    className="w-full bg-white border border-[#c5c6d2]/40 py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest text-[#444650] focus:ring-0 focus:border-[#775a19] cursor-pointer"
                >
                    <option value="all">All Courses</option>
                    {courses.map((course) => (
                        <option key={course} value={course}>
                            {course}
                        </option>
                    ))}
                </select>

                <button
                    onClick={onApplyFilters}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#00113a] text-white py-3 px-4 rounded-md font-label text-xs uppercase tracking-widest hover:bg-[#002366] transition-colors"
                >
                    <Filter size={14} /> Apply Filters
                </button>
            </div>
        </section>
    );
}
