"use client";

import { usePathname } from "next/navigation";

export default function SecretPage() {
  // Use usePathname to get the full URL path
  const pathname = usePathname();
  const secretParam = pathname.split("/").pop();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-5xl font-bold">Secret Page</h1>
      <p className="text-xl">
        Secret: <span className="font-mono">{secretParam}</span>
      </p>
    </div>
  );
}
