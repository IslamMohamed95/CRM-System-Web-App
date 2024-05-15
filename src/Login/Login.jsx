import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [effect, setEffect] = useState(false);
  const [reset, setReset] = useState(false);

  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  return (
    <section id="login">
      <div className="Form">
        <div className="loginF">
          <form className={effect ? "hideLoginForm" : ""}>
            <h2>
              Sign <span>In</span>
            </h2>
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>password</label>
            <input type="text" placeholder="Password" />
            <p
              id="passwordReset"
              onClick={() => {
                setReset(true);
                setEffect(true);
              }}
            >
              Forgot the password?
            </p>
            <button>SIGN IN</button>
          </form>
        </div>
        <div className="registerF">
          <form className={effect ? "showRegisterForm" : ""}>
            <h2>
              Sign <span>Up</span>
            </h2>
            <label>Name</label>
            <input type="text" placeholder="Name" />
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>password</label>
            <input type="text" placeholder="Password" />

            <button>SIGN UP</button>
          </form>
        </div>
        <div
          className={
            effect
              ? reset
                ? "effect showFullWidth"
                : "effect animation"
              : "effect"
          }
        >
          <div
            className={
              effect ? "signUpGreeting hideSignUpGreeting" : "signUpGreeting"
            }
          >
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button onClick={() => setEffect(!effect)}>Sign up</button>
          </div>
          <div
            className={
              effect
                ? reset
                  ? "signInGreeting"
                  : "signInGreeting showSignInGreeting"
                : "signInGreeting"
            }
          >
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button onClick={() => setEffect(!effect)}>Sign in</button>
          </div>
          <div id="resetFrom" className={reset ? "showResetFrom" : ""}>
            <h1>
              Reset <span>Password</span>
            </h1>
            <p>No worries we got you !</p>
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <p
              className="cancelReset"
              onClick={() => {
                setReset(false);
                setEffect(false);
              }}
            >
              Changed your mind?
            </p>
            <button>RESET</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
