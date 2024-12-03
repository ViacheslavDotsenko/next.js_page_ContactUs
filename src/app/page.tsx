"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [joke, setJoke] = useState("");
  const [err, setErr] = useState<string>("");
  const [nameUser, setNameUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch((err) => {
        console.error(err);
        setErr("Error fetching joke.");
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/5", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        setNameUser(data.name);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        console.error(errorMessage);
        setErr(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <h4>{loading ? "Loading user data..." : nameUser}</h4>
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {joke ? `Joke: ${joke}` : `Oops! No joke found. ${err ? `Error: ${err}` : "Loading..."}`}
            </code>
          </li>
        </ul>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link className="rounded-full bg-foreground text-background h-10 sm:h-12 px-4" href="/contactUs">
            Go to Contact Us Page
          </Link>
          <Link className="rounded-full bg-foreground text-background h-10 sm:h-12 px-4" href="/docs">
            Read our docs
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Learn
        </a>
      </footer>
    </div>
  );
}
