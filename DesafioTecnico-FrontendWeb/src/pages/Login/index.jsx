import React from "react";


import './style.css'
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi"
import { IoLockClosedOutline } from "react-icons/io5";


const Login = () => {

    return (
        <main>
            <section className="login-section">

                <img src="/src/assets/logoPrinc.svg" className="logo" />
                <h2 className="login">Faça seu Login</h2>

                <div className="input-section">
                    <input type="text" placeholder='Usuário' required />
                    <FiUser className="icon"/>
                </div>

                <div className="input-section">
                    <input type="pasword" placeholder='Senha' required />
                    <IoLockClosedOutline className="icon" />
                </div>

                <div className="LembrarSenha">
                    <label><input type="checkbox" />Lembrar senha</label>
                </div>

                <div className="todos-button">
                    <Link to={"/Home"}>
                        <button className="Login-button">Entrar</button>
                    </Link>
                    <div className="dividir">

                        <div className="divisor"></div>
                        <span>ou</span>
                        <div className="divisor"></div>

                    </div>

                    <h2 className="cadastro">Cadastre-se agora</h2>
                    <Link to={"/Cadastro"}>
                        <button className="Cadastrar-button">Cadastrar</button>
                    </Link>
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