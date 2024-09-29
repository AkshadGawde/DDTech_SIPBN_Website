// pages/success.js

import { useRouter } from 'next/router';

const Success = () => {
    const router = useRouter();
    const { email, orderId } = router.query;

    return (
        <section className="py-24 relative bg-gray-900 text-white">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Purchase Complete!</h2>
                <p className="text-xl mb-8">
                    Thank you for your purchase. An email with your ticket details has been sent to {email}.
                </p>
                <p className="text-lg mb-4">Order ID: {orderId}</p>
                <button 
                    onClick={() => router.push('/')}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-200"
                >
                    Return to Home
                </button>
            </div>
        </section>
    );
};

export default Success;
