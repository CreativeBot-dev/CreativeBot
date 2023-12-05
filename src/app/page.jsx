import Image from "next/image";

export default function Home() {
  function contactUs() {}
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl mt-5 font-semibold text-white ">
        Coming Soon !!
      </h1>

      <Image
        className="relative hover:animate-pulse"
        src="/creativeBotLogo.png"
        alt="Next.js Logo"
        width={300}
        height={37}
        priority
      />

      <h1 className="text-7xl font-bold text-white">CathaBot</h1>
      <a
        href="https://wa.me/6281330129266?text=Hai%20Creative%20Bot%2C%20saya%20ingin%20bertanya"
        target="_blank"
        className="mt-20 px-10 py-3 font-semibold text-2xl rounded-full text-black bg-[#42d7f5] hover:bg-white hover:scale-110 duration-500 shadow-xl z-50"
      >
        Contact Us
      </a>
    </main>
  );
}
