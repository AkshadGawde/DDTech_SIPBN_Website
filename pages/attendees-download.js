// pages/attendeeDownload.js
import { useEffect, useState } from "react";
import withAuth from "../lib/withAuth";
import { db } from "../lib/firebase"; // Import your Firestore database
import { collection, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";

const AttendeeDownload = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const orderData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(orderData);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, []);

  const downloadGuestList = () => {
    const guestList = [];

    orders.forEach((order) => {
      // Ensure tickets is an array and exists
      if (Array.isArray(order.tickets)) {
        order.tickets.forEach((ticket) => {
          guestList.push({
            email: order.email, // Ensure you have an email field in the order
            ticketType: ticket.name,
            quantity: ticket.quantity,
            transactionId: order.orderId,
          });
        });
      }
    });

    const worksheet = XLSX.utils.json_to_sheet(guestList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Guest List");

    // Generate Excel file
    XLSX.writeFile(workbook, "guest_list.xlsx");
  };

  return (
    <div>
      <h1>Download Attendee List</h1>
      <button onClick={downloadGuestList} disabled={orders.length === 0}>
        {orders.length > 0 ? "Download Guest List" : "No Orders Available"}
      </button>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Tickets
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.email}
                </td>
                <td className="px-6 py-4">{order.orderId}</td>
                <td className="px-6 py-4">
                  {Array.isArray(order.tickets) ? (
                    order.tickets.map((ticket) => (
                      <div key={ticket.name}>
                        {ticket.name} (Quantity: {ticket.quantity})
                      </div>
                    ))
                  ) : (
                    <div>No tickets available</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAuth(AttendeeDownload);
