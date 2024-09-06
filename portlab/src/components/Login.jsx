import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'user' && password === 'password') {

            navigate('/');
        } else {
            alert('Zły login lub hasło');
        }
    };

    return (
        <div>
            <h2>Zaloguj się</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Nazwa użytkownika:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Hasło:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    );
};

export default Login;




{/*const Login = () = {



    return (
<div>
    <h2>Login</h2>
    <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Zaloguj</button>
    </form>
</div>
    );
}

export default Login; */}