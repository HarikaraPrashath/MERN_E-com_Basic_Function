import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../../hook/useRegister';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register, isLoading, error } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("Form submitted with: ", { email, password, confirmPassword });
  await register(email, password,confirmPassword);
  };

  return (
   <div>
     <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-green-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg text-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg text-black focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 rounded-lg text-black focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white text-sm">Already have an account? 
            {/* Link to the Login page */}
            <Link to="/login" className="text-green-400 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Register;
