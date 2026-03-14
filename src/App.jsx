import {
  Zap,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Workflow Automation",
    desc: "Automate repetitive steps, reduce manual work, and keep projects moving faster.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Team Collaboration",
    desc: "Align your team with shared tasks, updates, and priorities in one place.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Advanced Analytics",
    desc: "Track delivery speed, performance trends, and team efficiency with clarity.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$9",
    desc: "Great for solo founders and small teams getting started.",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    desc: "Best for growing teams that need automation and visibility.",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    desc: "For larger teams that need scale, control, and advanced workflows.",
    highlight: false,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
<nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="TaskFlow logo"
        className="h-10 w-10 rounded-xl object-cover"
      />
      <div className="text-2xl font-bold tracking-tight text-gray-900">
        Task<span className="text-blue-600">Flow</span>
      </div>
    </div>

    <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
      <a href="#features" className="transition hover:text-blue-600">
        Features
      </a>
      <a href="#pricing" className="transition hover:text-blue-600">
        Pricing
      </a>
      <a href="#about" className="transition hover:text-blue-600">
        About
      </a>
    </div>

    <div className="hidden md:block">
      <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
        Get Started
      </button>
    </div>

    <button className="md:hidden">
      <Menu className="h-6 w-6 text-gray-800" />
    </button>
  </div>
</nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              Smarter project delivery for modern teams
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
              Manage your work
              <span className="block text-blue-600">faster with AI</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              TaskFlow helps teams plan projects, automate repetitive work,
              track delivery, and stay aligned with one modern workspace.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
                Start Free Trial
              </button>

              <button className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-800 transition hover:bg-gray-50">
                View Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-200/60 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">TaskFlow</p>
                    <h3 className="text-xl font-semibold">Delivery overview</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                    Sprint 12 · Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-slate-300">2.4x</p>
                    <p className="mt-2 text-sm">faster delivery cycles</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-slate-300">32%</p>
                    <p className="mt-2 text-sm">fewer blocked initiatives</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-slate-300">1 day</p>
                    <p className="mt-2 text-sm">average time to onboard</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Critical initiatives</span>
                    <span>4 in motion</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-3/4 rounded-full bg-blue-400" />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    ⚡ 18 updates automated in the last hour
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Cycle time</p>
                  <div className="mt-4 flex items-end gap-3">
                    <div className="h-16 w-3 rounded-full bg-blue-200" />
                    <div className="h-24 w-3 rounded-full bg-blue-300" />
                    <div className="h-12 w-3 rounded-full bg-blue-400" />
                    <div className="h-28 w-3 rounded-full bg-blue-500" />
                    <div className="h-20 w-3 rounded-full bg-blue-600" />
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    -18% vs last sprint
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Team load</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>Design</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200">
                        <div className="h-2 w-[78%] rounded-full bg-blue-600" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>Engineering</span>
                        <span>54%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200">
                        <div className="h-2 w-[54%] rounded-full bg-slate-800" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Live activity</p>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <div className="flex items-center justify-between">
                      <span>Release checklist generated</span>
                      <span className="text-gray-500">2m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Risky issues escalated</span>
                      <span className="text-gray-500">9m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Weekly report delivered</span>
                      <span className="text-gray-500">12m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["10k+", "active users"],
              ["98%", "team satisfaction"],
              ["4.9/5", "average rating"],
              ["30%", "time saved weekly"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="mt-1 text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Features
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Everything you need to run delivery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Keep work moving with automation, shared context, and clear visibility across teams.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / trust */}
      <section id="about" className="bg-gray-50 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why teams choose TaskFlow
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Built for clarity, speed, and momentum
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              TaskFlow combines planning, reporting, and automation in one place,
              helping teams reduce manual admin and focus on execution.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              "Reduce repetitive project admin with smart automation",
              "Get real-time visibility into workload and delivery",
              "Keep teams aligned with shared updates and tracking",
              "Move from planning to execution without extra tools",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Simple pricing for every stage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start small, upgrade as your team grows.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 text-center transition ${
                  plan.highlight
                    ? "border-2 border-blue-600 bg-white shadow-xl"
                    : "border border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-5xl font-bold text-gray-900">{plan.price}</p>
                <p className="mt-4 text-gray-600">{plan.desc}</p>

                <button
                  className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold transition ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-10 pt-4 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-blue-600 px-6 py-16 text-center text-white shadow-xl md:px-12">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Start managing your work today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Join fast-moving teams that use TaskFlow to simplify delivery and save time every week.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row lg:px-8">
          <p>© 2026 TaskFlow. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}