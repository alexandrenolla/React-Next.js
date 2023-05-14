import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Minimo() {
    const [valor, setValor] = useState('')

    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="text-2xl font-black">
                Exemplo Estado Minimo
            </span>
            <input 
            type="text"
            value={valor}
            onChange={ x => {
                setValor(x.target.value)
            }}
            className="input"
            />
        </div>
    )
}