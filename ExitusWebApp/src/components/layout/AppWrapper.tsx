import { useState } from "react"
import { NavbarSelected } from "../../types/NavbarSelected.ts"
import NavbarContext from "../context/NavbarContext.ts"


const AppWrapper = ({ children }: any) => {
    
    const [navbar, setNavbar] = useState<NavbarSelected>("register")

    return (
        <NavbarContext.Provider value={{ navbar, setNavbar }}>
            {children}
        </NavbarContext.Provider>
    )
}

export default AppWrapper