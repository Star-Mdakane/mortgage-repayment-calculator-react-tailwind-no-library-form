import { createContext, useState } from "react";


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [showResults, setShowResults] = useState(false)

    const value = {
        showResults,
        setShowResults
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }