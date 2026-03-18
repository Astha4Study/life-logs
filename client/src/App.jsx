import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(res => setUsers(res.data))
            .catch(err => {
                console.error("Error fetching users:", err);
                setError(err.message);
            });
    }, []);
    return (
        <div>
            <h1>User Manager</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {users.length === 0 && !error && <p>Tidak ada users</p>}
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App
