export default function Donate() {
  return (
    <main>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Support The Mission
          </p>
          <h1 className="text-4xl font-bold">Give</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            Your generosity helps our church serve families, strengthen faith,
            and care for the community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-stone-200">
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-8 text-stone-700">
            Thank you for partnering with Tabernacle of Grace Church through
            your financial support.
          </p>

          <a
            href="https://tithe.ly/give_new/www/#/tithely/give-one-time/1768024"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded bg-yellow-500 px-6 py-3 font-medium text-black hover:bg-yellow-400"
          >
            Give Now
          </a>
        </div>
      </section>
    </main>
  );
}
