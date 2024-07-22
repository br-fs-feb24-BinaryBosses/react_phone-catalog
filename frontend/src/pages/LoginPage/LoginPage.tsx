import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLoginPage from './StyledLoginPage.ts';
import { authUser, createUser, getActiveCart, getAllFavorites } from '../../api/getAll.ts';
import { useAppDispatch } from '../../context/hooks.ts';
import { setUserDataSession } from '../../context/userContext/userSlice.ts';
import { toast } from 'react-toastify';
import StyledToastContainer from '../../components/ToastContainer/StyledToastContainer.ts';
import { updateAllFavourites } from '../../context/favoriteContext/favouriteSlice.ts';
import { updateAllProducs } from '../../context/cartContext/cartSlice.ts';

function LoginPage(): React.ReactNode {
  const [name, setName] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function togglePasswordVisibility() {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrorMessage('');

    authUser({ email, password })
      .then(data => {
        dispatch(setUserDataSession(data));
        getAllFavorites(data.tokenSession).then(data => {
          dispatch(updateAllFavourites(data));
          dispatch(updateAllProducs({ orderItemsArray: [] }));
          setIsCreated(false);
        });

        getActiveCart(data.tokenSession).then(data => {
          if (!data) {
            return [];
          }
          dispatch(updateAllProducs({ orderItemsArray: data }));
        });
        navigate('/home');
      })
      .then(() => {})
      .catch(() => {
        toast.error('User not found', {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: false,
        });
      });
  }

  async function handleCreateAccount() {
    if (!isCreated) {
      setIsCreated(true);
      return;
    }
    createUser({ name, email, password }).then(() => {
      authUser({ email, password }).then(data => {
        dispatch(setUserDataSession(data));
        getAllFavorites(data.tokenSession).then(data => {
          dispatch(updateAllFavourites(data));
          dispatch(updateAllProducs({ orderItemsArray: [] }));
          setIsCreated(false);
        });

        getActiveCart(data.tokenSession).then(data => {
          if (!data) {
            return [];
          }
          dispatch(updateAllProducs({ orderItemsArray: data }));
        });
        navigate('/home');
      });
    });

    if (isCreated) {
      toast.success('Account created successfully!', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: false,
      });
    } else {
      toast.error('Account creation failed', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: false,
      });
    }
  }
  return (
    <StyledLoginPage className="login">
      <StyledToastContainer />
      <div className="background">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <h1 className="login-title">Nice gadgets login</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form login-group">
            {isCreated && (
              <label className="form-label" htmlFor="username">
                Nome:
                <div className="password-login-container">
                  <input
                    type="text"
                    id="username"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name here"
                    required
                  />
                </div>
              </label>
            )}
            <label className="form-label" htmlFor="username">
              Email:
              <div className="password-login-container">
                <input
                  type="email"
                  id="username"
                  value={email}
                  onChange={handleUsernameChange}
                  placeholder="Enter your email here"
                  required
                />
              </div>
            </label>
          </div>
          <div className="form password-group">
            <label className="form-label" htmlFor="password">
              Password:
              <div className="password-group-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password here"
                  required
                />
                <button
                  aria-label="password-toggle"
                  type="button"
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </label>
          </div>
          <div className="form-buttons">
            <button className="form-btn" type="submit">
              Login
            </button>
            <span>or</span>
            <button className="form-btn" type="button" onClick={handleCreateAccount}>
              Create account
            </button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;
