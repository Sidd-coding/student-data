import React, { useState } from 'react';

import './App.css';
import Header from './Component/Header';



function App() {

  const [student, setStudent] = useState({
    //dummy data
    name: '',
    image: '',
    remaining_time: '',
    studata: []
  });

  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/e-developersworld/dummy_notes/noteInfo")
      .then(results => results.json())
      .then(record => {
        console.log(record);
        const { first_name, middle_name, last_name, profile_picture } = record.student_details;


        //default data 
        setStudent({
          name: `${first_name} ${middle_name} ${last_name}`,
          image: profile_picture,
          remaining_time: record.completed_datetime,
          studata: record.answers
        })
      });
  }, []);

  return (
    <div className="App">
      <Header student={student} />

    </div>
  );
}



export default App;