import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Tabernacle of Grace Church of the Nazarene, a Haitian-American congregation serving Chandler, Arizona with worship, prayer, and community.",
};

export default function Home() {
  return (
    <main>
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-center sm:text-left">
              <Image
                src="/logo.avif"
                alt="Tabernacle of Grace Church logo"
                width={220}
                height={220}
                priority
                className="h-auto max-h-44 w-auto object-contain sm:max-h-52"
              />

              <div>
                <h1 className="mb-4 font-serif text-4xl font-bold sm:text-5xl">
                  Tabernacle of Grace Church
                </h1>
                <p className="text-lg">
                  A welcoming Haitian-American congregation
                </p>
              </div>
            </div>

            <p className="mx-auto mb-6 max-w-2xl text-center text-lg text-gray-300">
              Byenvini! Nou kontan we ou isit la. Welcome! We are glad you are
              here.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/services"
                className="rounded bg-white px-6 py-3 text-black"
              >
                View Services
              </Link>

              <Link
                href="/donate"
                className="rounded bg-yellow-500 px-6 py-3 text-black"
              >
                Give
              </Link>
            </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Welcome</h2>
            <p className="text-lg leading-8 text-stone-700">
              Welcome to Tabernacle of Grace Church of the Nazarene (TOGCN). We
              serve the Haitian-American community with services in Creole and
              French.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg leading-8 text-stone-700">
              We believe the Church extends beyond its walls, living out faith
              through service, love, and community.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <h2 className="mb-4 text-2xl font-bold">A Message from Our Pastor</h2>
          <p className="text-stone-700">
            Welcome to Tabernacle of Grace Church. Our prayer is that you
            experience the love of God and find a place where you belong.
          </p>

          <p className="mt-4 italic text-stone-700">- Rev. Jean Riccardo Rodney</p>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">Join Us This Sunday</h2>
        <p className="mb-6">
            We would love to welcome you in person or online.
        </p>
        <Link
          href="/services"
          className="inline-block rounded bg-black px-6 py-3 text-white"
        >
          View Service Times
        </Link>
      </section>
    </main>
  );
}
