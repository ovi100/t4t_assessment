import './Login.css';
import art from '../images/art.svg';
import logo from '../images/logo.png';
import facebook_icon from '../images/facebook_logo.svg';
import google_icon from '../images/google_logo.svg';

const Login = () => {
  return (
    <div className="login-panel">
      <div className="image-panel">
        <img src={art} alt="Art" />
      </div>
      <div className="form-panel">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="text">Explore The Best Tours... Hurry up!!</div>
          <div className="input-field">
            <input className="input-box" type="text" placeholder="Email Address" />
            <input className="input-box" type="password" placeholder="Password" />
            <div className="reset-password">
              <a href="/">Forgot Password?</a>
            </div>
            <div className="submit-button">
              <button type="submit">log in</button>
            </div>
          </div>
          <div className="form-divider">
            <span>or</span>
          </div>
          <div className="social-icon">
            <a href="/">
              <img src={facebook_icon} alt="Icon" />
            </a>
            <a href="/">
              <img src={google_icon} alt="Icon" />
            </a>
          </div>
          <div className="no-account">
            <a href="/">Don't have an account?  <span>Sign Up</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;