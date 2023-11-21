import React, { useEffect } from 'react';
import Header from '../Header/Header';
import FamousSection from '../FamousSection/FamousSection';
import Form from '../Form/Form.jsx';
import FamousPersonList from '../FamousPersonList/FamousPersonList.jsx';
import './App.css';

function App() {
  const fetchPeople = () => {
    useEffect(() => {fetchPeople()}, [])
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

  return (
    <div className="App">
      <Header />
      <FamousSection />
      <Form fetchPeople={fetchPeople}/>
      <FamousPersonList />
      {/* form */}
      {/* 
        The list shouldn't go here.
        The list goes inside of the FamousSection Component
      */}
    </div>
  );
}

export default App;
