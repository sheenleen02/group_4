import React, { useState } from "react";
import { motion } from "framer-motion"; // Optional for animation, if desired

const initialTransactions = [
  { id: "#123487AD", amount: "#234", method: "Mastercard", date: "2024-01-22, 07:20" },
  { id: "#346TYHFD", amount: "#456", method: "Paypal", date: "2024-02-05, 07:20" },
  { id: "#ERFRT11ID", amount: "#906", method: "Paypal", date: "2024-03-15, 07:20" },
  { id: "#12WJND55", amount: "#564", method: "Paypal", date: "2024-04-17, 07:20" },
  { id: "#PO76421", amount: "#780", method: "Paypal", date: "2024-05-19, 07:20" },
];

const TransactionTable = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [itemsToShow, setItemsToShow] = useState(20);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // State to store the selected transaction
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle sort by date
  const handleSort = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setTransactions(sortedTransactions);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Handle "View" button click
  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  // Filter transactions based on search
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="container mx-auto mt-10">
        <div className="flex justify-between items-center mb-5">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-md"
          />
          <select
            value={itemsToShow}
            onChange={(e) => setItemsToShow(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value={20}>Show 20</option>
            <option value={50}>Show 50</option>
          </select>
          <button
            onClick={handleSort}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Date {sortOrder === "asc" ? "▲" : "▼"}
          </button>
        </div>

        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr>
              <th className="p-4 bg-gray-100 text-left">Transaction ID</th>
              <th className="p-4 bg-gray-100 text-left">Paid</th>
              <th className="p-4 bg-gray-100 text-left">Method</th>
              <th className="p-4 bg-gray-100 text-left">Created</th>
              <th className="p-4 bg-gray-100 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.slice(0, itemsToShow).map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="p-4">{transaction.id}</td>
                <td className="p-4">{transaction.amount}</td>
                <td className="p-4">{transaction.method}</td>
                <td className="p-4">{transaction.date}</td>
                <td className="p-4">
                  <button
                    className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                    onClick={() => handleViewTransaction(transaction)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTransaction && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
            <p><strong>ID:</strong> {selectedTransaction.id}</p>
            <p><strong>Amount:</strong> {selectedTransaction.amount}</p>
            <p><strong>Method:</strong> {selectedTransaction.method}</p>
            <p><strong>Date:</strong> {selectedTransaction.date}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
