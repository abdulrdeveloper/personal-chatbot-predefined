export default function Header() {
  return (
    <header className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-black/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-3xl text-slate-100">
            ☕
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-50">HiteshBot</h1>
            <p className="mt-1 text-sm text-slate-400">A simple predefined chatbot for web dev, React, and JavaScript.</p>
          </div>
        </div>
        <div className="rounded-full bg-slate-800 px-5 py-2 text-sm text-slate-300 ring-1 ring-slate-700">
          Online — Ready to help
        </div>
      </div>
    </header>
  );
}