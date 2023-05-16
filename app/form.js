"use client";

import { action } from "./actions";

export function Form() {
  return (
    <form action={action}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}
