import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const text = await file.text();
    const lines = text.split("\n").map(l => l.split(","));
    setRows(lines.slice(1).map(([email, address, amount]) => ({ email, address, amount })));
  };

  const handleDistribute = async () => {
    setStatus("Processing payroll...");
    await axios.post("/api/distribute", { rows });
    setStatus("✅ Payroll distributed (mock)");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-anchor-navy mb-6">Employer Dashboard</h1>
      <input type="file" accept=".csv" onChange={handleUpload} className="mb-4" />
      {rows.length > 0 && (
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="font-semibold mb-2">Payroll Preview</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th>Email</th><th>Wallet</th><th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b">
                  <td>{r.email}</td><td>{r.address || "—"}</td><td>{r.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        onClick={handleDistribute}
        className="px-6 py-3 bg-anchor-orange text-white rounded-lg shadow font-medium"
      >
        Distribute Payroll
      </button>
      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </div>
  );
}