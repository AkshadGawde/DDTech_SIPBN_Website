// lib/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase'; // Import Firebase auth

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                if (!user) {
                    // If no user, redirect to login page
                    router.push('/login');
                }
            });

            return () => unsubscribe(); // Cleanup subscription on unmount
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
