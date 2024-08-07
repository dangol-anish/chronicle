import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Hello</p>
      <Link href="/signup">Sign Up</Link>
      <Link href="/login">Login</Link>
    </>
  );
}
