import { NavLink } from "react-router-dom"
import { HeaderLayout, NavStyle } from "./header.styled"

const Header = () => {

    return (
        <HeaderLayout>
            <NavLink to='/'>#VANLIFE</NavLink>
            <NavStyle>
                <NavLink
                    to='host'
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to='about'
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    About
                </NavLink>
                <NavLink
                    to='vans'
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    Vans
                </NavLink>
            </NavStyle>
        </HeaderLayout>
    )
}

export default Header