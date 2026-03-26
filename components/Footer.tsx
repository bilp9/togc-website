import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Tabernacle of Grace
          </p>
          <h3 className="mb-3 text-3xl font-semibold">
            Tabernacle of Grace Church
          </h3>
          <p className="max-w-sm text-sm leading-7 text-stone-300">
            A welcoming Haitian-American congregation serving families through
            worship, prayer, discipleship, and community.
          </p>
          <p className="mt-4 text-sm text-stone-300">251 North Roosevelt Avenue</p>
          <p className="text-sm text-stone-300">Chandler, AZ 85226</p>
          <p className="mt-2 text-sm text-stone-200">(480) 242-0332</p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <Link href="/services" className="text-stone-300 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-stone-300 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-stone-300 hover:text-white">
                Give
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Service Times</h3>

          <div className="space-y-2 text-sm text-stone-300">
            <p>Sunday Worship: 12pm - 2pm</p>
            <p>Sunday School: 11am</p>
            <p>Prayer: Tuesday 7pm</p>
            <p>Bible Study: Wednesday 7pm</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Follow Us</h3>

          <ul className="space-y-3">
            <li>
              <a
                href="https://www.facebook.com/tabernaclechurch/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC4yQ3sPKSVhajQWTrkmH2uQ?view_as=subscriber"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tabernacle of Grace Church. All rights
        reserved.
      </div>
    </footer>
  );
}
