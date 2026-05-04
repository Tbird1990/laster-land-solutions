export default function LasterLandSolutionsWebsite() {
  const services = [
    {
      title: "Land Clearing",
      description:
        "Clear overgrowth, brush, and small trees to open up your property and prepare sites for use.",
    },
    {
      title: "Brush Cutting",
      description:
        "Knock down thick brush and maintain fence lines, trails, and overgrown areas.",
    },
    {
      title: "Grading & Leveling",
      description:
        "Smooth rough ground, improve drainage, and prep pads, lots, and work areas.",
    },
    {
      title: "Driveway Repair",
      description:
        "Fix washouts, ruts, and potholes to keep driveways usable and looking clean.",
    },
    {
      title: "Debris Removal",
      description:
        "Load and move brush, limbs, and non-hazardous jobsite debris efficiently.",
    },
    {
      title: "Material Spreading",
      description:
        "Move and spread gravel, dirt, mulch, and other site materials where needed.",
    },
    {
      title: "Stump Grinding",
      description:
        "Remove unwanted tree stumps to clean up your property and prepare for landscaping or construction.",
    },
    {
      title: "Landscaping",
      description:
        "Light landscaping work including cleanup, grading prep, and material placement to improve property appearance.",
    },
  ];

  const gallery = [
    "Lot clearing",
    "Brush cleanup",
    "Driveway grading",
    "Pad prep",
    "Debris removal",
    "Final cleanup",
  ];

  const highlights = [
    "Local West Tennessee service",
    "Fast response and clear communication",
    "Free quotes by call, text, or email",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <div className="flex-1">
  <p className="text-left text-3xl font-bold tracking-wide lg:text-5xl">
    Laster Land Solutions
  </p>
</div>    
            <div className="hidden gap-3 sm:flex">
              <a
                href="tel:7314149539"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call 731-414-9539
              </a>
              <a
                href="mailto:lasterlandsolutions@gmail.com"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Email for Quote
              </a>
            </div>
          </header>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Whether you’re improving your property, maintaining it, or getting it ready for what’s next.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Laster Land Solutions helps property owners get more use, curb appeal, and value from their property with cleanup, grading, stump grinding, landscaping, and site preparation. For contractors, we’re a dependable subcontractor who shows up ready to work, communicates clearly, and gets the job done right.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:7314149539"
                  className="rounded-2xl bg-emerald-400 px-6 py-4 text-center text-base font-bold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5"
                >
                  Call Now
                </a>
                <a
                  href="sms:7314149539"
                  className="rounded-2xl border border-white/15 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
                >
                  Text Photos for a Quote
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Free Quote</p>
                <h2 className="mt-3 text-2xl font-bold">Get in touch today</h2>
                <p className="mt-3 text-slate-300">
                  Call, text, or email with your job details, location, and photos.
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href="tel:7314149539"
                    className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                  >
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-lg font-bold">731-414-9539</p>
                  </a>
                  <a
                    href="mailto:lasterlandsolutions@gmail.com"
                    className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                  >
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="break-all text-lg font-bold">lasterlandsolutions@gmail.com</p>
                  </a>
                  <a
                    href="sms:7314149539"
                    className="block rounded-2xl bg-white px-5 py-4 text-center text-base font-bold text-slate-950 transition hover:opacity-90"
                  >
                    Start a Quote by Text
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Services</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Work built for property owners who need results.</h2>
          <p className="mt-4 text-lg text-slate-300">
            Whether you need cleanup, prep work, or ongoing property maintenance, Laster Land Solutions is ready to help.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">About</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Local service. Clear communication. Clean finished work.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Laster Land Solutions focuses on straightforward, dependable service for residential and light commercial
              projects. The goal is simple: show up ready to work, communicate clearly, and leave the property in better
              shape than it was before.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Service Area</p>
                <p className="mt-2 text-lg font-bold">Jackson, TN and surrounding West Tennessee areas</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Best Way to Reach Us</p>
                <p className="mt-2 text-lg font-bold">Call or text photos for faster quoting</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item}
                className="flex min-h-[170px] items-end rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Project Type</p>
                  <p className="mt-2 text-xl font-bold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-emerald-400 to-cyan-300 p-[1px] shadow-2xl shadow-emerald-500/10">
          <div className="grid gap-8 rounded-[2rem] bg-slate-950 px-8 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Ready to start?</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Get a free quote for your property project.</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Send your location, a quick description of the job, and photos if you have them.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="tel:7314149539"
                className="rounded-2xl bg-white px-6 py-4 text-center text-base font-bold text-slate-950 transition hover:opacity-90"
              >
                Call 731-414-9539
              </a>
              <a
                href="mailto:lasterlandsolutions@gmail.com"
                className="rounded-2xl border border-white/15 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
