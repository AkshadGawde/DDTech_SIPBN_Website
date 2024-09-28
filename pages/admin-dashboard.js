// pages/admin-dashboard.js
import withAuth from '../lib/withAuth';
import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Welcome to the Admin Dashboard</h1>
            <Link href="/event-manager">Manage Events</Link>
            <br></br>
            <Link href="/ticket-manager">Manage Tickets</Link>
        </div>
    );
};

export default withAuth(AdminDashboard);
