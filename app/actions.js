"use server";

import { getServerSession } from "next-auth";

export async function action(data) {
  const session = await getServerSession();
  console.log(session);
  console.log(data);
}
