import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative grid place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative "
          src="/creativeBotLogo.png"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />
        {/* <a
          className="px-4 py-2 text-2xl font-bold mt-7 hover:bg-black bg-cyan-600 rounded-full "
          href="https://wa.me/6281330129266?text=Hai%20Creative%20Bot%2C%20saya%20ingin%20bertanya"
          target="_blank"
        >
          Hubungi Kami
        </a> */}
      </div>
    </main>
  );
}
