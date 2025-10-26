import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://cicd-react-dotnet-1.onrender.com/api/hello')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>React + .NET CI/CD Demo</h1>
      <p>API Response: {data || 'Loading...'}</p>
    </div>
  );
}
export default App;