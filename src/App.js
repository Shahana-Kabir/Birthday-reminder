import React, { useState } from 'react';
import data from './data';
import SingleBIrthdayCArd from './SingleBirthdayCard';

function App() {
  const[people, setPeople] = useState(data);
  
 
  return (<section className = 'container'>
            <h3>{people.length} birthdays today</h3>
            {/* <SingleBIrthdayCArd /> */}
            {people.length>0? <SingleBIrthdayCArd />: <div>
                                                      <h3>All birthdays Cleared</h3>
                                                  </div>}
            <button onClick = {()=> setPeople([])}>clear all</button>
            
                                        
            
        </section>);
}

export default App;
