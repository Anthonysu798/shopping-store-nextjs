import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    let errors = {};
  
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    if (!confirmPassword) errors.confirmPassword = 'Confirm Password is required';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
  
    setError(errors);
  
    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, confirmPassword }), // Include confirmPassword
        });
  
        const data = await res.json();
  
        if (res.ok) {
          router.push('/login');
        } else {
          setError({ form: data.error });
        }
      } catch (err) {
        setError({ form: 'An unexpected error occurred. Please try again.' });
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (isSubmitted) {
      setError((prev) => ({ ...prev, username: e.target.value ? '' : 'Username is required' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (isSubmitted) {
      setError((prev) => ({ ...prev, password: e.target.value ? '' : 'Password is required' }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (isSubmitted) {
      setError((prev) => ({
        ...prev,
        confirmPassword: e.target.value
          ? e.target.value !== password
            ? 'Passwords do not match'
            : ''
          : 'Confirm Password is required',
      }));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-gray-800 animate-slideUp">Register</h1>
        {error.form && <p className="text-sm text-red-600 animate-slideUp delay-100">{error.form}</p>}
        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
          <div className="animate-slideUp delay-200">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {error.username && <p className="text-sm text-red-600">{error.username}</p>}
          </div>
          <div className="animate-slideUp delay-300">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {error.password && <p className="text-sm text-red-600">{error.password}</p>}
          </div>
          <div className="animate-slideUp delay-400">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {error.confirmPassword && <p className="text-sm text-red-600">{error.confirmPassword}</p>}
          </div>
          <div className="animate-slideUp delay-500">
            <button
              type="submit"
              className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 animate-slideUp delay-600">
          Already have an account? <Link href="/login"><a className="text-blue-500 hover:text-blue-700">Login</a></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
