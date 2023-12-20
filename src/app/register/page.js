"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(false);
    setUserCreated(false);
    setError(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
        Register
      </h1>
      {userCreated && (
        <div className="mt-4 text-center">
          User created.
          <br /> Now you can{" "}
          <Link className=" underline underline-offset-2" href="/login">
            Login
          </Link>
        </div>
      )}
      {error && (
        <div className="mt-4 text-center">
          An error occurred while registering
          <br /> please try again later!{" "}
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          disabled={creatingUser}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          disabled={creatingUser}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Sign Up
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button type="button"
          className="flex gap-2 justify-center"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Login with google
          <Image src={"/google.png"} width={24} height={24} />
        </button>
        <div className=" text-right my-2 text-gray-400">
          Existing account?{" "}
          <Link
            className=" text-blue-600 underline underline-offset-2"
            href={"/login"}
          >
            Login
          </Link>
        </div>
      </form>
    </section>
  );
}
