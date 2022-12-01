import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

// Routes
import Routes from './containers/Routes';

// Context
import DataProvider from './context/dataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
