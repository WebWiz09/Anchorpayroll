export default function handler(req, res) {
  const { token } = req.query;
  return res.status(200).json({
    address: "0xDEMO123456789",
    amount: "10 USDC"
  });
}