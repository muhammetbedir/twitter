import { useRouter } from "next/router"
import { useState, useContext, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const router = useRouter()
    alert(router.pathname)
    if (router.pathname !== "/login")
        router.push("/login")
    return (
        <AuthContext.Provider value={"value"} >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
