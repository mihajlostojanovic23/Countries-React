import { BrowserRouter as Router } from 'react-router-dom';

import DataProvider from './context/dataContext';
import Routes from './containers/Routes';
import { ThemeProvider } from './context/themeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <DataProvider>
          <Router>
            <Routes />
          </Router>
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
