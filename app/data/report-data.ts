export type ReportFilters = {
    department: string;
    batch: string;
    course: string;
};

export type AtRiskStudent = {
    initials: string;
    name: string;
    batch: string;
    attendance: number;
};

export type SubjectPerformance = {
    name: string;
    percentage: number;
    color: 'primary' | 'secondary';
};

export type ReportSnapshot = {
    id: string;
    department: string;
    batch: string;
    course: string;
    trendDelta: string;
    atRiskStudents: AtRiskStudent[];
    subjectPerformance: SubjectPerformance[];
    weeklyTrend: number[];
    heatmapData: number[];
};

export const reportSnapshots: ReportSnapshot[] = [
    {
        id: 'computing-2021-cs101',
        department: 'Computing',
        batch: '2021 Intake',
        course: 'CS101 - Intro to CS',
        trendDelta: '+12.4% vs Last Month',
        atRiskStudents: [
            { initials: 'AM', name: 'Amara Mendis', batch: 'Computing B1', attendance: 62 },
            { initials: 'KD', name: 'Kasun De Silva', batch: 'Computing B1', attendance: 58 },
            { initials: 'RW', name: 'Ruwan Weerasinghe', batch: 'Computing B1', attendance: 74 },
        ],
        subjectPerformance: [
            { name: 'CS101 - Computer Science', percentage: 94, color: 'primary' },
            { name: 'MA202 - Mathematics', percentage: 82, color: 'primary' },
            { name: 'PH105 - Applied Physics', percentage: 76, color: 'secondary' },
        ],
        weeklyTrend: [60, 75, 55, 90, 80, 95],
        heatmapData: [5, 20, 40, 10, 60, 80, 95, 30, 50, 90, 10, 20, 60, 40, 10, 30, 5, 80, 95, 40, 10],
    },
    {
        id: 'computing-2022-cs102',
        department: 'Computing',
        batch: '2022 Intake',
        course: 'CS102 - Data Structures',
        trendDelta: '+7.9% vs Last Month',
        atRiskStudents: [
            { initials: 'NP', name: 'Nethmi Perera', batch: 'Computing B2', attendance: 66 },
            { initials: 'SS', name: 'Sahan Silva', batch: 'Computing B2', attendance: 61 },
            { initials: 'DT', name: 'Dinithi Tennakoon', batch: 'Computing B2', attendance: 70 },
        ],
        subjectPerformance: [
            { name: 'CS102 - Data Structures', percentage: 91, color: 'primary' },
            { name: 'CS110 - Programming Lab', percentage: 84, color: 'primary' },
            { name: 'CS120 - Discrete Math', percentage: 73, color: 'secondary' },
        ],
        weeklyTrend: [58, 63, 71, 78, 82, 87],
        heatmapData: [10, 25, 30, 18, 55, 72, 85, 35, 44, 88, 14, 24, 58, 46, 18, 28, 7, 75, 90, 35, 16],
    },
    {
        id: 'applied-2023-ma105',
        department: 'Applied Sciences',
        batch: '2023 Intake',
        course: 'MA105 - Calculus II',
        trendDelta: '+5.2% vs Last Month',
        atRiskStudents: [
            { initials: 'IS', name: 'Ishara Senanayake', batch: 'Applied B3', attendance: 68 },
            { initials: 'HR', name: 'Hansika Rodrigo', batch: 'Applied B3', attendance: 64 },
            { initials: 'PM', name: 'Pasindu Maduranga', batch: 'Applied B3', attendance: 72 },
        ],
        subjectPerformance: [
            { name: 'MA105 - Calculus II', percentage: 86, color: 'primary' },
            { name: 'PH102 - Mechanics', percentage: 79, color: 'secondary' },
            { name: 'CH101 - Chemistry', percentage: 81, color: 'primary' },
        ],
        weeklyTrend: [52, 60, 67, 73, 75, 81],
        heatmapData: [6, 18, 27, 12, 47, 66, 82, 29, 38, 79, 11, 19, 49, 37, 15, 22, 8, 68, 84, 32, 12],
    },
];

export const reportDepartments = Array.from(new Set(reportSnapshots.map((snapshot) => snapshot.department)));
export const reportBatches = Array.from(new Set(reportSnapshots.map((snapshot) => snapshot.batch)));
export const reportCourses = Array.from(new Set(reportSnapshots.map((snapshot) => snapshot.course)));
