'use client'

import Image from 'next/image'

const logos = [
  { name: "Stemuli", src: "/images/home/hero/logo-1.png" },
  { name: "IFOREX", src: "/images/home/hero/logo-2.png" },
  { name: "CryptoWizard", src: "/images/home/hero/logo-3.png" },
  { name: "Imagine Learning", src: "/images/home/hero/logo-4.png" },
  { name: "KN", src: "/images/home/hero/logo-5.png" },
  { name: "Ulej", src: "/images/home/hero/logo-6.png" },
  { name: "Tribaja", src: "/images/home/hero/logo-7.png" },
];

const LogoScroll = () => {
  return (
    <>
      {/* Infinite Logo Scroll */}
      <div className="relative w-full py-6 overflow-hidden bg-[#D9D9D9]/22">
        <div className="flex animate-infinite-scroll">
          {/* First set of logos */}
          <div className="flex items-center gap-16 md:gap-20 lg:gap-24 min-w-max px-12">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 w-[120px] h-12 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="max-w-full max-h-full w-auto h-auto object-contain opacity-60 hover:opacity-100"
                  style={{ aspectRatio: "3/1" }}
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16 md:gap-20 lg:gap-24 min-w-max px-12">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 w-[120px] h-12 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={173}
                  height={40}
                  className="max-w-full max-h-full w-auto h-auto object-contain opacity-60 hover:opacity-100"
                  style={{ aspectRatio: "3/1" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}

export default LogoScroll