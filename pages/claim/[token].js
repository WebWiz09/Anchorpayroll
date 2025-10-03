import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Claim() {
  const router = useRouter();
  const { token } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (token) {
      axios.get(`/api/claim/${token}`).then(res => setData(res.data));
    }
  }, [token]);

  if (!data) return <p className="p-8">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 shadow-lg rounded-xl bg-gray-50 text-center">
        <h1 className="text-2xl font-bold text-anchor-navy mb-4">Claim Your Pay</h1>
        <p className="mb-2">Wallet Address:</p>
        <code className="block mb-4">{data.address}</code>
        <p className="text-sm text-gray-600">
          Funds available: {data.amount || "10 USDC (mock)"}
        </p>
      </div>
    </div>
  );
}