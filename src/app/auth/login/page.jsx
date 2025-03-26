"use client";
import { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../../../../firebase/auth";
import { useRouter } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer"

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      router.push("/dashboard/user");
    } catch (error) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div> <div> <Navbar/></div>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-1/3 bg-white p-6 rounded shadow-md">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded my-2" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded my-2" required />
        <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">Login</button>
      </form>
      <button onClick={signInWithGoogle} className="mt-4 p-2 bg-red-500 text-white rounded">Login with Google</button>
      <p className="mt-4">Don't have an account? <a href="/auth/register" className="text-blue-500">Register</a></p>
    </div><><Footer/></>
    </div>
  );
}
