"use client";
import { useState } from "react";
import { registerUser } from "../../../../firebase/auth";
import { useRouter } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      router.push("/dashboard/user");
    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <> <div className="flex relative"><Navbar/></div>
    
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form
          onSubmit={handleRegister}
          className="w-1/3 bg-white p-6 rounded shadow-md"
        >
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded my-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded my-2"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 w-full rounded"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
      <div><Footer/></div>
    </>
  );
}
