import React from 'react';
import { Link } from "react-router-dom";

import { BiUser } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";
import "./style.css"

const Cadastro = () => {
    return (
        <main>

            <section className='cadastro-section'>
                <img src="/src/assets/logoPrinc.svg" className='logo' />
                <h2 className='cadastro'>Faça seu cadastro</h2>

                <div className='input-section'>
                    <input type='text' placeholder='Usuário' required />
                    <BiUser className='icon' />
                </div>

                <div className='input-section'>
                    <input type='password' placeholder='Senha' required />
                    <IoLockClosedOutline className='icon' />
                </div>
                <div className='input-section'>
                    <input type='password' placeholder='Confirme sua Senha' required />
                    <IoLockClosedOutline className='icon' />
                </div>
                <div className="Cadastrar-button">
                <Link to={"/Home"}>
                <button className='cadastrar'>Cadastrar-se</button>
                </Link>
                </div>
            </section>
            <section className='imagem-section'>
                <h2>Eleve suas habilidades para desbloquear o próximo nível de sucesso!</h2>
                <img src="/src/assets/3783951.webp" className='imagemGrande' />
            </section>
        </main>
    )
}
export default Cadastro;