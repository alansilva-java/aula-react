import { CountContext } from "@/app/contexts/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext)

    const handleBanAll = () => {
      countCtx?.SetOnlineCount(0);
    }

    return(
      <>
        <p> Online: (countCtx?.onlineCount)</p>  
        <button onClick={handleBanAll}>Banir Todos</button>
      </>
    )
}