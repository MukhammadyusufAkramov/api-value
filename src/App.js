import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(datas => setdata(datas))
  },[]);

  console.log(data);

  function methodpost(e) {
    e.preventDefault()
    console.log(e.target.elements.id.value);
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.price.value);
  }

  return (
    <div className="App">
      <h1>App</h1>
      <form action='/' onSubmit={methodpost}>
        <input type="numbrt" name='id' />
        <input type="text" name='name' />
        <input type="number" name='price' />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

export default App;
