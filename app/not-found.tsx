import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-6xl">Not Found</h1>
      <p>Oops! This page doesn't exist.</p>
      <Image src={"/notfoud.png"} alt="Not found" width={300} height={300} />
      <Link
        className="bg-blue-500 text-white px-5 py-2 rounded-2xl font-bold"
        href="/"
      >
        Go home
      </Link>
    </div>
  );
}
