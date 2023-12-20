"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session.status;

  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link className=" text-primary font-semibold text-2xl" href="/">
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-4 font-semibold">
        {status === "authenticated" && (
          <button
          onClick={() => signOut()}
            className="bg-primary text-white px-6 py-2 rounded-md"
          >
            Logout
          </button>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary text-white px-6 py-2 rounded-md"
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
