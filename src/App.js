import './App.css';

const Person = (props) => {
  return (
    <>
      <h1> Name: {props.name}</h1>
      <h2> Last Name: {props.LastName}</h2>
      <h2> Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name='John' LastName='Doe' age='30' />
      <Person name='Jane' LastName='Die' age={30 - 1} />
      <Person name='Mary' LastName='Doe' Age='24' />
    </div>
  );
}

export default App;
