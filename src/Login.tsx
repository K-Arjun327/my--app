import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Status states
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  // Password strength logic
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: '', color: '#334155' };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 2) return { score: 33, label: 'Weak', color: '#ef4444' };
    if (score <= 4) return { score: 66, label: 'Medium', color: '#f59e0b' };
    return { score: 100, label: 'Strong', color: '#10b981' };
  };

  const strength = getPasswordStrength(password);

  const handleQuickDemo = () => {
    setIsSignUp(false);
    setIsForgotPassword(false);
    setEmail('alex.dev@example.com');
    setPassword('SecurePass123!');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Forgot password flow
    if (isForgotPassword) {
      if (!email) {
        setError('Please enter your registered email address.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResetSent(true);
      }, 1200);
      return;
    }

    // Sign Up validation
    if (isSignUp) {
      if (!name.trim()) {
        setError('Please enter your full name.');
        return;
      }
    }

    // Common Email validation
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password validation
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate Auth API Request
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    }, 1400);
  };

  return (
    <div className="login-wrapper">
      {/* Animated Glowing Background Lights */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="grid-overlay"></div>

      <div className="login-container">
        {/* Form Card */}
        <div className="form-card">
          {!success && !resetSent ? (
            <>
              {/* Header with Mode Switcher */}
              <div className="card-top">
                {!isForgotPassword && (
                  <div className="tab-switcher">
                    <button
                      type="button"
                      className={`tab-btn ${!isSignUp ? 'active' : ''}`}
                      onClick={() => {
                        setIsSignUp(false);
                        setError('');
                      }}
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      className={`tab-btn ${isSignUp ? 'active' : ''}`}
                      onClick={() => {
                        setIsSignUp(true);
                        setError('');
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                )}

                <div className="form-header">
                  <h2>
                    {isForgotPassword
                      ? 'Reset Password'
                      : isSignUp
                      ? 'Create Account'
                      : 'Welcome Back'}
                  </h2>
                  <p>
                    {isForgotPassword
                      ? 'Enter your email to receive recovery instructions'
                      : isSignUp
                      ? 'Join thousands of developers today'
                      : 'Enter your credentials to access your account'}
                  </p>
                </div>

                {!isForgotPassword && !isSignUp && (
                  <button
                    type="button"
                    className="demo-fill-btn"
                    onClick={handleQuickDemo}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    Quick Fill Demo Credentials
                  </button>
                )}
              </div>

              {/* Main Form */}
              <form onSubmit={handleSubmit} noValidate className="auth-form">
                {isSignUp && (
                  <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <div className="input-field-wrapper">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        id="name"
                        placeholder="Alex Morgan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>
                )}

                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-field-wrapper">
                    <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <input
                      type="email"
                      id="email"
                      placeholder="alex.dev@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {!isForgotPassword && (
                  <div className="input-group">
                    <div className="label-row">
                      <label htmlFor="password">Password</label>
                      {!isSignUp && (
                        <button
                          type="button"
                          className="forgot-link-btn"
                          onClick={() => {
                            setIsForgotPassword(true);
                            setError('');
                          }}
                        >
                          Forgot password?
                        </button>
                      )}
                    </div>
                    <div className="input-field-wrapper">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        autoComplete={isSignUp ? 'new-password' : 'current-password'}
                      />
                      <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                        aria-label="Toggle password view"
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Dynamic Strength Meter */}
                    {password && (
                      <div className="strength-meter">
                        <div className="strength-bar-bg">
                          <div
                            className="strength-bar-fill"
                            style={{
                              width: `${strength.score}%`,
                              backgroundColor: strength.color,
                            }}
                          ></div>
                        </div>
                        <span className="strength-label" style={{ color: strength.color }}>
                          Password Strength: {strength.label}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {isSignUp && (
                  <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-field-wrapper">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        placeholder="••••••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>
                )}

                {!isForgotPassword && !isSignUp && (
                  <div className="remember-row">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disabled={loading}
                      />
                      <span className="checkbox-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Keep me signed in for 30 days
                    </label>
                  </div>
                )}

                {/* Error Banner */}
                {error && (
                  <div className="error-alert">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (
                    <div className="btn-spinner-wrapper">
                      <span className="btn-spinner"></span>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <span>
                      {isForgotPassword
                        ? 'Send Recovery Link'
                        : isSignUp
                        ? 'Create Free Account'
                        : 'Sign In to Workspace'}
                    </span>
                  )}
                </button>

                {isForgotPassword && (
                  <button
                    type="button"
                    className="back-to-login"
                    onClick={() => {
                      setIsForgotPassword(false);
                      setError('');
                    }}
                  >
                    ← Back to Sign In
                  </button>
                )}
              </form>

              {/* Social Login Options */}
              {!isForgotPassword && (
                <>
                  <div className="social-divider">
                    <span className="divider-line"></span>
                    <span className="divider-text">Or continue with</span>
                    <span className="divider-line"></span>
                  </div>

                  <div className="social-grid">
                    <button type="button" className="social-btn" disabled={loading}>
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                      </svg>
                      Google
                    </button>

                    <button type="button" className="social-btn" disabled={loading}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </button>
                  </div>
                </>
              )}
            </>
          ) : resetSent ? (
            /* Reset Link Sent Screen */
            <div className="status-card-content">
              <div className="status-icon-box success-glow">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Recovery Email Sent!</h3>
              <p>We have sent password reset instructions to <strong>{email}</strong>.</p>
              <button
                type="button"
                className="submit-btn"
                onClick={() => {
                  setResetSent(false);
                  setIsForgotPassword(false);
                }}
              >
                Return to Sign In
              </button>
            </div>
          ) : (
            /* Successful Sign In Screen */
            <div className="status-card-content">
              <div className="status-icon-box success-glow">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Authentication Successful</h3>
              <p>Welcome back! Redirecting you to your Home dashboard...</p>
              <div className="redirect-loader">
                <div className="loader-bar-fill"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
