import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { renderRoutes } from './routing';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>{renderRoutes()}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
