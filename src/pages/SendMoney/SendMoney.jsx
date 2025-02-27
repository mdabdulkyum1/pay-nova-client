import { useState } from "react";
import logo from "../../assets/logo.png";
import useAxiosPublic from "../../hooks/AxiosPublic/useAxiosPublic";

const SendMoney = () => {
  const axiosPublic = useAxiosPublic();
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
    return amount > 0 && amount <= 100 ? 5 : 0;
  };

  const totalAmount = () => {
    return parseFloat(formData.amount) + calculateFee();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.receiver || !formData.amount) {
      alert("Please fill in all fields.");
      return;
    }
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (pin.length !== 5) {
      alert("PIN must be 5 digits.");
      return;
    }

    const transactionData = {
      receiver: formData.receiver,
      amount: parseFloat(formData.amount),
      fee: calculateFee(),
      total: totalAmount(),
      pin,
    };

    try {
      const response = await axiosPublic.post("/api/transactions", transactionData);
      console.log("Transaction Response:", response.data);
      alert("Transaction successful!");
      setFormData({ receiver: "", amount: "" });
      setPin("");
      setShowModal(false);
    } catch (error) {
      console.error("Transaction Error:", error);
      alert("Transaction failed. Please try again.");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setPin("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-96 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <img src={logo} alt="bKash Logo" className="w-16" />
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold text-center">
          Send Money <span className="text-purple-500">Securely</span>
        </h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-purple-500 px-4 py-2 text-white shadow-lg hover:bg-purple-600 transition"
          >
            Proceed
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
              Confirm Transaction
            </h3>
            <div className="space-y-3">
              <p><strong>Receiver:</strong> {formData.receiver}</p>
              <p><strong>Amount:</strong> {formData.amount} BDT</p>
              <p><strong>Fee:</strong> {calculateFee()} BDT</p>
              <p><strong>Total:</strong> {totalAmount()} BDT</p>
              <div>
                <label className="block text-sm font-medium">Enter 5-Digit PIN</label>
                <input
                  type="password"
                  maxLength="5"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
              <button onClick={handleConfirm} className="px-4 py-2 bg-purple-500 text-white rounded-md">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMoney;
