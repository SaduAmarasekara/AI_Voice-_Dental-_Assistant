import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignedIn, SignUpButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
