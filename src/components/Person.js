const Person = ({image, age, name}) => {
    return (
        <li>
            <img src={image} alt={name} />
            <div className="info">
                <h3>{name}</h3>
                <p>{age}</p>
            </div>
        </li>
    )
}

export default Person;