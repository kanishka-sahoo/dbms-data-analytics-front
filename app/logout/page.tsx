'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // Add a small delay to show the logging out message
        const timeout = setTimeout(() => {
            router.push('/');
        }, 1500);

        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-xl">Logging out...</h1>
        </div>
    );
}