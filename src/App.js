import './App.css';

const App = () => {
  const name = "Danny";

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      {name ? (
        <>
          test
        </>
      ) : (
        test
      )}
    </div>
  );
}

export default App;
