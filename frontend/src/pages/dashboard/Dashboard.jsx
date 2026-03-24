import { React } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <section style={{ maxWidth: 720, margin: "64px auto", padding: "0 16px" }}>
      <h1>Dashboard</h1>
      <p>Kamu sudah login dan berhasil masuk ke halaman dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
}
