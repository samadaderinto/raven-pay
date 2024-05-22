import { SetStateAction, createContext } from "react";
import { ModeProps } from "../types/mode";


export const AppContextProvider = createContext<ModeProps>({
    mode: "light",
    setMode: (value: SetStateAction<string>) => value

});