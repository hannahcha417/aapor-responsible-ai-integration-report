import { useState } from "react";
import "./PasswordGate.css";

const PASSWORD_HASH =
  "033c2b98eb819bf7bb0ceed253639c7cd361da46265d346ac91f266bbe2512ce";

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function PasswordGate({ children }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("authenticated") === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hash = await sha256(password);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem("authenticated", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (authenticated) return children;

  return (
    <div className="password-gate">
      <form onSubmit={handleSubmit} className="password-form">
        <p>This content is password protected.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Enter password"
          autoFocus
        />
        <button type="submit">Submit</button>
        {error && <p className="password-error">Incorrect password.</p>}
      </form>
    </div>
  );
}
