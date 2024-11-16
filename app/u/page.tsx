'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/u/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1523897056079-5553b57112d4"
          alt="Random nature image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="p-12 text-white">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="mt-4 text-lg">Login to access your dashboard</p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="mt-2 text-gray-600">Please enter your credentials</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
            >
              Sign in
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}