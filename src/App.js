import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
