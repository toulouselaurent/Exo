import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
      name = "Irma Perry"
      avatarUrl = "https://randomuser.me/api/portraits/women/32.jpg"
      online = { false }
      />
      <Contact 
      name = "Mildred Gomez"
      avatarUrl = "https://randomuser.me/api/portraits/women/78.jpg"
      online = { true }
      />
      <Contact 
      name = "Victoria Perkins"
      avatarUrl = "https://randomuser.me/api/portraits/women/64.jpg"
      online = { true }
      />
    </div>
  );
}

export default App;
