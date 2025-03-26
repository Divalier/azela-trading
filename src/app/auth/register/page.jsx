"use client";
import { useState } from "react";
import { registerUser } from "../../../../firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      await registerUser(email, password);
      router.push("/dashboard/user");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister} className="w-full max-w-md bg-white p-6 rounded shadow-md">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded my-2 focus:ring-2 focus:ring-green-400"
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded my-2 focus:ring-2 focus:ring-green-400"
            required 
          />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-2 w-full rounded">
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
