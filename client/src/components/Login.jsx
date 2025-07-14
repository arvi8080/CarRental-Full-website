import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const { setUser } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!email || !password) {
        setError('Please enter email and password.');
        return;
      }
      // Simulate login: set user in context
      const userObj = { email };
      setUser(userObj);
      if (onLogin) onLogin(userObj);
    }, 900);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fbfd' }}>
      <div style={{ background: '#fff', color: '#6b7280', maxWidth: 384, width: '100%', margin: '1rem', padding: '1.5rem', borderRadius: 20, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.10)', fontSize: 15, textAlign: 'left', position: 'relative' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 24, textAlign: 'center', color: '#22223b' }}>Welcome back</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            style={{ width: '100%', background: 'transparent', border: '1px solid #d1d5db', outline: 'none', borderRadius: 999, padding: '0.7rem 1.2rem', margin: '0.75rem 0' }}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              style={{ width: '100%', background: 'transparent', border: '1px solid #d1d5db', outline: 'none', borderRadius: 999, padding: '0.7rem 1.2rem', marginTop: 4, marginBottom: 0 }}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(s => !s)}
              style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#6366f1', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div style={{ textAlign: 'right', padding: '1rem 0 0.5rem 0' }}>
            <a href="#" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: 15 }}>Forgot Password</a>
          </div>
          {error && <div style={{ color: '#e74c3c', background: '#fdeaea', borderRadius: 8, padding: '8px 0', textAlign: 'center', fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{error}</div>}
          <button
            type="submit"
            className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
            style={{ width: '100%', marginBottom: 12, background: '#6366f1', padding: '0.7rem 0', borderRadius: 999, color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'background 0.2s' }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 18 }}>
          Don’t have an account?{' '}
          <a href="#" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>Signup</a>
        </p>
        <button type="button" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginTop: 20, background: '#000', padding: '0.7rem 0', borderRadius: 999, color: '#fff', fontWeight: 500, fontSize: 16, border: 'none', cursor: 'pointer' }}>
          <img style={{ height: 18, width: 18 }} src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo" />
          Log in with Apple
        </button>
        <button type="button" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', margin: '14px 0 0 0', background: '#fff', border: '1px solid #d1d5db', padding: '0.7rem 0', borderRadius: 999, color: '#22223b', fontWeight: 500, fontSize: 16, cursor: 'pointer' }}>
          <img style={{ height: 18, width: 18 }} src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
          Log in with Google
        </button>
      </div>
    </div>
  );
}

export default Login