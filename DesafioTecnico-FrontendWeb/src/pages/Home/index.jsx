import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';


const Home = () =>{
    return(
        <main>
            <section className='informacoes-section'>
              <div className='skills-section'>
                <h2>nome</h2>
                <h2>Suas Skills</h2>
              </div>
            </section>
            <section>
              <div>
                <Link>
                <button>Adicionar</button>
                </Link>
              </div>
            </section>
        </main>
    )
}
export default Home;