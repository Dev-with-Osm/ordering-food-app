"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false)

    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials',{email, password, callbackUrl:'/'})

        setLoginInProgress(false)
    }
    

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
        Login
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          disabled={loginInProgress}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          disabled={loginInProgress}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button type="button" onClick={() => signIn('google')} className="flex gap-2 justify-center">
          Login with google
          <Image src={"/google.png"} width={24} height={24} />
        </button>
      </form>
    </section>
  );
}
