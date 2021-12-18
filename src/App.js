import './App.css';
import Home from './Home';

function App() {
  return (
    <>
      <div className="w-full">
        <main role="main" className="w-full p-3 lg:p-0 lg:mt-10 flex flex-col justify-center">
          <div className="w-full sm:w-1/2 lg:w-3/5 m-auto">
            <Home />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
