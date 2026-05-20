export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.06),transparent_34%),linear-gradient(to_bottom,#020617,#09090b_44%,#000)] text-white selection:bg-blue-300/25 selection:text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <a href="#" className="text-lg font-semibold tracking-[-0.01em] text-white transition-colors duration-300 hover:text-blue-100 sm:text-2xl">
            NeuroFlow AI
          </a>

          <div className="order-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm font-medium text-zinc-400 backdrop-blur-xl sm:order-none sm:w-auto sm:gap-1 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <a href="#features" className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white">Features</a>
            <a href="#pricing" className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white">Pricing</a>
            <a href="#about" className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white">About</a>
          </div>

          <a
            href="#pricing"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-white/20 active:translate-y-0"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center sm:py-28 lg:py-36">
        <div className="absolute inset-x-6 top-10 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-blue-500/10 blur-3xl" />

        <span className="mb-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-zinc-300 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
          AI Workflow Automation Platform
        </span>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Automate modern business workflows with AI
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
          NeuroFlow AI helps teams manage tasks, automate workflows,
          and streamline operations with modern AI-driven tools.
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#pricing"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-white/20 active:translate-y-0"
          >
            Start Free
          </a>

          <a
            href="#features"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:translate-y-0"
          >
            Live Demo
          </a>
        </div>

        {/* Dashboard Cards */}
        <div className="mt-16 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl transition-all duration-500 hover:border-white/15 sm:mt-20 sm:p-6">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-blue-950/20">
              <p className="text-sm font-medium text-zinc-400">Tasks Completed</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">12.4K</h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-violet-950/20">
              <p className="text-sm font-medium text-zinc-400">Active Users</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">8.9K</h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-cyan-950/20">
              <p className="text-sm font-medium text-zinc-400">AI Automations</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">96%</h2>
            </div>

          </div>
        </div>

      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-28 px-6 py-20 sm:py-24">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Powerful AI Features
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-400">
            Everything your team needs to automate workflows and boost productivity.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.035] p-8 text-left shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.09] hover:shadow-blue-950/25">
              <div className="mb-6 h-10 w-10 rounded-xl border border-blue-400/20 bg-blue-400/10 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-400/15" />
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                Smart Automation
              </h3>

              <p className="mt-4 text-pretty leading-7 text-zinc-400">
                Automate repetitive business workflows using AI-powered systems.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.035] p-8 text-left shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.09] hover:shadow-violet-950/25">
              <div className="mb-6 h-10 w-10 rounded-xl border border-violet-400/20 bg-violet-400/10 shadow-lg shadow-violet-500/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-violet-400/15" />
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                Analytics Dashboard
              </h3>

              <p className="mt-4 text-pretty leading-7 text-zinc-400">
                Track performance, users, and workflow metrics in real time.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.035] p-8 text-left shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.09] hover:shadow-cyan-950/25">
              <div className="mb-6 h-10 w-10 rounded-xl border border-cyan-400/20 bg-cyan-400/10 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15" />
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                Team Collaboration
              </h3>

              <p className="mt-4 text-pretty leading-7 text-zinc-400">
                Manage projects, teams, and tasks from one unified platform.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-28 px-6 py-20 sm:py-24">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Simple Pricing
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-400">
            Flexible plans for startups and growing teams.
          </p>

          <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">

            <div className="flex rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-8 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-blue-950/20">
              <div className="flex w-full flex-col">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">Starter</h3>

                <p className="mt-5 text-5xl font-semibold tracking-[-0.04em]">$19</p>
                <p className="mt-1 text-sm text-zinc-500">per user / month</p>

                <p className="mt-6 text-pretty leading-7 text-zinc-400">
                  Perfect for small teams getting started.
                </p>

                <a
                  href="#"
                  className="mt-auto block w-full rounded-xl bg-white py-3 text-center font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-white/20 active:translate-y-0"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            <div className="relative flex overflow-hidden rounded-3xl border border-blue-300/30 bg-gradient-to-b from-white/[0.16] to-white/[0.055] p-8 text-left shadow-2xl shadow-blue-950/40 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-200/50 hover:shadow-blue-900/50 md:scale-105">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="relative flex w-full flex-col">
                <span className="absolute right-6 top-6 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-100">
                  Most Popular
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">Pro</h3>

                <p className="mt-5 text-5xl font-semibold tracking-[-0.04em]">$49</p>
                <p className="mt-1 text-sm text-zinc-400">per user / month</p>

                <p className="mt-6 text-pretty leading-7 text-zinc-300">
                  Advanced automation tools for scaling businesses.
                </p>

                <a
                  href="#"
                  className="mt-auto block w-full rounded-xl bg-white py-3 text-center font-semibold text-black shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-blue-400/30 active:translate-y-0"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="flex rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-8 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-cyan-950/20">
              <div className="flex w-full flex-col">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">Enterprise</h3>

                <p className="mt-5 text-5xl font-semibold tracking-[-0.04em]">$99</p>
                <p className="mt-1 text-sm text-zinc-500">per user / month</p>

                <p className="mt-6 text-pretty leading-7 text-zinc-400">
                  Powerful AI workflows for large organizations.
                </p>

                <a
                  href="#"
                  className="mt-auto block w-full rounded-xl border border-white/10 bg-white/5 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 active:translate-y-0"
                >
                  Contact Sales
                </a>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-28 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.045] to-white/[0.025] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-500 hover:border-white/15 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Built for operating teams
            </p>
            <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              A calmer way to coordinate people, processes, and AI agents.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-zinc-400">
              NeuroFlow AI brings automations, task context, and performance signals into one workspace so teams can move faster without losing operational clarity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.08]">
              <p className="text-3xl font-semibold tracking-[-0.03em]">24/7</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">AI workflows monitoring handoffs, approvals, and exceptions.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-white/[0.08]">
              <p className="text-3xl font-semibold tracking-[-0.03em]">3.2x</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Faster execution for teams replacing manual coordination loops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
        © 2026 NeuroFlow AI. All rights reserved.
      </footer>

    </main>
  );
}
