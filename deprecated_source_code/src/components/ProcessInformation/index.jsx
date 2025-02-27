import React from 'react';
import './index.css';
import ConhecimentoPrevio from '../../assets2/icone-conhecimento-previo.png';
import NumeroVagas from '../../assets2/icone-vagas.png';
import PossibilidadeContratacao from '../../assets2/possibilidade-contratacao.png';
import Duracao from '../../assets2/icone-6-meses.png';
import AjudaCusto from '../../assets2/icone-ajuda-custo.png';
import Certificado from '../../assets2/icone-certificado.png';

const ProcessInformation = () => {

    return (
        <div class="container">
            <div class="information-item">
                <img src={Duracao} alt="Ícone de duração" />
                <span>6 meses de duração</span>
            </div>
            <div class="information-item">
                <img src={AjudaCusto} alt="Ícone de ajuda de custo" />
                <span class="text-break">Ajuda de custo mensal no valor de R$750,00*</span>
            </div>
            <div class="information-item">
                <img src={Certificado} alt="Ícone de certificado" />
                <span>Certificado ao final do curso</span>
            </div>

            <div class="information-item">
                <img src={NumeroVagas} alt="Ícone de número de vagas" />
                <span>25 vagas disponíveis</span>
            </div>
            <div class="information-item">
                <img src={PossibilidadeContratacao} alt="Ícone de possibilidade de contratação" />
                <span>Possibilidade de contratação</span>
            </div>
            <div class="information-item">
                <img src={ConhecimentoPrevio} alt="Ícone de conhecimento prévio" />
                <span class="text-break">Sem necessidade de conhecimento prévio</span>
            </div>
        </div>
    );
}

export default ProcessInformation;
