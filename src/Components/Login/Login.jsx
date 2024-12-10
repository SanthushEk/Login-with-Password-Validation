import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Regular expression for password complexity
  const passwordComplexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{}|;:',.<>?/~]).{8,}$/;

  // Regular expression to check if the password contains the username
  const passwordContainsUsername = (password, username) => {
    return password.toLowerCase().includes(username.toLowerCase());
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate if the password contains the username
    if (passwordContainsUsername(password, username)) {
      setErrorMessage('Password cannot contain the username.');
      return;
    }

    // Validate password complexity
    if (!passwordComplexityRegex.test(password)) {
      setErrorMessage(
        'Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character.'
      );
      return;
    }

    // If everything is valid, log success message (you can replace this with actual login logic)
    alert('Login successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
