export default function LearnPage(){
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Learning Dashboard</h1>
      <p className="mt-3 text-lg">Choose your English journey.</p>
      <div className="mt-8 grid gap-4">
        <div className="rounded-xl border p-5">📺 Watch Lessons</div>
        <div className="rounded-xl border p-5">🎧 Listening Practice</div>
        <div className="rounded-xl border p-5">📖 Reading Practice</div>
        <div className="rounded-xl border p-5">🎤 Speaking Practice</div>
      </div>
    </main>
  )
}
