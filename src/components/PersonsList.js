import Person from './Person';

const PersonsList = ({ people }) => {
    return (
        people.map( person => {
            return <Person key={person.id} { ...person } />
        })
    )
}

export default PersonsList;