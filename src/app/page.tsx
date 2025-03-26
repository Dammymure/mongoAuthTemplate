import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
  
    <div className="flex flex-col items-center justify-center m-4">
      <h1>Hey, time to sign In</h1>
      <LoginForm />
    <p>
      Don't have an account? <Link href="/register">Register</Link>
    </p>
    </div>
  );
}
