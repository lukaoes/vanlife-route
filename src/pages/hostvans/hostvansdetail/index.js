import { Link, NavLink, Outlet } from "react-router-dom"

const HostVansDetail = () => {

    return (
        <div>
            <Link to='..' relative="path">
                Back to all vans
            </Link>

            <h1>
                van details here
            </h1>
            <div>
                <NavLink to='.' end style={({ isActive }) => isActive ? { color: 'red' } : null}>
                    details
                </NavLink>
                <NavLink to='pricing' style={({ isActive }) => isActive ? { color: 'red' } : null}>
                    pricing
                </NavLink>
                <NavLink to='photos' style={({ isActive }) => isActive ? { color: 'red' } : null}>
                    photos
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default HostVansDetail