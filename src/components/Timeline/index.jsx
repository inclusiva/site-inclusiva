import React from 'react';
import './index.css';

const events = [
    { date: '6 a 14 de junho', description: 'Inscrição' },
    { date: '21 de junho', description: 'Convocação para entrevistas' },
    { date: '24 a 27 de junho', description: 'Entrevistas' },
    { date: '28 de junho', description: 'Divulgação dos selecionados' },
    { date: '1 a 5 de julho', description: 'Matrícula/Contrato' },
    { date: '1ª quinzena de julho', description: 'Início das aulas' },
];

const Timeline = () => {
    return (
        <div id="timeline-container">
            <h2 className='title-timeline'>Cronograma 2024</h2>
            <div>
                <div className="timeline-box">
                    {events.map((event, index) => (
                        <div className="timeline-event" key={index}>
                            <div className="timeline-description">{event.description}</div>
                            <div className="timeline-date">{event.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
