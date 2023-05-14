import type {NextApiRequest, NextApiResponse} from "next"

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(`
    <html>
    <head>
        <title>Hora Certa???</title>
        <style>
            html {
                color:#eee;
                background-color: #333;
                font-size: 5rem;
            }
        </style>
        <script>
            function atualizarHora() {
                const span = document.querySelector('span')
                span.textContent = new Date().toLocaleTimeString('pt-BR')
            }
            setInterval(atualizarHora, 1000)
        </script>
    </head>
    <body>
        <b>Hora Certa:</b>
        ${new Date().toLocaleTimeString('pt-BR')}
    </body>
</html>`)
}