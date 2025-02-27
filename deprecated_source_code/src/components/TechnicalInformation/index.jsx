import React from 'react';
import './index.css';

const TechnicalInformation = () => {
    const techSkill = [
        "Javascript;",
        "HTML e CSS;",
        "React.js;",
        "Git/Github;",
        "Node + Express;",
        "Aulas especiais.",
    ];

    return (
        <>
            <div id="tech-information">
                <h2 className='title-tech-information'>Conteúdo Programático</h2>
                <ul>
                    {techSkill.map((tech, index) => (
                        <li key={index} className="tech-box">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TechnicalInformation;
