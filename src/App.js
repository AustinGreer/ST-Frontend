import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import './styles/app.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
