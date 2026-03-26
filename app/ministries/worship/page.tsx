import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praise and Worship Ministry",
  description:
    "Learn about the Praise and Worship Ministry at Tabernacle of Grace Church and how it leads the congregation in worship through music, prayer, and devotion.",
};

export default function Worship() {
  return (
    <main>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Ministries
          </p>
          <h1 className="text-4xl font-bold">Praise &amp; Worship Ministry</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            Leading the congregation into the presence of God through music,
            prayer, and devotion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              The Praise and Worship Ministry is called to lead the
              congregation into the presence of God through music, prayer, and
              devotion.
            </p>

            <p>
              Our goal is to focus hearts and minds on God, creating an
              atmosphere where people can connect with Him deeply and
              sincerely.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Why We Worship</h2>
            <p className="text-lg leading-8 text-stone-700">
              God alone is worthy of our praise and devotion. Worship is not
              just an act, it is a command and a lifestyle.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">How We Worship</h2>
            <p className="text-lg leading-8 text-stone-700">
              We worship in spirit and in truth, through a relationship with
              Jesus Christ, expressing our faith through music, service, and
              daily living.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Scripture</h2>
            <ul className="space-y-3 text-lg leading-8 text-stone-700">
              <li>
                &quot;Worship the Lord your God...&quot; - Matthew 4:10
              </li>
              <li>&quot;Worship in spirit and truth.&quot; - John 4:23</li>
              <li>
                &quot;Offer your bodies as living sacrifices.&quot; - Romans
                12:1
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
