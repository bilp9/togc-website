import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth and Young Adults Ministry",
  description:
    "Discover the Youth and Young Adults Ministry at Tabernacle of Grace Church, helping young people grow in Christ through worship, fellowship, and service.",
};

export default function Youth() {
  return (
    <main>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Ministries
          </p>
          <h1 className="text-4xl font-bold">Youth &amp; Young Adults Ministry</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            Guiding and nurturing young people into a strong and meaningful
            relationship with Christ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              The mission of this ministry is to guide and nurture young people
              into a strong and meaningful relationship with Christ.
            </p>

            <p>
              Through worship, fellowship, service, and witnessing, young
              people are integrated into the life of the Church and encouraged
              to become active members of the body of Christ.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Our Mission</h2>
            <ul className="space-y-3 text-lg leading-8 text-stone-700">
              <li>Develop spiritual identity and purpose</li>
              <li>Encourage fellowship and unity</li>
              <li>Teach biblical principles for everyday life</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Scripture</h2>
            <ul className="space-y-3 text-lg leading-8 text-stone-700">
              <li>
                &quot;Your sons and daughters will prophesy...&quot; - Acts
                2:17
              </li>
              <li>
                &quot;Stir up one another to love and good works.&quot; -
                Hebrews 10:24
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
