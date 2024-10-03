// pages/admin.js
import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/admin-dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="auth-section">
            <div className="auth-container">
                <div className="auth-box">
                    <div className="auth-content">
                        <h1 className="auth-title">
                            Sign in to admin account
                        </h1>
                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-input"
                                    placeholder="name@company.com" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    className="form-input"
                                    placeholder="••••••••" 
                                    required 
                                />
                            </div>
    
                            <button 
                                type="submit" 
                                className="submit-button"
                            >
                                Sign in
                            </button>
                            {error && <p className="form-error">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
    
};

export default AdminLogin;
