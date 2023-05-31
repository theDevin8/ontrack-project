import { createContext, useReducer } from "react";

export const HabitcardContext = createContext()

export const HabitcardsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_HABITCARDS':
            return{
                habitcards: action.payload
            }
        case 'CREATE_HABITCARD':
            return{
                habitcards: [action.payload, ...state.habitcards]
            }
        case 'DELETE_HABITCARD':{
            return{
                habitcards: state.habitcards.filter((h) => h._id !== action.payload._id)
            }
        }
        default:
            return state
    }
}

export const HabitcardContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(HabitcardsReducer, {
        habitcards: null
    })

    return(
        <HabitcardContext.Provider value={ {...state, dispatch}}>
            { children }
        </HabitcardContext.Provider>
    )
}