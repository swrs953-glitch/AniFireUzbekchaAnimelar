export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-800">
        <h1 className="text-4xl font-bold text-red-500">
          ANIME STORE
        </h1>

        <div className="flex gap-8 text-lg">
          <a href="#">Home</a>
          <a href="#">Popular</a>
          <a href="#">Movies</a>

          <a
            href="https://instagram.com/strangeeet"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            Instagram
          </a>

          <a
            href="https://t.me/strange_frozen"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            Telegram
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-black to-red-900 opacity-40 blur-3xl"></div>

        <h1 className="text-7xl font-extrabold z-10 bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text">
          Watch Legendary Anime
        </h1>

        <p className="text-zinc-300 text-2xl mt-6 z-10">
          Stream Unlimited Anime In Ultra HD
        </p>

        <div className="mt-10 w-full max-w-xl z-10">
          <input
            type="text"
            placeholder="Search Anime..."
            className="w-full px-6 py-4 rounded-full bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-red-500 transition"
          />
        </div>
      </section>

      {/* CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20">

        {/* Naruto */}
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition duration-500 shadow-2xl border border-zinc-800">
          <img
            src="https://picsum.photos/500/700"
            alt="Naruto"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h2 className="text-3xl font-bold">Naruto</h2>

            <p className="text-yellow-400 mt-2">
              9.8 / 10
            </p>

            <button className="mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-full hover:scale-110 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>

        {/* One Piece */}
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition duration-500 shadow-2xl border border-zinc-800">
          <img
            src="https://picsum.photos/501/700"
            alt="One Piece"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h2 className="text-3xl font-bold">One Piece</h2>

            <p className="text-yellow-400 mt-2">
              9.7 / 10
            </p>

            <button className="mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-full hover:scale-110 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>

        {/* Attack on Titan */}
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition duration-500 shadow-2xl border border-zinc-800">
          <img
            src="https://picsum.photos/502/700"
            alt="Attack on Titan"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h2 className="text-3xl font-bold">
              Attack on Titan
            </h2>

            <p className="text-yellow-400 mt-2">
              9.9 / 10
            </p>

            <button className="mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-full hover:scale-110 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>

        {/* Eminence */}
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition duration-500 shadow-2xl border border-zinc-800">
          <img
            src="https://picsum.photos/503/700"
            alt="The Eminence In Shadow"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h2 className="text-3xl font-bold">
              The Eminence In Shadow
            </h2>

            <p className="text-yellow-400 mt-2">
              9.6 / 10
            </p>

            <button className="mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-full hover:scale-110 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>

        {/* Jujutsu */}
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition duration-500 shadow-2xl border border-zinc-800">
          <img
            src="/images/maxresdefault.jpg"
            alt="Jujutsu Kaisen"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h2 className="text-3xl font-bold">
              Jujutsu Kaisen
            </h2>

            <p className="text-yellow-400 mt-2">
              9.8 / 10
            </p>

            <a
              href="/watch"
              className="inline-block mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-full hover:scale-110 transition duration-300"
            >
              Watch Now
            </a>
          </div>
        </div>

        {/* Darling */}
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition duration-500 shadow-2xl border border-zinc-800">
          <img
            src="https://picsum.photos/505/700"
            alt="Darling In The Franxx"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h2 className="text-3xl font-bold">
              Darling In The Franxx
            </h2>

            <p className="text-yellow-400 mt-2">
              9.5 / 10
            </p>

            <button className="mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-full hover:scale-110 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-400">
        <h2 className="text-2xl font-bold text-red-500">
          ANIME STORE
        </h2>

        <p className="mt-3">
          The Ultimate Anime Streaming Experience
        </p>

        <p className="mt-2 text-sm">
          © 2026 Anime Store. All rights reserved.
        </p>
      </footer>

    </main>
  );
}