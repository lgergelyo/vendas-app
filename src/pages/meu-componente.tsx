
interface MensagemProps{
    mensagem:String;
}

const Mensagem: React.FC<MensagemProps> = (props:MensagemProps) => {
    return(
        <div>
            {props.mensagem}
        </div>
    )
}

const MeuComponente = () => {
    return(
        <div>
            <Mensagem mensagem="Mudei a msn"/>
        </div>
    )
}

export default MeuComponente;