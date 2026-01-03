import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-bg-primary">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">
        CrazyGames Premium Demo
      </h1>
      <p className="text-xl text-text-secondary mb-8">
        Project initialized successfully!
      </p>

      <Link
        href="/premium"
        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all"
      >
        View Premium Page
      </Link>
    </main>
  );
}
