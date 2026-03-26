export default function Mens() {
  return (
    <main>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Ministries
          </p>
          <h1 className="text-4xl font-bold">Men&apos;s Ministry</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            Discipling and equipping men to grow as men of God through
            fellowship, teaching, and service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              The objective of the Men&apos;s Ministry is to disciple and equip
              men to grow in their roles as men of God, whether married or
              single, young or old.
            </p>

            <p>
              Through teaching, fellowship, and service, we aim to model the
              life of Christ and build strong spiritual relationships among men.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Why It Matters</h2>
            <p className="text-lg leading-8 text-stone-700">
              Men are called to lead, serve, and grow in Christ. This ministry
              creates a space where men can support one another and grow
              together.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Scripture</h2>
            <ul className="space-y-3 text-lg leading-8 text-stone-700">
              <li>
                &quot;Iron sharpens iron, so one man sharpens another.&quot; -
                Proverbs 27:17
              </li>
              <li>
                &quot;Stir up one another to love and good works.&quot; -
                Hebrews 10:24
              </li>
              <li>
                &quot;Grow in the grace and knowledge of Jesus Christ.&quot; -
                2 Peter 3:18
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
