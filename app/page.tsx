import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/login"
      className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    >
      <span>Log in</span>
    </Link>
  );
}