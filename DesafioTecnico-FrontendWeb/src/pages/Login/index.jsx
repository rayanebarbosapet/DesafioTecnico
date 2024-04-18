import React from "react";

import './style.css'

const Login = () => {
    return (
        <main>
            <section className="login-section">
                <img src="/src/assets/logoPrinc.svg" className="logo" />
                <h2 className="login">Faça seu Login</h2>
                <div className="input-section">
                    <label htmlFor="Login">Login:</label>
                    <input type="text" id="Login" />
                </div>
                <div className="input-section">
                    <label htmlFor="Senha">Senha:</label>
                    <input type="pasword" id="Senha" />
                </div>
                <div className="todos-button">
                    <button className="Login-button">Entrar</button>
                    <div className="dividir">
                        <div className="divisor"></div>
                        <span>ou</span>
                        <div className="divisor"></div>
                    </div>

                    <h2 className="cadastro">Cadastre-se agora</h2>

                    <button className="Cadastrar-button">Cadastrar</button>
                </div>

            </section>
            <section className="imagem-section">
                <h2>Eleve suas habilidades para desbloquear o próximo nível de sucesso!</h2>
                <img src="/src/assets/3783951.webp" className="imagemGrande" />

            </section>

        </main>

    );
}

export default Login;