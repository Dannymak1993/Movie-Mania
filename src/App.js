import './App.css';

const App = () => {
  const name = null;

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      {name ? (
        <>
          test
        </>
      ) : (
        <h1>test</h1>
      )}
    </div>
  );
}

export default App;
