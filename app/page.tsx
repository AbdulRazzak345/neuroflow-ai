export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">NeuroFlow AI</h1>

        <div className="flex items-center gap-6 text-sm text-zinc-300">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>

          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          AI Workflow Automation Platform
        </span>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Automate modern business workflows with AI
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          NeuroFlow AI helps teams manage tasks, automate workflows,
          and streamline operations with modern AI-driven tools.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-medium text-black hover:opacity-90 transition">
            Start Free
          </button>

          <button className="rounded-xl border border-white/10 px-6 py-3 font-medium hover:bg-white/5 transition">
            Live Demo
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <p className="text-sm text-zinc-400">Tasks Completed</p>
              <h2 className="mt-4 text-4xl font-bold">12.4K</h2>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <p className="text-sm text-zinc-400">Active Users</p>
              <h2 className="mt-4 text-4xl font-bold">8.9K</h2>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <p className="text-sm text-zinc-400">AI Automations</p>
              <h2 className="mt-4 text-4xl font-bold">96%</h2>
            </div>

          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-4xl font-bold">
            Powerful AI Features
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Everything your team needs to automate workflows and boost productivity.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Smart Automation
              </h3>

              <p className="mt-4 text-zinc-400">
                Automate repetitive business workflows using AI-powered systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Analytics Dashboard
              </h3>

              <p className="mt-4 text-zinc-400">
                Track performance, users, and workflow metrics in real time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Team Collaboration
              </h3>

              <p className="mt-4 text-zinc-400">
                Manage projects, teams, and tasks from one unified platform.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-4xl font-bold">
            Simple Pricing
          </h2>

          <p className="mt-4 text-zinc-400">
            Flexible plans for startups and growing teams.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">Starter</h3>

              <p className="mt-4 text-5xl font-bold">$19</p>

              <p className="mt-4 text-zinc-400">
                Perfect for small teams getting started.
              </p>

              <button className="mt-8 w-full rounded-xl bg-white py-3 font-medium text-black hover:opacity-90 transition">
                Choose Plan
              </button>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 scale-105">
              <h3 className="text-2xl font-semibold">Pro</h3>

              <p className="mt-4 text-5xl font-bold">$49</p>

              <p className="mt-4 text-zinc-300">
                Advanced automation tools for scaling businesses.
              </p>

              <button className="mt-8 w-full rounded-xl bg-white py-3 font-medium text-black hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">Enterprise</h3>

              <p className="mt-4 text-5xl font-bold">$99</p>

              <p className="mt-4 text-zinc-400">
                Powerful AI workflows for large organizations.
              </p>

              <button className="mt-8 w-full rounded-xl border border-white/10 py-3 font-medium hover:bg-white/5 transition">
                Contact Sales
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-zinc-500">
        © 2026 NeuroFlow AI. All rights reserved.
      </footer>

    </main>
  );
}