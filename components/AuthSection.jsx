'use client';
import { useState } from 'react';

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>
        <div className="mt-6 bg-white p-6 shadow-lg rounded-md w-full max-w-md mx-auto">
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-md" />
          <button className="bg-orange-500 px-4 py-2 text-white rounded-md hover:bg-orange-600 transition w-full">{isLogin ? 'Login' : 'Sign Up'}</button>
          <p className="mt-4 text-sm text-gray-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'New here? Sign up' : 'Already have an account? Log in'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
