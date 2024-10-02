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
            name: order.name || "", // Add name to the guest list
            mobile: order.mobileNumber || "", // Add mobile to the guest list
            email: order.email || "", // Add email field in the order
            ticketType: ticket.name,
            quantity: ticket.quantity,
            transactionId: order.orderId,
            discount: order.discount || 0, // Add discount field
            discountDescription: order.discountDescription || "No discount", // Add discountDescription field
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
    <div className="attendee-list-container">
      <h1>Download Attendee List</h1>
      <button onClick={downloadGuestList} disabled={orders.length === 0}>
        {orders.length > 0 ? "Download Guest List" : "No Orders Available"}
      </button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Tickets</th>
              <th>Discount</th>
              <th>Discount Description</th> 
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name || "N/A"}</td>
                <td>{order.mobileNumber || "N/A"}</td>
                <td>{order.email || "N/A"}</td>
                <td>{order.orderId}</td>
                <td>
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
                <td>{order.discount || "0"}</td> 
                <td>
                  {order.discountDescription || "No discount"} 
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
