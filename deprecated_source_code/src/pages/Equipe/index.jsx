import Menu from '../../components/Menu/index';
import './index.css';
import equipe from '../../data/database';

const Equipe = () => {
  return (
    <>
      <Menu />
      <div className="div-equipe-empresas">
        <div className="container-equipe">
          {equipe.map((membro) => (
            <div className="card" key={membro.id}>
              <h2 className="nome-equipe">{membro.nome}</h2>
              <img className="imagem-equipe" src={membro.capa} alt={membro.nome} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Equipe;
