import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import ExtraNavbar from "../components/ExtraNavbar";

function Login({ setStoredToken, storedToken }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      });

    setUsername("");

    setPassword("");
  };
  return (
    <>
      {storedToken ? (
        <AdminNavbar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}
      <div className="mt-20">
        <h1>Create new user</h1>
        <form>
          <label>
            Username:
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
