import Image from "next/image";

export default function Home() {
  function contactUs() {}
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative grid place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-6xl mt-5 font-medium">Coming Soon !!</h1>

        <Image
          className="relative "
          src="/creativeBotLogo.png"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />

        <h1 className="text-7xl font-bold">CathaBot</h1>
        <a
          href="https://wa.me/6281330129266?text=Hai%20Creative%20Bot%2C%20saya%20ingin%20bertanya"
          target="blank"
          className="mt-20 px-10 py-3 font-semibold text-2xl rounded-full text-black bg-[#42d7f5] hover:scale-110"
        >
          Contact Us
        </a>
        {/* <a
          className="text-[10px] text-white"
          href="https://wa.me/6281330129266?text=Hai%20Creative%20Bot%2C%20saya%20ingin%20bertanya"
          target="blank"
        >
          Contact Us
        </a> */}
      </div>
    </main>
  );
}
