import { NavLink } from "react-router-dom";

const DogList = ({dogs}) => {
    return (
        <nav>
            <NavLink to="/dogs/whiskey">Whiskey</NavLink>
            <NavLink to="/dogs/duke">Duke</NavLink>
            <NavLink to="/dogs/perry">Perry</NavLink>
            <NavLink to="/dogs/tubby">Tubby</NavLink>
        </nav>

    )
}

export default DogList; 