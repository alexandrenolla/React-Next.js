import { useState } from "react"

interface Produto {
    nome: string
    preco: number
    desconto: number
} 

export default function Formulario() {
    const [produto, setProduto] = useState<Produto>(
        {
            nome: "",
            preco: 0,
            desconto: 0
        }
    )

    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="text-2xl font-black">
                Exemplo Formulário
            </span>
            <div>
                <span>Nome:</span>
                <input type="text" 
                className="input"
                value={produto.nome} 
                onChange={e => {setProduto({
                    ...produto,
                    nome: e.target.value
                })
                }}
                />
            </div>
            <div>
                <span>Preço:</span>
                <input type="number" 
                className="input"
                min={0}
                step={0.1}
                value={produto.preco} 
                onChange={e => {setProduto({
                    ...produto,
                    preco: +e.target.value
                })
                }}
                />
            </div>
            <div>
                <span>Desconto:</span>
                <input type="number" 
                className="input"
                min={0}
                max={0.6}
                step={0.1}
                value={produto.desconto} 
                onChange={e => {setProduto({
                    ...produto,
                    desconto: +e.target.value
                })
                }}
                />
            </div>

            <div className="flex flex-col gap-2 text-2xl">
                <span>{JSON.stringify(produto)}</span>
                <span>R$ {produto.preco}</span>
                <span>R$ {produto.desconto}</span>
                <span>R$ {produto.preco * (1 - produto.desconto)}</span>
            </div>
        </div>
    )
}