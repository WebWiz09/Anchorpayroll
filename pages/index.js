import Link from 'next/link';
import '@/styles/globals.css';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="p-6 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold text-anchor-orange">Anchor</div>
        <nav className="space-x-6 text-gray-600">
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl text-center p-12">
          <h1 className="text-5xl font-extrabold mb-6 text-anchor-navy">
            Payroll Without Borders
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            One-click global payroll in USDC — wallet-less onboarding and gasless claims.
          </p>
          <Link href="/dashboard">
            <a className="px-8 py-4 bg-anchor-orange text-white rounded-xl font-semibold shadow-md">
              Try the Demo
            </a>
          </Link>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-400 text-sm">
        Built for CTRL+Move Hackathon — Anchor
      </footer>
    </div>
  );
}
