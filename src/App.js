import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Login from './components/Login';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import './styles/app.scss';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
