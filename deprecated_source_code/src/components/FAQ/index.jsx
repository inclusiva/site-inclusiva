import React, { useState } from 'react';
import faqSections from './faqData.json';
import './index.css';

const FAQ = () => {
    return (
        <div>
            <div id="faq-container">
                <h2 className='title-faq'>FAQ</h2>
                {faqSections.map((section, sectionIndex) =>
                    section.questions.map((question, questionIndex) => (
                        <FAQItem key={`${sectionIndex}-${questionIndex}`} question={question.q} answer={question.a} />
                    ))
                )}
            </div>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
                <div className="faq-question">{question}</div>
                <div className="faq-toggle">{isOpen ? '-' : '+'}</div>
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                {answer}
            </div>
        </div>
    );
};

export default FAQ;
