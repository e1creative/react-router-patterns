import { Link, useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const { name } = useParams()

    let currentDog;
    
    dogs.forEach((dog, idx) => {
        if (dog.name.toLowerCase() === name) {
            console.log(dog)
            currentDog =  dogs[idx];
        }
    })

    return (
        <div className="DogDetails">
            <p>Name: {currentDog.name}</p>
            <p>Age: {currentDog.age}</p>
            <img src={currentDog.src} alt={currentDog.name} />
            { currentDog.facts.map(fact => <p>{fact}</p>) }
            <Link to="/dogs">Return To Dogs List</Link>
        </div>
    )
}

export default DogDetails;