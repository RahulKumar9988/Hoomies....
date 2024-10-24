import React from "react";
import { Link } from "react-router-dom";


// Plain React component using Tailwind CSS
export default function Signin() {
  return (
    <div className="flex justify-center items-center h-[90vh] overflow-hidden">
        <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-3xl shadow-green-600">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold">Create an account</h2>
                <p className="text-gray-600">
                Enter your email below to create your account
                </p>
            </div>  

            <div className="grid gap-4 mt-4">
                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center border text-white border-gray-300 px-4 py-2 rounded-2xl">
                    Github
                </button>
                <button className="flex items-center justify-center border text-white border-gray-300 px-4 py-2 rounded-2xl">

                    Google
                </button>
                </div>

                {/* Divider */}
                <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-600">Or continue with</span>
                </div>
                </div>

                <div className="grid gap-2">
                <label htmlFor="username" className="text-sm font-medium">
                    User Name
                </label>
                <input
                    id="Usernaem"
                    type="text"
                    placeholder="Rahul kumar"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                </div>

                {/* Email Input */}
                <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="rola@mail.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                </div>

                {/* Password Input */}
                <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                </div>
            </div>

            <div className="mt-6">
                <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-2xl">
                Create account
                </button>
            </div>

            <div className="flex gap-2 text-center justify-center"> 
                Don't have an account
                <Link to="/signin" className="font-semibold">:SignIn</Link>
            </div>
        </div>
    </div>
  );
}
