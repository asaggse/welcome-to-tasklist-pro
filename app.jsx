import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to TaskList Pro</h1>
      
      <p className="text-lg mb-4">Enter your email address to get started</p>
      
      <input
        type="email"
        placeholder="name@yourcompany.com"
        className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      
      <button className="w-full max-w-md px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Continue with Email
      </button>
      
      <p className="text-gray-500 mb-4">OR</p>
      
      <button className="w-full max-w-md px-4 py-2 mb-4 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-100">
        Continue with Google
      </button>
      
      <button className="w-full max-w-md px-4 py-2 mb-8 bg-black text-white rounded-lg hover:bg-gray-900">
        Continue with Apple
      </button>
      
      <p className="text-gray-700">
        Already have an account?{' '}
        <a href="#" className="text-blue-500 hover:underline">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpForm;