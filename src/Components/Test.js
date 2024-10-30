import React from 'react';
import './Test.css';

const Login = () => {
    return (
        <div className="login-container">
            <h1>Connexion</h1>
            <form>
                <label>Nom</label>
                <input type="text" name="nom" />
                <label>Prenom</label>
                <input type="text" name="prenom" />
                <label>Email</label>
                <input type="email" name="email" />
                <button type="submit">Connecter</button>
            </form>
         
        </div>
    );
};

export default Login;
