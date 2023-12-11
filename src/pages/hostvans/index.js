import { Link } from "react-router-dom"

const HostVans = () => {

    return (
        <h1>
            <Link to='1'>
                Van 1
            </Link>
            <Link to='2'>
                Van 2
            </Link>
            <Link to='3'>
                Van 3
            </Link>
        </h1>
    )
}

export default HostVans