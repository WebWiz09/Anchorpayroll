export default function handler(req, res) {
  console.log("Payroll rows:", req.body.rows);
  return res.status(200).json({ success: true });
}