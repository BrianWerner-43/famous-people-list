import { useState, useEffect } from 'react';

function Form({fetchPeople}) {
  // fetchPeople passed in the parameter inside {}  
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database
    let person = {
      name: famousPersonName,
      role: famousPersonRole
    }
    axios({
      method: 'POST',
      url: '/people',
      data: person
    }).then((response) => {
      console.log('POST request success!');
      setPersonName('');
      setPersonRole('');
      fetchPeople();
    }).catch((dbError) => {
      console.log('dbError', dbError);
    })

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }
    return (
        <>
          <form onSubmit={addPerson}>
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" onChange={e => setPersonName(e.target.value)} />
            <label htmlFor="role-input">Famous for:</label>
            <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
            <button type="submit">Done</button>
          </form>
        </>
      
      );
// Move post route into here
}















export default Form