export interface LinhaProps {
    children: React.ReactNode
}

export default function Linha(props: LinhaProps) {
    return (
        <div className="flex flex-wrap justify-center gap-20">
            {props.children}
        </div>
    )
}