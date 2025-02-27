import React from 'react';
import './index.css';


const Breadcrumb = () => {

    const Separator = () => <span class="separator"> / </span>;

    return (
        <nav className="breadcrumb">
            <a href="#about">O Programa</a>
            <Separator />
            <a href="#tech-information">Conteúdo Programático</a>
            <Separator />
            <a href="#requirements">Pré-requisitos</a>
            <Separator />
            <a href="#timeline-container">Cronograma</a>
            <Separator />
            <a href="#faq-container">FAQ</a>
            <Separator />
            <a href="#contact">Contato</a>
        </nav>
    );
};

export default Breadcrumb;
