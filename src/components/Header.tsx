import { useContext } from "react";
import { OnlineUsers } from "./OnlineUsers";
import { CountContext } from "@/app/contexts/CountContext";

export const Header = () => {
    const countCtx = useContext(CountContext)

    return (
        <header>
            <h1 className="">Título da página</h1>
            <OnlineUsers />
        </header>
    );
}