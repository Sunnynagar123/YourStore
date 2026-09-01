import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="box">
      <h2>Q3. Login Toggle</h2>

      {isLoggedIn ? (
        <div>
          <h3>Welcome! You are logged in.</h3>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginToggle;