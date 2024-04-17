import React from "react";

import './style.css'

const Login = () => {
    return (
        <div className="main">
            <section className="login-section">
                <img src="/src/assets/logo.svg" alt="logo" />
                <h2>Faça seu Login</h2>
                <div className="input-section">
                    <label htmlFor="Login">Login:</label>
                    <input type="text" id="Login" />
                </div>
                <div className="input-section">
                    <label htmlFor="Senha">Senha:</label>
                    <input type="pasword" id="Senha" />
                </div>
                <button className="Login-button">Entrar</button>

                <span>ou</span>

                <h2>Cadastre-se agora</h2>
                <button className="Cadastrar-button">Cadastrar</button>
            </section>
            <section className="imagem-section">
                <h2>Eleve suas habilidades para desbloquear o próximo nível de sucesso!</h2>
                <img src="/src/assets/imagegrande.svg" alt="imagem grande" />
            </section>

        </div>

    );
}

export default Login;