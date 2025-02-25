import { useState } from "react";
import logo from "../../assets/logo.png";

const SendMoney = () => {
  const [formData, setFormData] = useState({
    receiver: "",
    amount: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateFee = () => {
    const { amount } = formData;
    return amount > 0 && amount <= 100 ? 5 : 0; // 5 BDT fee for amounts up to 100 BDT
  };

  const totalAmount = () => {
    const fee = calculateFee();
    return parseFloat(formData.amount) + fee;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.receiver || !formData.amount) {
      alert("Please fill in all fields.");
      return;
    }
    setShowModal(true); // Open the modal
  };

  const handleConfirm = () => {
    if (pin.length !== 5) {
      alert("PIN must be 5 digits.");
      return;
    }

    // Simulate sending data to the database
    console.log("Transaction Details:", {
      receiver: formData.receiver,
      amount: formData.amount,
      fee: calculateFee(),
      total: totalAmount(),
      pin,
    });

    // Reset form and close modal
    setFormData({ receiver: "", amount: "" });
    setPin("");
    setShowModal(false);
    alert("Transaction successful!");
  };

  const handleCancel = () => {
    setShowModal(false); // Close the modal
    setPin(""); // Reset PIN
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-800">
      {/* Card Container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-96 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <img src={logo} alt="bKash Logo" className="w-16" />
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold text-center">
          Send Money <span className="text-purple-500">Securely</span>
        </h3>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Receiver */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Receiver{"'"}s Phone Number
            </label>
            <input
              type="tel"
              name="receiver"
              placeholder="e.g., 017XXXXXXXX"
              value={formData.receiver}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Amount (BDT)
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Minimum 50 BDT"
              value={formData.amount}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
              required
            />
          </div>
          {/* Proceed Button */}
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-purple-500 px-4 py-2 text-white shadow-lg hover:bg-purple-600 transition"
          >
            Proceed
          </button>
        </form>
        {/* Footer Text */}
        <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          Minimum amount is 50 BDT. For transactions up to 100 BDT, a fee of 5 BDT will be charged.
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-xs  flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
              Confirm Transaction
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Receiver:</strong> {formData.receiver}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Amount:</strong> {formData.amount} BDT
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Fee:</strong> {calculateFee()} BDT
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Total:</strong> {totalAmount()} BDT
              </p>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
                  Enter 5-Digit PIN
                </label>
                <input
                  type="password"
                  maxLength="5"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMoney;