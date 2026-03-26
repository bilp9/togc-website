import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "View service times and weekly gatherings at Tabernacle of Grace Church, including Sunday worship, Sunday school, prayer meeting, and Bible study.",
};

export default function Services() {
  return (
    <main>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Gather With Us
          </p>
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            Join us for worship, prayer, teaching, and fellowship throughout
            the week.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div>
            <h2 className="mb-3 text-2xl font-semibold">Sunday Worship</h2>
            <p className="text-lg text-stone-700">12:00 PM - 2:00 PM (In Person)</p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold">Weekly Schedule</h2>
            <ul className="space-y-2 text-lg text-stone-700">
              <li>Sunday School - Sunday 11:00 AM</li>
              <li>Prayer Meeting - Tuesday 7:00 PM</li>
              <li>Bible Study - Wednesday 7:00 PM</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold">Join Online</h2>
            <a
              href="https://join.freeconferencecall.com/tabernacleaz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded bg-yellow-500 px-5 py-3 font-medium text-black hover:bg-yellow-400"
            >
              Join Meeting
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
