"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="py-3 px-5 rounded-md heading-S border-[2px] border-[#b13939] bg-none text-[#b13939] hover:bg-[#d17b7b]"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
