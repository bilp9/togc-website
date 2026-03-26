import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tabernacle of Grace Church in Chandler, Arizona for location details, phone information, and church leadership.",
};

export default function Contact() {
  return (
    <main>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Reach Out
          </p>
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            We would love to welcome you, pray with you, and help you connect
            with our church family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div>
            <h2 className="mb-3 text-2xl font-semibold">Church Location</h2>
            <div className="space-y-1 text-lg text-stone-700">
              <p>251 North Roosevelt Avenue</p>
              <p>Chandler, AZ 85226</p>
              <p>Phone: (480) 242-0332</p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold">Leadership</h2>
            <ul className="space-y-2 text-lg text-stone-700">
              <li>Rev. Jean Riccardo Rodney - Senior Pastor</li>
              <li>Sandy Rodney - First Lady</li>
              <li>Rev. Luckerne Joseph - Associate Pastor</li>
              <li>Rev. Rose Anne Raymond - Associate Bishop</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold">Social Media</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/tabernaclechurch/"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-black px-5 py-3 font-medium text-white hover:bg-stone-800"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UC4yQ3sPKSVhajQWTrkmH2uQ?view_as=subscriber"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-yellow-500 px-5 py-3 font-medium text-black hover:bg-yellow-400"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
