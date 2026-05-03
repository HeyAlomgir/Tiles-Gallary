"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      {/* একটি বড় এনিমেশন বা আইকন */}
      <h1 className="text-9xl font-extrabold text-primary animate-bounce">
        404
      </h1>

      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <h2 className="text-2xl font-semibold mt-8 text-gray-800">
        Oops! Youre on the wrong track.
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        The tiles or page you are looking for is not here. Perhaps the link is broken or the page has been removed.
      </p>


      <div className="mt-8">
        <Link
          href="/"
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-white font-bold uppercase tracking-widest">
            Home-এ ফিরে যান
          </span>
        </Link>
      </div>
    </div>
  );
}
