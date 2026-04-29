import LoginFooter from '@/app/login/_components/footer';
import LoginMainSection from '@/app/login/_components/section';
import LoginNavigation from '@/app/login/_components/navigation';

export default function Login() {
    return (
        <>
            <LoginNavigation />
            <LoginMainSection />
            <LoginFooter />
        </>
    );
}