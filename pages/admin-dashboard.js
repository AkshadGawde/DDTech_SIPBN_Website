// pages/admin-dashboard.js
import withAuth from '../lib/withAuth';
import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <section className="admin-dashboard">
            <div className="admin-container">
                <h1 className="admin-header">
                    Welcome to the Admin Dashboard
                </h1>
                <div className="admin-links">
                    <Link href="/event-manager">
                        <div className="admin-link">
                            Manage Events
                        </div>
                    </Link>
                    <Link href="/attendees-download">
                        <div className="admin-link">
                            Download Attendee list
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default withAuth(AdminDashboard);
