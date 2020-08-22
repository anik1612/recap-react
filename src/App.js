import React, { useState } from 'react';
import img from '../src/images/anik.jpg'
import img1 from '../src/images/sathi.jpg'
import img2 from '../src/images/Anik Sarker.jpg'
import './App.css';

function App() {
  // const [user, setUser] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  // },[])

  const person = [
    {
      id: 1,
      name: 'Mr.',
      age: 25,
      src: img
    },
    {
      id: 2,
      name: 'Anik',
      age: 21,
      src: img1
    },
    {
      id: 3,
      name: 'Sarker',
      // age: 23,
      src: img2
    }
  ]
  return (
    <div className="App">
      <header className="App-header">{
        person.map(person => <Person name={person.name} key={person.id} age={person.age} src={person.src}></Person>)
      }
        <div>
          <MovieCount></MovieCount>
        </div>
      </header>
    </div>
  );
}

const style = {
  color: 'black',
  backgroundColor: '#fdfdfd',
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '7px 5px 10px yellowgreen'

}

const imgStyle = {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  margin: '0 auto'
}

function Person(props) {
  return (
    <div style={style}>
      <img style={imgStyle} src={props.src} alt="profile-img" />
      <h1>Hi, {props.name}</h1>
      <h3>Age: {props.age || 20}</h3>
      <h3>React is a <span style={{ color: 'red' }}>&#10084;</span></h3>
    </div>
  )
}

function MovieCount() {
  let [count, setCount] = useState(0);

  const increase = () => setCount(++count);
  const decrease = () => setCount(--count);

  //movie count validation
  if (count < 1) {
    count = 0;
  }

  return (
    <div>
      <button style={{ marginRight: '15px' }} onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h3>Number of Movie: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  const count = props.movies;
  return (
    <div>
      <h4>Number of movie i have acted: {count}</h4>
    </div>
  )
}

export default App;
