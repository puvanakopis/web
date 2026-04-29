import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import RouteNavbar from '@/components/RouteNavbar';
import RouteFooter from '@/components/RouteFooter';

export const metadata = {
  title: 'Admin Panel',
  description: 'Attendance Management System for faculty',
};

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${newsreader.variable} ${manrope.variable} font-body bg-surface text-on-surface antialiased`}
      >
        <RouteNavbar />
        {children}
        <RouteFooter />
      </body>
    </html>
  );
}