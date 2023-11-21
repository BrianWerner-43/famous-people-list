import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
 useEffect(() => {
  fetchPeople();
 }, [])
  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios({
      method: 'GET',
      url: '/people'
    }).then((response) => {
      console.log(response.data);
      setPeopleArray(response.data)
    }).catch((dbError) => {
      console.log('error in GET route', dbError);
    })
  }

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
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {
            famousPeopleArray.map((person) => {
              return <li key={person.id}>{person.name} is famous for {person.role}</li>
            })
          }

        </ul>
      </section>
    );
}

export default FamousSection;
