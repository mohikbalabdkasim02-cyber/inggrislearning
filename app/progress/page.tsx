export default function ProgressPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Progress</h1>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4">
          <p className="text-sm">Speaking Practice</p>
          <h2 className="text-2xl font-bold">0 Sessions</h2>
        </div>
        <div className="rounded-xl border p-4">
          <p className="text-sm">Listening</p>
          <h2 className="text-2xl font-bold">0 Lessons</h2>
        </div>
        <div className="rounded-xl border p-4">
          <p className="text-sm">Reading</p>
          <h2 className="text-2xl font-bold">0 Lessons</h2>
        </div>
      </section>

      <section className="rounded-xl border p-4">
        <h2 className="font-bold">Recent Speaking History</h2>
        <p className="text-sm opacity-70 mt-2">Your practice recordings will appear here.</p>
      </section>
    </main>
  )
}
