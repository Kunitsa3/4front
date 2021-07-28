import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from './routing';

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
