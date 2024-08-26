"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Events } from "./components/Events";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col mt-4">
        <img
          src="logo.jpg"
          height={60}
          className="h-14 place-self-center mb-4"
        />
        <div className="max-w-screen-md place-self-center sm:w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4">
          <Events />
        </div>
      </main>
    </QueryClientProvider>
  );
}
