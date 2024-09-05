'use client';

import * as Frigade from "@frigade/react"

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (<Frigade.Provider
    apiKey="api_public_GY6O5JS99XTL2HAXU0D6OQHYQ7I706P5I9C9I7CEZFNFUFRARD2DVDSMFW3YT3SV">
    {children}
  </Frigade.Provider>)
}
