import { useEffect } from "react"

export const Square = () => {
    useEffect(() => {
        console.log ('RODOU O EFFECT DO QUADRADO');

        return () => {
            console.log('rodou o clanup...')
        }
    });

    return(
        <div className="w-40 h-40 bg-red-400"></div>
    )
}