import { Layout, Input } from "components"
import {useState} from "react"

export const CadastroProdutos: React.FC = () => {
    
    const [sku, setSku] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

    const submit = () => {
        const produto = { 
            sku, 
            preco, 
            nome, 
            descricao
        }
        console.log(produto)
    }

    return (
        <Layout titulo="Cadastro de Produtos" >
            <div className="columns">

                <Input label="SKU: *" 
                        id="inputSku"
                        columnClasses="is-half"
                        value={sku}
                        onChange={setSku}
                        placeholder="Digite o sku do produto"/>

                <Input label="Preço: *" 
                        id="inputPreço"
                        columnClasses="is-half"
                        value={preco}
                        onChange={setPreco}
                        placeholder="Digite o preço do produto"/>
            </div>
            <div className="columns">
                <Input label="Nome: *" 
                            id="inputNome"
                            columnClasses="is-full"
                            value={nome}
                            onChange={setNome}
                            placeholder="Digite o nome do produto"/>
            </div>
            <div className="columns">
                {/* <Input label="Descrição: *" 
                                id="inputDesc"
                                columnClasses="is-full"
                                value={descricao}
                                onChange={setDescricao}
                                placeholder="Digite a descrição do produto"/> */}
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea" 
                                    id="inputDesc" 
                                    value={descricao}
                                    onChange={event => setDescricao(event.target.value)} 
                                    placeholder="Digite a descrição do produto" />
                    </div>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}