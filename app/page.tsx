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
      <section className="relative flex h-[85vh] items-center justify-center px-6 text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/church.jpeg"
            alt="Church background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl px-6">
          <Image
            src="/logo.avif"
            alt="Logo"
            width={96}
            height={96}
            className="mx-auto mb-6 h-24 w-24 object-contain"
          />

          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            Tabernacle of Grace Church
          </h1>

          <p className="mb-4 text-xl text-gray-200">
            A welcoming Haitian-American congregation
          </p>

          <p className="mb-8 text-base text-gray-300">
            Byenvini! Nou kontan ou la. Welcome! We are glad you are here.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/services"
              className="rounded-md bg-white px-6 py-3 text-black"
            >
              View Services
            </Link>

            <Link
              href="/donate"
              className="rounded-md bg-yellow-500 px-6 py-3 text-black"
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
