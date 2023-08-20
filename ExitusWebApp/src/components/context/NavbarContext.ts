import { createContext } from "react";
import { NavbarSelected } from "../../types/NavbarSelected.ts";

const defaultNavbarValue: NavbarSelected = "register"

const NavbarContext = createContext<{
    navbar: NavbarSelected
    setNavbar: React.Dispatch<React.SetStateAction<NavbarSelected>>
}>({
    navbar: defaultNavbarValue,
    setNavbar: () => { }
})

export default NavbarContext;