function FamousPersonList(famousPeopleArray) {
    let [famousPeopleArray, setPeopleArray] = useState([]);

    return (
        <section className="new-person-section">
         
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


export default FamousPersonList