import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-8">
      <h1 className="text-4xl font-semibold">PlanTogether</h1>
      <Link href="/auth">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sign In
        </button>
      </Link>
    </main>
  );
}