import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
// import Dashboard from "./pages/User/Dashboard";
// import SendMoney from "./pages/User/SendMoney";
// import CashOut from "./pages/User/CashOut";
// import CashIn from "./pages/User/CashIn";
// import Transactions from "./pages/User/Transactions";
// import BalanceInquiry from "./pages/User/BalanceInquiry";
// import AgentDashboard from "./pages/Agent/AgentDashboard";
// import ApproveRequests from "./pages/Agent/ApproveRequests";
// import CashInRequests from "./pages/Agent/CashInRequests";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import ManageUsers from "./pages/Admin/ManageUsers";
// import ApproveAgents from "./pages/Admin/ApproveAgents";
// import TransactionsOverview from "./pages/Admin/TransactionsOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

// {/* User Routes */}
// <Route path="/dashboard" element={<Dashboard />} />
// <Route path="/send-money" element={<SendMoney />} />
// <Route path="/cash-out" element={<CashOut />} />
// <Route path="/cash-in" element={<CashIn />} />
// <Route path="/transactions" element={<Transactions />} />
// <Route path="/balance-inquiry" element={<BalanceInquiry />} />

// {/* Agent Routes */}
// <Route path="/agent/dashboard" element={<AgentDashboard />} />
// <Route path="/agent/approve-requests" element={<ApproveRequests />} />
// <Route path="/agent/cash-in-requests" element={<CashInRequests />} />

// {/* Admin Routes */}
// <Route path="/admin/dashboard" element={<AdminDashboard />} />
// <Route path="/admin/manage-users" element={<ManageUsers />} />
// <Route path="/admin/approve-agents" element={<ApproveAgents />} />
// <Route path="/admin/transactions-overview" element={<TransactionsOverview />} />
