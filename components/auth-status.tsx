import { unstable_getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await unstable_getServerSession();
  return (
    <div>
      {session && (
        <p className="body-M text-[#737373]">
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  );
}
