import './App.css';
import Header from './components/Header';
// import ViewCounter from './components/ViewCounter';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div className="App">
      {/* <h2>[Placeholder]</h2> */}

      <Header message="Pat's Pizza Place" /> {/* Header({ message: 'hello world' }) */}

      {/* <ViewCounter /> */}

      <Pizza />
    </div>
  );
};

export default App;
