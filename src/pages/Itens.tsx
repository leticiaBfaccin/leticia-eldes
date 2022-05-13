import './Itens.css';
import Botao from '../components/botao';
import Cabecalho from '../components/Cabeçalho';
import Rodape from '../components/Rodape';


const ItensPage = function() {
    return (
    <div>
            <Cabecalho />
            <main>
                <h1>Itens</h1>
                <ul>
                    <li>seja gentil</li>
                    <li>seja grato</li>
                    <li>beba coca</li>
                </ul>
                <Botao texto="fechar"/><Botao texto= "cancelar" />
               
            </main>
            <Rodape/>
            </div>
    )
}

export default ItensPage;