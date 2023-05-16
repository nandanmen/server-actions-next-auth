"use client";

import { SessionProvider } from "next-auth/react";

export function SessionContext({ session, children }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
