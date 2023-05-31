import { useContext } from "react";
import { HabitcardContext } from "../context/habitcardContext";

export const useHabitCardContext = () => {
    const context = useContext(HabitcardContext)

    if(!context){
        throw Error('useHabitcardsContext must be used inside an habitCardsContextProvider')
    }
    return context
}