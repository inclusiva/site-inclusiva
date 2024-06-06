import React from 'react';
import './index.css';

const events = [
    { date: '5 a 14 de junho', description: 'Inscrição' },
    { date: '17 a 21 de junho', description: 'Seleção e divulgação dos selecionados' },
    { date: '24 a 28 de junho', description: 'Matrícula/Contrato' },
    { date: '1 de julho', description: 'Início das aulas' },
];

const Timeline = () => {
    return (
        <div id="timeline-container">
            <h2 className='title-timeline'>Cronograma</h2>
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
