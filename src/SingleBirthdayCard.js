import React, {useState} from 'react';
import data from './data';
import './singleBirthdayCard.css';


function SingleBirthdayCard (){
    const [people, setPeople] = useState(data);
    console.log(people);
    
    const clearAll = () => {
        console.log('clear all');
         
}
    return(
        <div>
            {people.map(singlePerson => <div>                                            
                                            <h3>Name: {singlePerson.name}</h3>
                                            <h3>Age: {singlePerson.age}</h3>
                                            <img src = {singlePerson.image} className = "singleBirthdayCard__image"/>
                                        </div>)}                        

        </div>
    )
}
export default SingleBirthdayCard;