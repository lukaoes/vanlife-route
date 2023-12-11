import { NavLink, Outlet } from "react-router-dom"

const HostLayout = () => {

    return (
        <div>
            <nav>
                <NavLink
                    to='.'
                    end
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to='Income'
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    Income
                </NavLink>
                <NavLink
                    to='vans'
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    Vans
                </NavLink>
                <NavLink
                    to='reviews'
                    style={({ isActive }) => isActive ? { color: 'red' } : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>

    )
}

export default HostLayout