import { useState } from "react";
import axios from "axios";

function App() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/addUser",
                {
                    email,
                    username,
                    password
                }
            );

            alert(response.data.message);

            // Clear input fields
            setEmail("");
            setUsername("");
            setPassword("");

        } catch (error) {

            console.log(error);

            alert("Unable to create account.");

        }

    };

    return (

        <div className="container">

            <h1>Hi student, Welcome to XYZ University!</h1>

            <p>
                You can sign up to the platform to access all important notes &
                lectures.
            </p>

            <div className="card">

                <div className="row">
                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        placeholder="jane@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="row">

                    <label>Username</label>

                    <input
                        type="text"
                        value={username}
                        placeholder="Jane Doe"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>

                <div className="row">

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button onClick={createAccount}>
                    Create Account
                </button>

            </div>

        </div>

    );

}

export default App;