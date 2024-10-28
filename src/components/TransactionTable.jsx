import React, { useState } from "react";

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
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSort = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setTransactions(sortedTransactions);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center px-2 md:px-8">
      <div className="container mx-auto mt-4 md:mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-3 md:mb-5 gap-2 md:gap-0">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="p-1 md:p-2 border border-gray-300 rounded-md w-full md:w-auto"
          />
          <select
            value={itemsToShow}
            onChange={(e) => setItemsToShow(Number(e.target.value))}
            className="p-1 md:p-2 border border-gray-300 rounded-md w-full md:w-auto"
          >
            <option value={20}>Show 20</option>
            <option value={50}>Show 50</option>
          </select>
          <button
            onClick={handleSort}
            className="p-1 md:p-2 bg-blue-500 text-white rounded-md w-full md:w-auto"
          >
            Date {sortOrder === "asc" ? "▲" : "▼"}
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-fixed bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="p-2 md:p-4 bg-gray-100 text-left">Transaction ID</th>
                <th className="p-2 md:p-4 bg-gray-100 text-left">Paid</th>
                <th className="p-2 md:p-4 bg-gray-100 text-left">Method</th>
                <th className="p-2 md:p-4 bg-gray-100 text-left">Created</th>
                <th className="p-2 md:p-4 bg-gray-100 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.slice(0, itemsToShow).map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="p-2 md:p-4 truncate">{transaction.id}</td>
                  <td className="p-2 md:p-4">{transaction.amount}</td>
                  <td className="p-2 md:p-4">{transaction.method}</td>
                  <td className="p-2 md:p-4">{transaction.date}</td>
                  <td className="p-2 md:p-4">
                    <button
                      className="bg-gray-200 p-1 md:p-2 rounded-md hover:bg-gray-300"
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
      </div>

      {isModalOpen && selectedTransaction && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center px-2 md:px-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Transaction Details</h2>
            <p><strong>ID:</strong> {selectedTransaction.id}</p>
            <p><strong>Amount:</strong> {selectedTransaction.amount}</p>
            <p><strong>Method:</strong> {selectedTransaction.method}</p>
            <p><strong>Date:</strong> {selectedTransaction.date}</p>
            <button
              className="mt-3 md:mt-4 px-3 py-2 md:px-4 md:py-2 bg-red-500 text-white rounded-lg w-full md:w-auto"
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
