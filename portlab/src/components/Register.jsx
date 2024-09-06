import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (username && password) {
            alert('Rejestracja zakończona sukcesem!');

            navigate('/');
        } else {
            alert('Wypełnij wszystkie pola');
        }
    };

    return (
        <div>
            <h2>Zarejestruj się</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Zarejestruj</button>
            </form>
        </div>
    );
};

export default Register;








{/*const Register = () => {

    return (
        <h2>Register</h2>
    <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Zarejestruj</button>
    </form>
</div>
    );
}

export default Register;*/}