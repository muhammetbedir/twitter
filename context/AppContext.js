import { useState, useContext, createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ firstName: "", lastName: "", userName: "" })
    const value = {
        user,
        setUser
    }
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}
export const useApp = () => useContext(AppContext)
