import FetchAPI from './components/FetchAPI.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="bg-purple">
      <div className="bg-purple">
        <Header />
      </div>
      <div className="flex-1 h-full bg-accentPurple">
        <FetchAPI />
      </div>
    </div>
  );
}

export default App;
