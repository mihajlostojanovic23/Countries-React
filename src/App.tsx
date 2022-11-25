import { BrowserRouter as Router } from 'react-router-dom';

import DataProvider from './context/dataContext';
import Routes from './containers/Routes';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
