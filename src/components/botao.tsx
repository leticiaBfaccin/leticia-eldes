import { FunctionComponent } from 'react';
import './botao.css'

type Props ={
    texto: string 
}
const Botao: FunctionComponent<Props> = function (props) {
    return (
        <>
        <button>enviar</button>
        </>
    );
};

export default Botao;
