import './App.css';

const App = () => {
  const name = 'John';

  return (
    <div className="App">
      <h1>Hello</h1>
      {name ? (
        <>
        test
        </>
      ):(
        <>
        <h1>test</h1>
        </>
      )}
    </div>
  );
}

export default App;
