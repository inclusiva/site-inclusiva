import React from 'react';
import './index.css';

const requisitos = [
    "Ter 18 anos ou mais",
    "Pessoas com deficiência motora ou mobilidade reduzida*(com laudo médico que ateste a deficiência)",
    "Minímo ter Ensino Médio concluído até o final de 2024",
    "Disponibilidade de horário",
    "Possuir acesso à internet",
    "Ter computador para acessar as aulas",
    "Vontade de aprender",
    "Ter interesse por tecnologia da informação",
    "Ser residente em qualquer parte do Brasil",
];

const Requirements = () => {
    return (
        <div id="requirements">
            <h2 className='title-requirements'>Pré-requisitos</h2>
            <ul>
                {requisitos.map((requisito, index) => (
                    <li key={index} className="requisito-box">
                        {requisito};
                    </li>
                ))}
                <p className="obs">*Necessário apresentação de laudo e enquadramento na lei de cotas 8213/91.</p>
            </ul>
        </div>
    );
}

export default Requirements;
