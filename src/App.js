import { Router, Switch } from 'react-router-dom';
import { renderRoutes } from './routing';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>{renderRoutes()}</Switch>
      </Router>
    </div>
  );
}

export default App;
