import { createContext } from "react";

type CountContextType = {
    onlineCount: number;
    SetOnlineCount: (n: number) => void;
}
export const CountContext = createContext<CountContextType | null >(null)